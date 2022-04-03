import { OrgInfo } from '../types/orgs'
import { formatDate } from '../utils/datetime'

export default function OrganizationItem({ name, createdAt }: OrgInfo) {
	return (
		<div className='card w-96 bg-base-100 shadow-xl mx-5 my-2'>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<p>Created on {formatDate(createdAt)}</p>
				<div className='card-actions justify-end'>
					<button type='button' className='btn btn-primary'>
						More Info
					</button>
				</div>
			</div>
		</div>
	)
}
