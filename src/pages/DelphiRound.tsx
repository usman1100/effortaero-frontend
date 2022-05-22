import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import useGetOneDelphiRound from '../lib/hooks/estimation/useGetOneDelphiRound'

export default function DelhpiRound() {
	const { roundID } = useParams()
	const { data } = useGetOneDelphiRound(roundID as string)

	return (
		<div className='p-5'>
			<BackButton />
			<h1 className='text-5xl'>Delphi Round</h1>
			<h1 className='text-2xl mt-10'>Contributions</h1>
			{data?.data?.data?.length ? (
				<>
					{data.data.data.map((e: any) => (
						<div>{e.name}</div>
					))}
				</>
			) : (
				<h1>No contributions have been made yet</h1>
			)}

			<form>
				<input type='text' />
			</form>
		</div>
	)
}
