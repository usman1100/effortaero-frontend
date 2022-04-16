const classFromComplexity = (com: string) => {
	switch (com) {
		case 'simple':
			return 'bg-teal-400'
		case 'average':
			return 'bg-amber-400'
		case 'complex':
			return 'bg-red-400'
		default:
			return ''
	}
}

interface Props {
	deleteActor: (name: any) => void
	name: string
	complexity: string
}

export default function ActorCard({ name, complexity, deleteActor }: Props) {
	return (
		<div
			className={`grid grid-flow-row text-center ${classFromComplexity(
				complexity
			)}
            h-32 justify-center content-center rounded-2xl
            `}
		>
			<p className='text-2xl text-center'>{name}</p>
			<div>
				<button
					type='button'
					className='btn btn-xs btn-outline'
					onClick={() => {
						deleteActor((prev: any[]) =>
							prev.filter(actor => actor.name !== name)
						)
					}}
				>
					Delete
				</button>
			</div>
		</div>
	)
}
