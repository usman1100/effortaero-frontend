import { useParams } from 'react-router-dom'
import useProjectEstimations from '../lib/hooks/estimation/useProjectEstimations'

export default function Delhpi() {
	const { id } = useParams()
	const { data: estimates, isLoading } = useProjectEstimations(
		id as string,
		'delphi'
	)

	return (
		<div className='p-5'>
			<h1 className='text-5xl'>Delphi Estimates</h1>

			{!isLoading ? (
				<div>
					{estimates && estimates?.data?.data?.length ? (
						<>
							{estimates.data.data.map((e: any) => (
								<div key={e._id}>
									<h1 className='text-2xl'>
										Value: {e.value}
									</h1>
								</div>
							))}
						</>
					) : (
						<h1>No Delphi Estimates have been created yet</h1>
					)}
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	)
}
