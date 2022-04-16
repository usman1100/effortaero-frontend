import { useFormik } from 'formik'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import ActorCard from '../components/ActorCard'

export interface Actor {
	name: string
	complexity: string
	description: string
}

function ActorInputForm({ addActor }: { addActor: (fn: any) => void }) {
	const [actor, setActor] = useState<Actor>({
		name: '',
		complexity: 'simple',
		description: '',
	})

	const handleClick = () => {
		if (!actor.name) {
			toast.error('Actor name is required')
			return
		}

		addActor((prev: any[]) => {
			if (prev.find(a => a.name === actor.name)) {
				toast.error('Actor already exists')
				return prev
			}
			return [...prev, actor]
		})
	}

	return (
		<div className='form-control border-2 p-4 col-span-3'>
			<div className='grid grid-cols-2'>
				<div>
					<p className='my-2  font-bold'>Actor Name</p>
					<input
						value={actor.name}
						onChange={e =>
							setActor(prev => ({
								...prev,
								name: e.target.value,
							}))
						}
						type='text'
						name='name'
						id='name'
						className='input input-primary'
					/>
				</div>
				<div>
					<p className='my-2 font-bold'>Actor Type</p>
					<select
						name='complexity'
						id='complexity'
						className='select '
						value={actor.complexity}
						onChange={e =>
							setActor(prev => ({
								...prev,
								complexity: e.target.value,
							}))
						}
					>
						<option value='simple'>Simple</option>
						<option value='average'>Average</option>
						<option value='complex'>Complex</option>
					</select>
				</div>
			</div>
			<p className=' font-bold mt-5'>Actor Description</p>
			<input
				type='text'
				name='description'
				id='description'
				value={actor.description}
				onChange={e =>
					setActor(prev => ({
						...prev,
						description: e.target.value,
					}))
				}
				className='input input-primary'
			/>
			<button
				className='btn btn-primary w-1/3 mt-5'
				type='button'
				onClick={handleClick}
			>
				Add Actor
			</button>
		</div>
	)
}

export default function NewProject() {
	const formik = useFormik({
		initialValues: {},
		onSubmit: () => {},
	})

	const [actors, setActors] = useState<Actor[]>([])

	const [displayActorForm, setDisplayActorForm] = useState<boolean>(false)

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
					onChange={formik.handleChange}
				/>

				<div className='grid grid-flow-col mt-5'>
					<p className='my-4 font-bold'>Create Actors</p>

					<button
						type='button'
						className='btn btn-warning text-slate-50'
						onClick={() => {
							setDisplayActorForm(prev => !prev)
						}}
					>
						Add Actor
					</button>
				</div>

				{displayActorForm && <ActorInputForm addActor={setActors} />}
				<p className='mb-5'>
					Actors Created:
					<b className='ml-5'>{actors.length}</b>
				</p>

				<div className='grid grid-cols-4 gap-1 p-3'>
					{actors.map(actorInfo => (
						<ActorCard {...actorInfo} deleteActor={setActors} />
					))}
				</div>
			</form>
		</div>
	)
}
