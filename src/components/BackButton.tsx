interface props {
	className?: string
}

export default function BackButton({ className }: props) {
	return (
		<button
			className={`btn btn-primary ${className}`}
			type='button'
			onClick={() => {
				window.history.back()
			}}
		>
			Back
		</button>
	)
}
