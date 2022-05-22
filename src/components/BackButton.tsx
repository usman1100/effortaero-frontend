export default function BackButton() {
	return (
		<button
			className='btn btn-primary'
			type='button'
			onClick={() => {
				window.history.back()
			}}
		>
			Back
		</button>
	)
}
