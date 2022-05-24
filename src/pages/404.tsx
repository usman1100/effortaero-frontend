import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'

export default function NotFound() {
	return (
		<>
			<h1> Sorry this page does not exist</h1>
			<Link to='/'>
				<button type='button' className='btn btn-primary'>
					Go Back
				</button>
			</Link>
		</>
	)
}
