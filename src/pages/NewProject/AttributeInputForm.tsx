import { useState } from 'react'
import toast from 'react-hot-toast'
import { Actor } from '.'

interface props {
	addActor: (fn: any) => void
	attrType: 'use-case' | 'actor'
}

export default function AttributeInputForm({ addActor, attrType }: props) {
	const [attr, setAttr] = useState<Actor>({
		name: '',
		complexity: 'simple',
		description: '',
	})

	const handleClick = () => {
		if (!attr.name) {
			toast.error('Actor name is required')
			return
		}

		addActor((prev: any[]) => {
			if (prev.find(a => a.name === attr.name)) {
				toast.error('Actor already exists')
				return prev
			}
			return [...prev, attr]
		})
	}

	const attrName = attrType === 'use-case' ? 'Use Case' : 'Actor'

	return (
		<div className='form-control border-2 p-4 col-span-3'>
			<div className='grid grid-cols-2'>
				<div>
					<p className='my-2  font-bold'>{attrName} Name</p>
					<input
						value={attr.name}
						onChange={e =>
							setAttr(prev => ({
								...prev,
								name: e.target.value,
							}))
						}
						type='text'
						name='name'
						id='name'
						className='input input-primary'
					/>
				</div>
				<div>
					<p className='my-2 font-bold'>{attrName} Type</p>
					<select
						name='complexity'
						id='complexity'
						className='select '
						value={attr.complexity}
						onChange={e =>
							setAttr(prev => ({
								...prev,
								complexity: e.target.value,
							}))
						}
					>
						<option value='simple'>Simple</option>
						<option value='average'>Average</option>
						<option value='complex'>Complex</option>
					</select>
				</div>
			</div>
			<p className=' font-bold mt-5'>{attrName} Description</p>
			<input
				type='text'
				name='description'
				id='description'
				value={attr.description}
				onChange={e =>
					setAttr(prev => ({
						...prev,
						description: e.target.value,
					}))
				}
				className='input input-primary'
			/>
			<button
				className='btn btn-primary w-1/3 mt-5'
				type='button'
				onClick={handleClick}
			>
				Add {attrName}
			</button>
		</div>
	)
}
