import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import useAddContribution from '../lib/hooks/estimation/useAddContribution'
import useGetOneDelphiRound from '../lib/hooks/estimation/useGetOneDelphiRound'
import useMyDetails from '../lib/hooks/user/useMyDetails'

// const hasMadeContribution = (contributions, userID) => {}

export default function DelhpiRound() {
	const { roundID } = useParams()
	const { data } = useGetOneDelphiRound(roundID as string)
	const contributions = data?.data?.data?.contributions

	const { data: _user } = useMyDetails()
	const user = _user?.data?.data

	const formik = useFormik({
		initialValues: {
			value: 0,
			message: '',
		},
		onSubmit: () => {
			mutate()
		},
	})
	const { mutate } = useAddContribution(roundID as string, formik.values)

	return (
		<div className='p-5'>
			<BackButton />
			<h1 className='text-5xl'>Delphi Round</h1>
			<h1 className='text-2xl mt-10'>Contributions</h1>

			{contributions?.length ? (
				<>
					{contributions.map((e: any) => (
						<div className='border-2 p-5'>
							<b>{e?.userID?.name}</b> has suggested{' '}
							<b>{e.value}</b> man hours
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

				<button type='submit' className='btn btn-primary  col-span-1'>
					Submit
				</button>
			</form>
		</div>
	)
}
