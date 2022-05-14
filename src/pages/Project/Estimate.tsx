import { Link, useParams } from 'react-router-dom'
import useMLEstimation from '../../lib/hooks/estimation/useMLEstimation'
import useGetProjectDetails from '../../lib/hooks/projects/useGetProjectDetails'

export default function Estimate() {
	const { id } = useParams()
	const { data: project, isLoading } = useGetProjectDetails(id as string)

	const { data: estimateData, refetch } = useMLEstimation(id as string)

	if (
		!isLoading &&
		(!project?.data?.data?.actors?.length ||
			!project?.data?.data?.useCases?.length)
	) {
		return (
			<div className='p-5'>
				<h1 className='text-6xl mt-10'>
					No Use Cases or Actors were found
				</h1>
				<p className='my-5'>
					Please create atleast one use case and actor to create an
					estimate
				</p>

				<Link to={`/dashboard/projects/${id}`}>
					<button className='btn btn-secondary' type='button'>
						Back
					</button>
				</Link>
			</div>
		)
	}

	return (
		<div className='p-5'>
			<Link to={`/dashboard/projects/${id}`}>
				<button className='btn btn-secondary' type='button'>
					Back
				</button>
			</Link>
			<h1 className='text-5xl mt-5'>Estimate</h1>
			<hr />

			<div className='text-3xl font-bold'>Machine Learning Estimate</div>

			<button
				className='btn btn-primary'
				type='button'
				onClick={() => {
					refetch()
				}}
			>
				Calculate
			</button>

			{estimateData && (
				<pre>{JSON.stringify(estimateData?.data?.data, null, 4)}</pre>
			)}
		</div>
	)
}
