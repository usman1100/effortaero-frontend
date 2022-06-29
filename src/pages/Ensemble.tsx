import { AiOutlineDelete } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import useDeleteEstimation from '../lib/hooks/estimation/useDeleteEstimation'
import useCreateEstimation, {
	EstimationEnum,
} from '../lib/hooks/estimation/useCreateEstimation'
import useGetEstimations from '../lib/hooks/estimation/useGetEstimations'
import { formatDate, formatTime } from '../utils/datetime'
import BackButton from '../components/BackButton'

function EstimationCard({ data }: { data: any }) {
	const { id: projectID } = useParams()
	const { mutate } = useDeleteEstimation(data._id, projectID as string)

	return (
		<div className='border-2 border-primary rounded-xl m-5 p-5'>
			<button
				onClick={() => {
					mutate()
				}}
				type='button'
				className='ml-auto btn btn-warning btn-circle'
			>
				<AiOutlineDelete size={27} />
			</button>
			<h1 className='font-bold text-center'>
				{Math.round(data.value * 100) / 100}
			</h1>
			<h1 className='text-center'>Work Hours</h1>

			<hr className='my-5 text-teal-700' />

			<h1 className='text-center'>Created on</h1>
			<h1 className='font-bold text-center'>
				{formatDate(data.createdAt)} <br />
				{formatTime(data.createdAt)}
			</h1>
		</div>
	)
}

export default function Ensemble() {
	const { id } = useParams()

	const { mutate, isLoading } = useCreateEstimation(
		id as string,
		EstimationEnum.ENSEMBLE
	)
	const { data: estimations } = useGetEstimations(
		id as string,
		EstimationEnum.ENSEMBLE
	)

	return (
		<div className='p-5'>
			<BackButton />

			<h1 className='text-5xl mb-5 mt-5'>Ensemble Estimations</h1>

			{estimations && (
				<div>
					{estimations?.data?.data?.length > 0 ? (
						<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
							{estimations?.data?.data?.map((estimation: any) => (
								<EstimationCard
									data={estimation}
									key={estimation._id}
								/>
							))}
						</div>
					) : (
						<p className='my-5'>
							You have not create an estimation yet
						</p>
					)}
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
