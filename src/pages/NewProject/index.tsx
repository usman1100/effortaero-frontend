import { useFormik } from 'formik'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import AttributeCard from './AttributeCard'
import useCreatedOrgs from '../../lib/hooks/organizations/useCreatedOrgs'
import ActorInputForm from './AttributeInputForm'
import useCreateProject from '../../lib/hooks/projects/useCreateProject'

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

export default function NewProject() {
	const [actors, setActors] = useState<Actor[]>([])
	const [useCases, setUseCases] = useState<UseCase[]>([])

	const formik = useFormik({
		initialValues: {
			name: '',
			organization: '',
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
			<Link to='/dashboard/projects'>
				<button type='button' className='btn btn-warning'>
					Back
				</button>
			</Link>
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

				{/* ------------------------------------------------------------------------ */}

				<button type='submit' className='btn btn-outline'>
					Create Project
				</button>
			</form>
		</div>
	)
}
