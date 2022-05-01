import { useState } from 'react'
import OrganizationItem from '../components/OrganizationItem'
import useCreatedOrgs from '../lib/hooks/organizations/useCreatedOrgs'
import { OrgInfo } from '../types/orgs'
import CreateOrg from './CreateOrg'

export default function Organization() {
	const { data, error, isError, isLoading, isSuccess } = useCreatedOrgs()

	const [display, setDisplay] = useState(false)

	if (isError && error?.response?.data?.statusCode) return <>Unauthorized</>

	if (isError)
		return (
			<div>
				<h1>{error?.response?.data?.message}</h1>
			</div>
		)

	return (
		<>
			{isLoading && <>Loading...</>}
			{isSuccess && (
				<div className='grid grid-cols-1  mt-10'>
					{data?.data?.data?.length ? (
						<>
							{data.data.data.map((item: OrgInfo) => (
								<OrganizationItem
									id={item.org._id}
									members={item.members.length}
									key={item.org.name}
									name={item.org.name}
									createdAt={item.org.createdAt}
								/>
							))}
						</>
					) : (
						<>You have not created any organizations yet</>
					)}
				</div>
			)}
			<button
				className='btn btn-primary m-5'
				onClick={() => setDisplay(prev => !prev)}
				type='button'
			>
				Create Organization
			</button>

			{display && <CreateOrg />}
		</>
	)
}
