import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCreateDelphiRounds from '../lib/hooks/estimation/useCreateDelphiRound'
import { EstimationEnum } from '../lib/hooks/estimation/useCreateEstimation'
import useEndRound from '../lib/hooks/estimation/useEndRound'
import useGetDelphiRounds from '../lib/hooks/estimation/useGetDelphiRounds'
import useProjectEstimations from '../lib/hooks/estimation/useGetEstimations'

export default function Delhpi() {
	const { id } = useParams()
	const { data: estimates, isLoading } = useProjectEstimations(
		id as string,
		EstimationEnum.DELPHI
	)
	const [roundID, setRoundID] = useState<string>('')

	const { data: rounds } = useGetDelphiRounds(id as string)
	const { mutate: createRound } = useCreateDelphiRounds(id as string)
	const { mutate: endRound } = useEndRound(roundID, id as string)

	useEffect(() => {
		if (roundID.length) endRound()
	}, [roundID])

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

			<button
				className='btn btn-primary'
				type='button'
				onClick={() => {
					createRound()
				}}
			>
				Create One
			</button>

			<div className='grid grid-cols-5 gap-5 my-5'>
				{rounds && rounds?.data?.data?.length ? (
					<>
						{rounds.data.data.map((r: any) => (
							<button
								className={`btn ${
									r.hasEnded ? 'btn-disabled' : 'btn-success'
								}`}
								type='button'
								key={r._id}
								onClick={() => {
									setRoundID(r._id)
								}}
							>
								Round: {r.hasEnded ? 'Ended' : 'Active'}
							</button>
						))}
					</>
				) : (
					<h1>No Delphi Rounds have been created yet</h1>
				)}
			</div>
		</div>
	)
}
