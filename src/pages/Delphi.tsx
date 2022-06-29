import { Link, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import EstimationCard from '../components/EstimationCard'
import Navigator from '../components/Navigator'
import useCreateDelphiRounds from '../lib/hooks/estimation/useCreateDelphiRound'
import useCreateEstimation, {
	EstimationEnum,
} from '../lib/hooks/estimation/useCreateEstimation'
import useGetDelphiRounds from '../lib/hooks/estimation/useGetDelphiRounds'
import useProjectEstimations from '../lib/hooks/estimation/useGetEstimations'
import AuthStore from '../lib/state/authStore'

export default function Delhpi() {
	const { id } = useParams()
	const role = AuthStore(store => store.role)

	const { data: estimates, isLoading } = useProjectEstimations(
		id as string,
		EstimationEnum.DELPHI
	)

	const { data: rounds } = useGetDelphiRounds(id as string)
	const { mutate: createRound } = useCreateDelphiRounds(id as string)
	const { mutate: createEstimation } = useCreateEstimation(
		id as string,
		EstimationEnum.DELPHI
	)

	if (isLoading)
		return (
			<div className='p-10'>
				<h1 className='text-5xl'>Loading</h1>
			</div>
		)

	return (
		<div className='p-5'>
			<Navigator />
			<BackButton className='my-5' />
			<h1 className='text-5xl'>Delphi Estimates</h1>
			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
				{estimates && estimates?.data?.data?.length ? (
					<>
						{estimates.data.data.map((e: any) => (
							<EstimationCard data={e} key={e?._id} />
						))}
					</>
				) : (
					<h1>No Delphi Estimates have been created yet</h1>
				)}
			</div>
			<div className='grid grid-cols-1 gap-5 my-5'>
				{rounds && rounds?.data?.data?.length ? (
					<>
						{rounds.data.data.map((r: any, i: number) => (
							<div className='flex'>
								<Link
									className=' w-4/5'
									to={`/dashboard/projects/${id}/delphi/${r?._id}`}
								>
									<button
										type='button'
										className={`btn w-full ${
											r.hasEnded
												? 'btn-disabled'
												: 'btn-outline'
										}`}
									>
										Round: # {i + 1}
									</button>
								</Link>
								<button
									className='w-1/5 btn btn-primary ml-2'
									type='button'
								>
									{r.hasEnded ? `${r?.value}` : 'Not Ended'}
								</button>
							</div>
						))}
					</>
				) : (
					<h1>No Delphi Rounds have been created yet</h1>
				)}

				{role === 'owner' ? (
					<div className='grid grid-cols-2'>
						<button
							className='btn btn-secondary ml-2'
							type='button'
							onClick={() => {
								createRound()
							}}
						>
							Create New Round
						</button>

						<button
							className='btn btn-accent ml-2'
							type='button'
							onClick={() => {
								createEstimation()
							}}
						>
							Finalize an estimate
						</button>
					</div>
				) : null}
			</div>
		</div>
	)
}
