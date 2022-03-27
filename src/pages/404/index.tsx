import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<>
			<h1> Sorry this page does not exist</h1>
			<Link to='/'>
				<button className='btn btn-primary' type='button'>
					Go Back
				</button>
			</Link>
		</>
	)
}
