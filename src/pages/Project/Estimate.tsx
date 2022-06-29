import { Link, useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Navigator from '../../components/Navigator'

export default function Estimate() {
	const { id } = useParams()

	return (
		<div className='p-5'>
			<Navigator />
			<BackButton className='my-5' />
			<h1 className='text-5xl mt-5'>Estimate</h1>
			<hr />

			<div className='my-5 grid grid-cols-2 gap-5 justify-center'>
				<Link to={`/dashboard/projects/${id}/ml`}>
					<div className='estimation-card bg-yellow-200'>
						<p className='text-2xl font-bold'>Machine Learning</p>
						<p>Use our custom trained machine learning engine </p>
					</div>
				</Link>

				<Link to={`/dashboard/projects/${id}/ucp`}>
					<div className='estimation-card bg-teal-200'>
						<p className='text-2xl font-bold'>UCP Calculation</p>
						<p>The battle tested Use Case Point estimation method calculator</p>
					</div>
				</Link>

				<Link to={`/dashboard/projects/${id}/delphi`}>
					<div className='estimation-card bg-fuchsia-200'>
						<p className='text-2xl font-bold'>Delphi Method</p>
						<p>Interact with your peers, run through multiple rounds and create the perfect estimation</p>
					</div>
				</Link>

				<Link to={`/dashboard/projects/${id}/ensemble`}>
					<div className='estimation-card bg-lime-300'>
						<p className='text-2xl font-bold'>Ensemble Model</p>
						<p>
							Joining the results of all estimations using
							advanced ensembling techniques
						</p>
					</div>
				</Link>
			</div>
		</div>
	)
}
