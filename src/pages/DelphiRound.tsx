import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Navigator from '../components/Navigator'
import useAddContribution from '../lib/hooks/estimation/useAddContribution'
import useEndRound from '../lib/hooks/estimation/useEndRound'
import useGetOneDelphiRound from '../lib/hooks/estimation/useGetOneDelphiRound'
import AuthStore from '../lib/state/authStore'

// const hasMadeContribution = (contributions, userID) => {}

export default function DelhpiRound() {
	const { roundID, id } = useParams()
	const { data: roundData } = useGetOneDelphiRound(roundID as string)
	const contributions = roundData?.data?.data?.contributions

	const role = AuthStore(store => store.role)

	const formik = useFormik({
		initialValues: {
			value: 0,
			message: '',
		},
		onSubmit: () => {
			addContribution()
		},
	})
	const { mutate: addContribution } = useAddContribution(
		roundID as string,
		formik.values
	)

	const { mutate: endRound } = useEndRound(roundID as string, id as string)

	return (
		<div className='p-5'>
			<Navigator />
			<BackButton className='my-5' />
			<h1 className='text-5xl'>Delphi Round</h1>
			<h1 className='text-2xl mt-10'>Contributions</h1>

			{contributions?.length ? (
				<>
					{contributions.map((e: any) => (
						<div className='border-2 p-5 my-4'>
							<b className='text-2xl mx-5'>{e?.userID?.name}</b>{' '}
							has suggested{' '}
							<b className='text-2xl mx-5'>{e.value}</b> man hours
							{e?.message ? (
								<i className='ml-5 text-2xl'>{e?.message}</i>
							) : null}
						</div>
					))}
				</>
			) : (
				<h1>No contributions have been made yet</h1>
			)}

			<form
				onSubmit={formik.handleSubmit}
				className='form-control grid grid-cols-5 gap-5 my-5'
			>
				<input
					required
					className='input input-primary col-span-1'
					type='number'
					value={formik.values.value}
					onChange={formik.handleChange}
					name='value'
					id='value'
					placeholder='Value'
					min={1}
				/>
				<input
					className='input input-primary  col-span-3'
					type='text'
					value={formik.values.message}
					onChange={formik.handleChange}
					name='message'
					id='message'
					placeholder='Share your thoughts...'
				/>

				<button
					type='submit'
					className='btn btn-primary  col-span-1'
					disabled={roundData?.data?.data?.hasEnded}
				>
					{roundData?.data?.data?.hasEnded
						? 'Round has ended'
						: 'Submit'}
				</button>

				{role === 'owner' ? (
					<button
						type='button'
						className='btn btn-warning'
						disabled={roundData?.data?.data?.hasEnded}
						onClick={() => {
							endRound()
						}}
					>
						{roundData?.data?.data?.hasEnded
							? 'Ended'
							: 'End Round'}
					</button>
				) : null}
			</form>
		</div>
	)
}
