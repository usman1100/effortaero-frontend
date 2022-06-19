import { Link } from 'react-router-dom'
import Navigator from '../../components/Navigator'
import OrganizationItem from '../../components/OrganizationItem'
import useCreatedOrgs from '../../lib/hooks/organizations/useCreatedOrgs'
import { OrgInfo } from '../../types/orgs'

export default function Listing() {
	const { data, error, isError, isLoading, isSuccess } = useCreatedOrgs()

	if (isError)
		return (
			<div>
				<h1>{error?.response?.data?.message}</h1>
			</div>
		)

	return (
		<div className='p-5'>
			<Link to='/dashboard/organization/create'>
				<button className='btn btn-primary mt-10' type='button'>
					Create Organization
				</button>
			</Link>
			{isLoading && <>Loading...</>}
			{isSuccess && (
				<div className='grid grid-cols-1  mt-5'>
					{data?.data?.data?.length ? (
						<>
							{data.data.data.map((item: OrgInfo) => (
								<OrganizationItem
									slogan={item?.org?.slogan}
									id={item?.org._id}
									members={item?.members?.length || 0}
									key={item?.org.name}
									name={item?.org.name}
									createdAt={item?.org.createdAt}
								/>
							))}
						</>
					) : (
						<>You have not created any organizations yet</>
					)}
				</div>
			)}
		</div>
	)
}
