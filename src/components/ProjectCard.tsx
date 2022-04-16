import { AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai'
import { formatDate } from '../utils/datetime'

interface Props {
	id: string
	name: string
	actors: any[]
	useCases: any[]
	createdAt: string
	organization: { name: string }
}

export default function ProjectCard({
	id,
	name,
	actors,
	organization,
	useCases,
	createdAt,
}: Props) {
	const iconSize = 26

	return (
		<div className='flex my-5'>
			<div className='card w-96 bg-base-100 shadow-xl' id={id}>
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
			<div className='grid grid-cols-3 justify-center content-center'>
				<button
					type='button'
					className='btn btn-info btn-circle ml-4 capitalize'
				>
					<div className='tooltip' data-tip='More info'>
						<AiOutlineInfoCircle size={iconSize} />
					</div>
				</button>

				<button
					type='button'
					className='btn btn-warning btn-circle ml-4 capitalize'
				>
					<div className='tooltip' data-tip='Delete project'>
						<AiOutlineDelete size={iconSize} />
					</div>
				</button>
			</div>
		</div>
	)
}
