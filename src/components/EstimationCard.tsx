import { AiOutlineDelete } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { formatDate, formatTime } from '../utils/datetime'
import useDeleteEstimation from '../lib/hooks/estimation/useDeleteEstimation'
import AuthStore from '../lib/state/authStore'

export default function EstimationCard({ data }: { data: any }) {
	const { id: projectID } = useParams()
	const { mutate } = useDeleteEstimation(data._id, projectID as string)
	const role = AuthStore(store => store.role)

	return (
		<div className='border-2 border-primary rounded-xl m-5 p-5'>
			{role === 'owner' ? (
				<button
					onClick={() => {
						mutate()
					}}
					type='button'
					className='ml-auto btn btn-warning btn-circle'
				>
					<AiOutlineDelete size={27} />
				</button>
			) : null}
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
