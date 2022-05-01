import { useParams } from 'react-router-dom'
import useGetOrgInfo from '../lib/hooks/organizations/useGetOrgInfo'

export default function OrganizationPage() {
	const { id } = useParams()

	const { data, isLoading } = useGetOrgInfo(id as string)
	const org = data?.data?.data?.org
	const members = data?.data?.data?.members
	return (
		<div>
			<h1 className='text-5xl'>Organization Info</h1>
			{isLoading ? (
				<h1>Loading</h1>
			) : (
				<>
					{/* <h1>{data?.data.data.name}</h1> */}
					<pre>{JSON.stringify(org, null, 4)}</pre>
					<pre>{JSON.stringify(members, null, 4)}</pre>
				</>
			)}
		</div>
	)
}
