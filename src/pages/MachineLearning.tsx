import { AiOutlineDelete } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import useDeleteEstimation from '../lib/hooks/estimation/useDeleteEstimation'
import useCreateEstimation, { EstimationEnum } from '../lib/hooks/estimation/useCreateEstimation'
import useGetEstimations from '../lib/hooks/estimation/useGetEstimations'
import { formatDate, formatTime } from '../utils/datetime'

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
			<h1 className='font-bold text-center'>{data.value}</h1>
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

export default function MachineLearning() {
	const { id } = useParams()

	const { mutate, isLoading } = useCreateEstimation(id as string, EstimationEnum.ML)
	const { data: estimations } = useGetEstimations(id as string, EstimationEnum.ML)

	return (
		<div className='p-5'>
			<button
				className='btn btn-secondary'
				type='button'
				onClick={() => {
					window.history.back()
				}}
			>
				Back
			</button>

			<h1 className='text-5xl mb-5'>Machine Learning</h1>

			<h1 className='text-2xl '>Your Estimations</h1>

			{estimations && (
				<div className='grid grid-cols-4'>
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
