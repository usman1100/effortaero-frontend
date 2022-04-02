import { OrgInfo } from '../types/orgs'
import { formatDate } from '../utils/datetime'

export default function OrganizationItem({ name, createdAt }: OrgInfo) {
	return (
		<div className='border-2 border-solid '>
			<h1>Name: {name}</h1>
			<h1>Created at: {formatDate(createdAt)}</h1>
		</div>
	)
}
