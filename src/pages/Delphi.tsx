import { Link, useParams } from 'react-router-dom'
import { EstimationEnum } from '../lib/hooks/estimation/useCreateEstimation'
import useGetDelphiRounds from '../lib/hooks/estimation/useGetDelphiRounds'
import useProjectEstimations from '../lib/hooks/estimation/useGetEstimations'

export default function Delhpi() {
	const { id } = useParams()
	const { data: estimates, isLoading } = useProjectEstimations(
		id as string,
		EstimationEnum.DELPHI
	)

	const { data: rounds } = useGetDelphiRounds(id as string)

	if (isLoading)
		return (
			<div className='p-10'>
				<h1 className='text-5xl'>Loading</h1>
			</div>
		)

	return (
		<div className='p-5'>
			<h1 className='text-5xl'>Delphi Estimates</h1>
			<div>
				{estimates && estimates?.data?.data?.length ? (
					<>
						{estimates.data.data.map((e: any) => (
							<div key={e._id}>
								<h1 className='text-2xl'>Value: {e.value}</h1>
							</div>
						))}
					</>
				) : (
					<h1>No Delphi Estimates have been created yet</h1>
				)}
			</div>
			<div className='grid grid-cols-5 gap-5 my-5'>
				{rounds && rounds?.data?.data?.length ? (
					<>
						{rounds.data.data.map((r: any, i: number) => (
							<Link
								to={`/dashboard/projects/${id}/delphi/${r?._id}`}
							>
								<button
									type='button'
									className={`btn ${
										r.hasEnded
											? 'btn-disabled'
											: 'btn-seocndary'
									}`}
								>
									Round: # {rounds.data.data.length - i}
								</button>
							</Link>
						))}
					</>
				) : (
					<h1>No Delphi Rounds have been created yet</h1>
				)}
			</div>
		</div>
	)
}
