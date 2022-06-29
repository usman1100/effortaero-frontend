import { Bar, Line } from 'react-chartjs-2'
import {
	ArcElement,
	Chart,
	BarElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
} from 'chart.js'
import { Link, useParams } from 'react-router-dom'
import { formatDate, formatTime } from '../../utils/datetime'
import { EstimationEnum } from '../../lib/hooks/estimation/useCreateEstimation'
import useGetEstimations from '../../lib/hooks/estimation/useGetEstimations'
import BackButton from '../../components/BackButton'

export default function ProjectStats() {
	Chart.register(
		ArcElement,
		BarElement,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement
	)

	const { id } = useParams()

	const { data: ml } = useGetEstimations(id as string, EstimationEnum.ML)
	const { data: ucp } = useGetEstimations(id as string, EstimationEnum.UCP)
	const { data: delphi } = useGetEstimations(
		id as string,
		EstimationEnum.DELPHI
	)
	const { data: ensemble } = useGetEstimations(
		id as string,
		EstimationEnum.ENSEMBLE
	)

	const data = [
		ml?.data?.data[0]?.value || 0,
		ucp?.data?.data[0]?.value || 0,
		delphi?.data?.data[0]?.value || 0,
		ensemble?.data?.data[0]?.value || 0,
	]
	const labels = [
		'Machine Learning',
		'Use Case Points',
		'Delphi Estimations',
		'Ensebmle Model',
	]

	const colors = [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#72a0c1',
		'#f0f8ff',
		'#ffd700',
		'#ffa500',
		'#ff4500',
		'#efdecd',
		'#cd5c5c',
	]

	return (
		<div className='p-5'>
			<BackButton />
			<Link to={`/dashboard/projects/${id}`}>
				<button className='btn btn-secondary ml-5' type='button'>
					Go to project
				</button>
			</Link>
			<h1 className='text-5xl my-5'>Project Stats</h1>
			<div>
				<h1 className='font-bold mb-5 mt-10'>
					Comparison of techniques
				</h1>
				<Bar
					className='p-5'
					data={{
						labels,
						datasets: [
							{
								label: '# of Votes',
								data,
								backgroundColor: colors?.slice(0, data?.length),
								borderWidth: 2,
							},
						],
					}}
				/>
			</div>
			<Line
				options={{
					color: '#FF6384',
				}}
				className='mb-52 p-5'
				data={{
					labels: delphi?.data?.data?.map(
						(est: any) =>
							`${formatDate(est.createdAt)}\n ${formatTime(
								est.createdAt
							)}`
					),
					datasets: [
						{
							label: 'ML Estimations',
							data: ml?.data?.data?.map((est: any) => est.value),
							backgroundColor: colors[0],
							borderWidth: 5,
							borderColor: colors[0],
							fill: true,
						},
						{
							label: 'UCP Estimations',
							data: ucp?.data?.data?.map((est: any) => est.value),
							backgroundColor: colors[1],
							borderWidth: 5,
							borderColor: colors[1],
							fill: true,
						},
						{
							label: 'Delphi Estimations',
							data: delphi?.data?.data?.map(
								(est: any) => est.value
							),
							backgroundColor: colors[2],
							borderWidth: 5,
							borderColor: colors[2],
							fill: true,
							showLine: true,
						},

						{
							label: 'Esnemble Estimations',
							data: ensemble?.data?.data?.map(
								(est: any) => est.value
							),
							backgroundColor: colors[3],
							borderWidth: 5,
							borderColor: colors[3],
							fill: true,
							showLine: true,
						},
					],
				}}
			/>
		</div>
	)
}
