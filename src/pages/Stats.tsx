import { Bar } from 'react-chartjs-2'
import {
	ArcElement,
	Chart,
	BarElement,
	CategoryScale,
	LinearScale,
} from 'chart.js'
import useGetEstimations from '../lib/hooks/estimation/useGetEstimations'
import { EstimationEnum } from '../lib/hooks/estimation/useCreateEstimation'
import { formatDate } from '../utils/datetime'

export default function Stats() {
	Chart.register(ArcElement, BarElement, CategoryScale, LinearScale)

	const { data: ml } = useGetEstimations(
		'6288f934d2538be748c1dc74',
		EstimationEnum.ML
	)

	const data = ml?.data?.data?.map((e: any) => e.value)
	const labels = ml?.data?.data?.map((e: any) => formatDate(e.createdAt))

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
			<div>
				<Bar
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
		</div>
	)
}
