import { Link } from 'react-router-dom'

export default function Navigator() {
	return (
		<div className='text-sm breadcrumbs'>
			<ul>
				<li>
					<Link to='/dashboard'>
						<div className='badge badge-primary mr-5 p-3'>
							Dashboard
						</div>
					</Link>
				</li>
			</ul>
		</div>
	)
}
