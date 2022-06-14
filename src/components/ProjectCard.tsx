import { AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/datetime'
import useDeleteProject from '../lib/hooks/projects/useDeleteProject'

interface Props {
	showOptions?: boolean
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
	showOptions,
}: Props) {
	const iconSize = 26

	const { mutate: deleteProject } = useDeleteProject(_id)

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
						<div className='badge badge-primary px-5 py-4'>
							Actors: {actors.length}
						</div>
						<div className='badge badge-success px-5 py-4'>
							Use Cases: {useCases.length}
						</div>
					</div>
				</div>
			</div>
			{showOptions ? (
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
			) : null}
		</div>
	)
}
