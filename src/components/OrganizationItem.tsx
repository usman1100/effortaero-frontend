import { BsFillPeopleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/datetime'

interface props {
	name: string
	slogan?: string
	createdAt: string
	members?: number
	id: string
}

export default function OrganizationItem({
	name,
	slogan,
	createdAt,
	members,
	id,
}: props) {
	return (
		<div className='card  bg-base-100 shadow-2xl mx-5 my-2'>
			<div className='card-body'>
				<h2 className='font-bold text-2xl'>{name}</h2>

				{slogan && <i className=''>{slogan}</i>}

				<p>Created on {formatDate(createdAt) || 'datetime error'}</p>

				{members ? (
					<div className='grid grid-flow-col items-center mr-auto gap-3'>
						<BsFillPeopleFill />
						<p>
							{members || 'No'}{' '}
							{members > 1 ? 'Members' : 'Member'}
						</p>
					</div>
				) : null}
				<div className='card-actions justify-end'>
					<Link to={`/dashboard/organization/${id}`}>
						<button type='button' className='btn btn-primary'>
							More Info
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
