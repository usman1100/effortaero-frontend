import useMyDetails from '../lib/hooks/user/useMyDetails'

export default function Navbar() {
	const { data, isLoading } = useMyDetails()

	return (
		<div className='navbar bg-primary text-slate-50'>
			<div className='flex-1'>
				<p className='btn btn-ghost normal-case text-xl'>
					{isLoading ? 'Loading ...' : data?.data?.data?.name || 'pp'}
				</p>
			</div>
		</div>
	)
}
