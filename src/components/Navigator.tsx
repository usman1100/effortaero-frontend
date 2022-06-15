import { Link } from 'react-router-dom'

export default function Navigator() {
	const routes = window.location.href.split('/').slice(4)

	return (
		<div className='text-sm breadcrumbs'>
			<ul>
				{routes.map((route, index) => {
					const url = `/dashboard/${routes
						.slice(0, index + 1)
						.join('/')}`
					return (
						<li>
							<Link to={url}>
								<div className='badge badge-primary mr-1 p-3'>
									{route}
								</div>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
