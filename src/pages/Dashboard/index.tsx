import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

export default function Dashboard() {
	const items = ['organization', 'projects', 'setting']

	const [selectedItem, setSelectedItem] = useState(0)

	return (
		<div>
			<Navbar />
			<div className='grid grid-cols-5 h-screen'>
				<div className='px-3 border-r-2'>
					{items.map((item, index) => (
						<Link to={`/dashboard/${item}`} key={item}>
							<button
								type='button'
								onClick={() => setSelectedItem(index)}
								className={`btn 
							capitalize w-full my-2
							${index === selectedItem ? 'btn-primary' : 'btn-outline'}
							${index === 0 ? 'mt-10' : ''}
							`}
							>
								{item}
							</button>
						</Link>
					))}
				</div>
				<div className=' bg-slate-50 col-span-4'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
