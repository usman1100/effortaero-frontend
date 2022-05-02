import toast from 'react-hot-toast'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import OrgService from '../../api/org'

const useGetOrgInfo = (id: string) => {
	const orgAPI = new OrgService()
	const redirect = useNavigate()

	return useQuery(['orgs', id], () => orgAPI.getOne(id), {
		onError: () => {
			toast.error('Could not get organization info')
			redirect('/dashboard/organization')
		},
	})
}

export default useGetOrgInfo
