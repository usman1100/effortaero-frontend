import { Link, useParams } from 'react-router-dom'

export default function Estimate() {
	const { id } = useParams()

	return (
		<div className='p-5'>
			<Link to={`/dashboard/projects/${id}`}>
				<button className='btn btn-secondary' type='button'>
					Back
				</button>
			</Link>
			<h1 className='text-5xl mt-5'>Estimate</h1>
			<hr />

			<div className='my-5 grid grid-cols-1 gap-5'>
				<Link to={`/dashboard/projects/${id}/ml`}>
					<div className='estimation-card bg-yellow-200'>
						<p className='text-2xl font-bold'>Machine Learning</p>
						<p>Use our custom trained machine learning engine </p>
					</div>
				</Link>

				<Link to={`/dashboard/projects/${id}/ucp`}>
					<div className='estimation-card bg-teal-200'>
						<p className='text-2xl font-bold'>UCP Calculation</p>
						<p>Use our custom trained machine learning engine </p>
					</div>
				</Link>

				<Link to={`/dashboard/projects/${id}/delphi`}>
					<div className='estimation-card bg-fuchsia-200'>
						<p className='text-2xl font-bold'>Delphi Method</p>
						<p>Use our custom trained machine learning engine </p>
					</div>
				</Link>
			</div>
		</div>
	)
}
