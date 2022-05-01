import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import useGetProjectDetails from '../lib/hooks/projects/useGetProjectDetails'
import { Attribute } from '../types/project'

export default function ProjectInfo() {
	const { id } = useParams()
	const { data, error, isLoading, isError } = useGetProjectDetails(
		id as string
	)

	if (isError) {
		const errorObject = error as any
		toast.error(errorObject?.response?.data?.message[0])
	}

	return (
		<div className='p-3'>
			<h2>{isLoading && <div>Loading...</div>}</h2>
			<h1 className='text-4xl text-center mt-4'>
				{data?.data?.data?.name}
			</h1>
			<hr className='my-4' />

			<h1 className='text-3xl mb-6 font-bold'>Organization</h1>
			<h1 className='text-2xl mb-6 '>
				{data?.data?.data?.organization?.name}
			</h1>
			<hr className='mb-5' />

			<h1 className='text-3xl mb-6 font-bold'>Project Attributes</h1>

			<h1 className='text-2xl mb-3'>Actors</h1>

			<div className='overflow-x-auto mb-10'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th> </th>
							<th>Name</th>
							<th>Complexity</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{data?.data?.data?.actors?.map(
							(actor: Attribute, index: number) => (
								<tr>
									<th>{index + 1}</th>
									<td>{actor.name}</td>
									<td>{actor.complexity}</td>
									<td>
										{actor?.description || 'No description'}
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>

			<h1 className='text-2xl mb-3'>Use Cases</h1>

			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th> </th>
							<th>Name</th>
							<th>Complexity</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{data?.data?.data?.useCases?.map(
							(uc: Attribute, index: number) => (
								<tr>
									<th>{index + 1}</th>
									<td>{uc.name}</td>
									<td>{uc.complexity}</td>
									<td>
										{uc?.description || 'No description'}
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}
