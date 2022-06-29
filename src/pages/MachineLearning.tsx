import { useParams } from 'react-router-dom'
import useCreateEstimation, {
	EstimationEnum,
} from '../lib/hooks/estimation/useCreateEstimation'
import useGetEstimations from '../lib/hooks/estimation/useGetEstimations'
import BackButton from '../components/BackButton'
import EstimationCard from '../components/EstimationCard'
import Navigator from '../components/Navigator'

export default function MachineLearning() {
	const { id } = useParams()

	const { mutate, isLoading } = useCreateEstimation(
		id as string,
		EstimationEnum.ML
	)
	const { data: estimations } = useGetEstimations(
		id as string,
		EstimationEnum.ML
	)

	return (
		<div className='p-5'>
			<Navigator />
			<BackButton className='my-5' />

			<h1 className='text-5xl mb-5'>Machine Learning</h1>

			<h1 className='text-2xl '>Your Estimations</h1>

			{estimations && (
				<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
					{estimations?.data?.data?.map((estimation: any) => (
						<EstimationCard
							data={estimation}
							key={estimation._id}
						/>
					))}
				</div>
			)}
			<button
				type='button'
				className={`btn ${isLoading ? 'loading' : 'btn-primary'}`}
				onClick={() => {
					mutate()
				}}
			>
				{isLoading ? 'Loading...' : 'Request Estimate'}
			</button>
		</div>
	)
}
