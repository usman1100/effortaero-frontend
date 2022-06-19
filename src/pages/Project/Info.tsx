import toast from 'react-hot-toast'
import { BsGear } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { IoMdHammer } from 'react-icons/io'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import DataTable from 'react-data-table-component'
import useGetProjectDetails from '../../lib/hooks/projects/useGetProjectDetails'
import { Attribute } from '../../types/project'
import { slugify } from '../../utils/misc'
import { Actor, UseCase } from '../NewProject'
import useUpdateProject from '../../lib/hooks/projects/useUpdateProject'
import BackButton from '../../components/BackButton'
import Navigator from '../../components/Navigator'

function UploadAttributes() {
	const [actors, setActors] = useState<Actor[]>([])
	const [useCases, setUseCases] = useState<Actor[]>([])

	const { id } = useParams()

	const { mutate } = useUpdateProject(id as string, {
		actors,
		useCases,
	})

	const onDrop = useCallback(acceptedFiles => {
		const file: File = acceptedFiles[0]

		const reader = new FileReader()
		reader.onload = () => {
			try {
				const text = reader.result
				const obj = JSON.parse(text as string)

				if (!obj?.actors) {
					toast.error('File does not contain actors')
					return
				}

				if (!obj?.useCases) {
					toast.error('File does not contain use cases')
					return
				}

				setActors((prev: any) => [...prev, ...obj.actors])
				setUseCases((prev: any) => [...prev, ...obj.useCases])

				toast.success('Uploaded file')
			} catch (e) {
				toast.error('Invalid JSON uploaded')
			}
		}
		reader.readAsText(file)
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			'application/json': [],
		},
	})

	useEffect(() => {
		if (actors?.length && useCases?.length) {
			mutate()
		}
	}, [actors, useCases])

	return (
		<div {...getRootProps()} className='w-full'>
			<input {...getInputProps()} />
			{isDragActive ? (
				<button className='btn btn-primary w-full' type='button'>
					Drop Here
				</button>
			) : (
				<button className='btn btn-success w-full' type='button'>
					Update Attributes
				</button>
			)}
		</div>
	)
}

export default function Info() {
	const dataToURL = (useCases: Attribute[], actors: Attribute[]) => {
		const cleanedActors = actors.map(e => ({
			name: e.name,
			complexity: e.complexity,
			description: e?.description || '',
		}))

		const cleanedUseCases = useCases.map(e => ({
			name: e.name,
			complexity: e.complexity,
			description: e?.description || '',
		}))

		const data = {
			actors: cleanedActors,
			useCases: cleanedUseCases,
		}

		const raw = `text/json;charset=utf-8,${encodeURIComponent(
			JSON.stringify(data, null, 4)
		)}`

		return `data:${raw}`
	}

	const { id } = useParams()
	const { data, error, isLoading, isError } = useGetProjectDetails(
		id as string
	)

	if (isError) {
		const errorObject = error as any
		toast.error(errorObject?.response?.data?.message[0])
	}

	const downloadBtnRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (data) {
			const { useCases, actors } = data.data.data
			const url = dataToURL(useCases, actors)
			downloadBtnRef?.current?.setAttribute('href', url)
		}
	}, [data])

	const columns = [
		{
			name: 'Name',
			selector: (row: any) => row.name,
			sortable: true,
			maxWidth: '5%',
		},
		{
			name: 'Complexity',
			selector: (row: any) => row.complexity,
			sortable: true,
			maxWidth: '5%',
		},
		{
			name: 'Description',
			selector: (row: any) => row.description,
			sortable: true,
		},
	]

	const [selectedActors, setSelectedActors] = useState<Actor[]>([])
	const [selectedUseCases, setSelectedUseCases] = useState<UseCase[]>([])

	return (
		<div className='p-3'>
			<Navigator />
			<BackButton className='my-5' />
			<h2>{isLoading && <div>Loading...</div>}</h2>
			<h1 className='text-4xl text-center mt-4'>
				{data?.data?.data?.name}
			</h1>
			<hr className='my-4' />

			<h1 className='text-3xl mb-6 font-bold'>Organization</h1>
			<h1 className='text-2xl mb-6 '>
				{data?.data?.data?.organization?.name}
			</h1>
			<hr />

			<Link to={`/dashboard/projects/${id}/estimates`}>
				<button type='button' className='btn btn-info mt-10 mb-10'>
					<BsGear size={28} className='mr-2' /> Calculate Estimates
				</button>
			</Link>
			<h1 className='text-3xl mb-6 font-bold'>Project Attributes</h1>

			<div className='grid grid-flow-col'>
				<UploadAttributes />

				<a
					className='btn btn-secondary ml-5'
					href='?'
					ref={downloadBtnRef as any}
					download={`${slugify(data?.data?.data?.name || '')}.json`}
				>
					Download Attributes
				</a>
			</div>

			<h1 className='text-2xl mb-3 mt-5'>Actors</h1>

			{data?.data?.data?.actors?.length ? (
				<>
					<DataTable
						columns={columns}
						data={data?.data?.data?.actors}
						className='border-2'
						selectableRows
						pagination
						onSelectedRowsChange={e => {
							setSelectedActors(e.selectedRows)
						}}
					/>
					{selectedActors.length > 0 && (
						<button className='mb-10 btn btn-warning' type='button'>
							Delete Actors
						</button>
					)}
				</>
			) : (
				<div className='flex items-center'>
					<div className='alert alert-warning shadow-lg my-5 w-1/2'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='stroke-current flex-shrink-0 h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							<span>No Actors found</span>
						</div>
					</div>
					<button type='button' className='ml-5 btn btn-primary'>
						Create Actors
					</button>
				</div>
			)}

			<h1 className='text-2xl mb-3'>Use Cases</h1>

			{data?.data?.data?.useCases?.length ? (
				<div className='overflow-x-auto'>
					<DataTable
						columns={columns}
						data={data?.data?.data?.useCases}
						selectableRows={data?.data?.data?.useCases?.length > 1}
						pagination
						onSelectedRowsChange={e => {
							setSelectedUseCases(e.selectedRows)
						}}
					/>
				</div>
			) : (
				<div className='flex items-center'>
					<div className='alert alert-warning shadow-lg my-5 w-1/2'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='stroke-current flex-shrink-0 h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							<span>No Use Cases found</span>
						</div>
					</div>
					<button type='button' className='ml-5 btn btn-primary'>
						<IoMdHammer size={25} className='mr-2' />
						Create Use Cases{' '}
					</button>
				</div>
			)}
		</div>
	)
}
