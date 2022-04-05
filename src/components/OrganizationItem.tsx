import { BsFillPeopleFill } from 'react-icons/bs'

import { OrgInfo } from '../types/orgs'
import { formatDate } from '../utils/datetime'

export default function OrganizationItem({ name, createdAt }: OrgInfo) {
	return (
		<div className='card  bg-base-100 shadow-xl mx-5 my-2'>
			<div className='card-body'>
				<h2 className='font-bold text-2xl'>{name}</h2>
				<p>Created on {formatDate(createdAt) || 'datetime error'}</p>

				<div className='grid grid-flow-col items-center mr-auto gap-3'>
					<BsFillPeopleFill />
					<p>10 Employees</p>
				</div>
				<div className='card-actions justify-end'>
					<button type='button' className='btn btn-primary'>
						More Info
					</button>
				</div>
			</div>
		</div>
	)
}
