import OrganizationItem from '../../components/OrganizationItem'
import useJoinedOrgs from '../../lib/hooks/organizations/useJoinedOrgs'

export default function JoinedOrgs() {
	const { data, isLoading, isSuccess } = useJoinedOrgs()

	return (
		<div className='p-5'>
			<h1 className='text-5xl'>Joined Organizations</h1>

			{isLoading && <>Loading...</>}
			{isSuccess && (
				<div className='grid grid-cols-1  mt-5'>
					{data?.data?.data?.length ? (
						<>
							{data.data.data.map((item: any) => (
								<OrganizationItem
									slogan={item?.orgID?.slogan}
									id={item?.orgID?._id}
									key={item?.orgID?.name}
									name={item?.orgID?.name}
									createdAt={item?.orgID?.createdAt}
								/>
							))}
						</>
					) : (
						<>You have not joined any organizations yet</>
					)}
				</div>
			)}
		</div>
	)
}
