import { useParams } from 'react-router-dom'
import useMLEstimation from '../lib/hooks/estimation/useMLEstimation'
import useProjectEstimations from '../lib/hooks/estimation/useProjectEstimations'

export default function MachineLearning() {
	const { id } = useParams()

	const { mutate } = useMLEstimation(id as string)
	const { data: estimations } = useProjectEstimations(id as string, 'ml')

	return (
		<div className='p-5'>
			<h1 className='text-5xl mb-5'>Machine Learning</h1>
			<p>Calculate your estimates kiddos</p>

			<button
				type='button'
				className='btn btn-primary'
				onClick={() => {
					mutate()
				}}
			>
				Click
			</button>

			{estimations && (
				<div className='flex'>
					{estimations?.data?.data?.map(
						(estimation: any, i: number) => (
							<span key={estimation.id} className='mx-5'>
								<h1 className='text-5xl'>{i + 1}</h1>
							</span>
						)
					)}
				</div>
			)}
		</div>
	)
}
