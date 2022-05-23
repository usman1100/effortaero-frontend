import toast from 'react-hot-toast'
import { AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useDeleteProject from '../lib/hooks/projects/useDeleteProject'
import AuthStore from '../lib/state/authStore'
import { formatDate } from '../utils/datetime'

interface Props {
	_id: string
	name: string
	actors: any[]
	useCases: any[]
	createdAt: string
	organization: { name: string }
}

export default function ProjectCard({
	_id,
	name,
	actors,
	organization,
	useCases,
	createdAt,
}: Props) {
	const iconSize = 26

	const { mutate: deleteProject } = useDeleteProject(_id)
	const role = AuthStore(state => state.role)

	const handleDelete = () => {
		const proName = prompt(
			`Enter project name to confirm deletion: ${name}`
		)
		// check if cancel is clicked
		if (proName === null) {
			return
		}

		if (proName === name) deleteProject()
		else toast.error('Project name does not match')
	}

	return (
		<div className='flex my-5'>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>Created At: {formatDate(createdAt)}</p>
					<p>Organization: {organization?.name}</p>
					<div className='card-actions justify-end'>
						<div className='badge badge-outline'>
							Actors: {actors.length}
						</div>
						<div className='badge badge-outline'>
							Use Cases: {useCases.length}
						</div>
					</div>
				</div>
			</div>
			{role === 'owner' && (
				<div className='grid grid-cols-3 justify-center content-center'>
					<Link to={`/dashboard/projects/${_id}`}>
						<button
							type='button'
							className='btn btn-info btn-circle ml-4 capitalize'
						>
							<div className='tooltip' data-tip='More info'>
								<AiOutlineInfoCircle size={iconSize} />
							</div>
						</button>
					</Link>

					<button
						type='button'
						className='btn btn-warning btn-circle ml-4 capitalize'
						onClick={handleDelete}
					>
						<p className='tooltip' data-tip='Delete project'>
							<AiOutlineDelete size={iconSize} />
						</p>
					</button>
				</div>
			)}
		</div>
	)
}
