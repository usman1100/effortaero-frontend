import useCreatedOrgs from '../../../lib/hooks/organizations/useCreatedOrgs'

export default function Organization() {
	const { data, error, isError, isLoading, isSuccess } = useCreatedOrgs()

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
			<>{JSON.stringify(error?.response?.data)}</>
			{isSuccess && (
				<div>
					{data?.data?.data?.length ? (
						<>
							<h1>Hello</h1>
							<p>Deer</p>
						</>
					) : (
						<p>You dont have any organizations yet</p>
					)}
				</div>
			)}
		</>
	)
}
