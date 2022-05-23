import { useFormik } from 'formik'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { VscJson } from 'react-icons/vsc'
import { useDropzone } from 'react-dropzone'
import AttributeCard from './AttributeCard'
import useCreatedOrgs from '../../lib/hooks/organizations/useCreatedOrgs'
import ActorInputForm from './AttributeInputForm'
import useCreateProject from '../../lib/hooks/projects/useCreateProject'
import BackButton from '../../components/BackButton'

export interface Actor {
	name: string
	complexity: string
	description: string
}

export interface UseCase {
	name: string
	complexity: string
	description: string
}

interface TF {
	name: string
	value: string
}

interface MyDropzoneProps {
	setActors: Function
	setUseCases: Function
}
function MyDropzone({ setActors, setUseCases }: MyDropzoneProps) {
	const onDrop = useCallback(acceptedFiles => {
		const file: File = acceptedFiles[0]

		const reader = new FileReader()
		reader.onload = () => {
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
		}
		reader.readAsText(file)
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			'application/json': [],
		},
	})

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<div className='flex items-center cursor-pointer'>
					<VscJson size={30} className='mr-5' />
					<p>Drop JSON here</p>
				</div>
			) : (
				<div className='flex items-center cursor-pointer'>
					<VscJson size={30} className='mr-5' />
					<p>
						Drag and drop some files here, or click to select files
					</p>
				</div>
			)}
		</div>
	)
}
export default function NewProject() {
	const [actors, setActors] = useState<Actor[]>([])
	const [useCases, setUseCases] = useState<UseCase[]>([])

	const technicalFactors = [
		{ name: 'Distributed System', value: 'distributed' },
		{ name: 'Performance', value: 'performance' },
		{ name: 'Complex internal Processing', value: 'processing' },
		{ name: 'Portable', value: 'portable' },
	]

	let technicalFactorsKeys: any
	technicalFactors.forEach(e => {
		technicalFactorsKeys = { ...technicalFactorsKeys, [e.value]: 1 }
	})

	const environmentalFactors = [
		{ name: 'Stable Requirements', value: 'stable' },
		{ name: 'Difficult Programming language', value: 'language' },
		{ name: 'Part-time workers', value: 'parttime' },
		{ name: 'Application Experience', value: 'experience' },
	]

	let environmentalFactorsKeys: any
	environmentalFactors.forEach(e => {
		environmentalFactorsKeys = { ...environmentalFactorsKeys, [e.value]: 1 }
	})

	const formik = useFormik({
		initialValues: {
			name: '',
			organization: '',
			technicalFactors: technicalFactorsKeys,
			environmentalFactors: environmentalFactorsKeys,
		},
		onSubmit: values => {
			if (!values.name) {
				toast.error('Project name is required')
				return
			}
			if (!actors.length) {
				toast.error('At least one actor is required')
				return
			}
			if (!useCases.length) {
				toast.error('At least one use case is required')
				return
			}
			if (!values.organization) {
				toast.error('Organization is required')
				return
			}
			mutate()
		},
	})

	const { mutate } = useCreateProject({
		name: formik.values.name,
		orgID: formik.values.organization,
		environmentalFactors: formik.values.environmentalFactors,
		technicalFactors: formik.values.technicalFactors,
		useCases,
		actors,
	})

	const [displayAttrForm, setDisplayAttrForm] = useState({
		actor: false,
		useCase: false,
	})

	const { data: orgs } = useCreatedOrgs()

	return (
		<div className='p-4'>
			<BackButton />
			<h1 className='text-4xl'>Create Project</h1>

			<form
				onSubmit={formik.handleSubmit}
				className='form-control mt-10 '
			>
				<p className='font-bold'>Project Name</p>
				<input
					className='input input-secondary mt-2'
					id='name'
					name='name'
					type='text'
					placeholder='i.e Facebook, Google, etc'
					value={formik.values.name}
					onChange={formik.handleChange}
				/>

				<p className='font-bold mt-5'>Select Organization</p>
				<select
					name='organization'
					id='organization'
					value={formik.values.organization}
					onChange={formik.handleChange}
					className='select select-secondary'
				>
					<option value=''>Select Organization</option>
					{orgs?.data?.data?.map((item: any) => (
						<option key={item?.org.id} value={item?.org._id}>
							{item?.org.name}
						</option>
					))}
				</select>
				{/* ------------------------------------------------------------------------ */}

				<div className='mb-3'>
					<div className='grid grid-flow-col mt-5'>
						<p className='my-4 font-bold'>Create Actors</p>

						<button
							type='button'
							className='btn btn-warning text-slate-50'
							onClick={() => {
								setDisplayAttrForm(prev => ({
									...prev,
									actor: !prev.actor,
								}))
							}}
						>
							Add Actor
						</button>
					</div>

					{displayAttrForm.actor && (
						<ActorInputForm attrType='actor' addActor={setActors} />
					)}
					<p className='mb-5'>
						Actors Created:
						<b className='ml-5'>{actors.length}</b>
					</p>

					<div className='grid grid-cols-4 gap-1 p-3'>
						{actors.map(actorInfo => (
							<AttributeCard
								{...actorInfo}
								deleteActor={setActors}
							/>
						))}
					</div>
				</div>

				{/* ------------------------------------------------------------------------ */}

				<div className='mb-3'>
					<div className='grid grid-flow-col mt-5'>
						<p className='my-4 font-bold'>Create Use Cases</p>

						<button
							type='button'
							className='btn btn-warning text-slate-50'
							onClick={() => {
								setDisplayAttrForm(prev => ({
									...prev,
									useCase: !prev.useCase,
								}))
							}}
						>
							Add Use Case
						</button>
					</div>

					{displayAttrForm.useCase && (
						<ActorInputForm
							attrType='use-case'
							addActor={setUseCases}
						/>
					)}
					<p className='mb-5'>
						Use Cases Created:
						<b className='ml-5'>{actors.length}</b>
					</p>

					<div className='grid grid-cols-4 gap-1 p-3'>
						{useCases.map(ucInfo => (
							<AttributeCard
								{...ucInfo}
								deleteActor={setUseCases}
							/>
						))}
					</div>
				</div>

				<div className='w-full h-32 grid items-center justify-center border-2 border-slate-300 mb-5 rounded-lg'>
					<div className='flex items-center'>
						<MyDropzone
							setActors={setActors}
							setUseCases={setUseCases}
						/>
					</div>
				</div>

				{/* ------------------------------------------------------------------------ */}

				<h1 className='text-2xl font-bold mb-5'>Influential Factors</h1>

				<div className='grid grid-cols-2'>
					<div>
						<h1 className='font-bold'>Technical Factors</h1>
						<div className='w-1/3'>
							{technicalFactors.map((f: TF) => (
								<>
									<p className='my-4'>{f.name}</p>
									<input
										id={f.value}
										name={`technicalFactors.${f.value}`}
										type='range'
										min={1}
										max={5}
										className='range range-primary'
										step={1}
										value={
											formik.values.technicalFactors[
												f.value
											]
										}
										onChange={formik.handleChange}
									/>
									<div className='w-full flex justify-between text-xs px-2'>
										<span>1</span>
										<span>2</span>
										<span>3</span>
										<span>4</span>
										<span>5</span>
									</div>
								</>
							))}
						</div>
					</div>

					<div>
						<h1 className='font-bold'>Environmental Factors</h1>
						<div className='w-1/3 my-5'>
							{environmentalFactors.map((f: TF) => (
								<>
									<p className='my-4'>{f.name}</p>
									<input
										id={f.value}
										name={`environmentalFactors.${f.value}`}
										type='range'
										min={1}
										max={5}
										className='range range-secondary'
										step={1}
										value={
											formik.values.environmentalFactors[
												f.value
											]
										}
										onChange={formik.handleChange}
									/>
									<div className='w-full flex justify-between text-xs px-2'>
										<span>1</span>
										<span>2</span>
										<span>3</span>
										<span>4</span>
										<span>5</span>
									</div>
								</>
							))}
						</div>
					</div>
				</div>

				<button type='submit' className='btn btn-outline'>
					Create Project
				</button>
			</form>
		</div>
	)
}
