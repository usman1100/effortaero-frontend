import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStoreInterface {
	isLoggedIn: boolean
	token: string
	role: string
	login: (token: string, role: string) => void
}

const AuthStore = create<AuthStoreInterface>(
	persist<AuthStoreInterface>(
		set => ({
			isLoggedIn: false,
			token: '',
			role: '',
			login: (token: string, role: string) =>
				set(state => ({
					...state,
					isLoggedIn: true,
					token,
					role,
				})),
		}),
		{
			name: 'auth',
			version: 1,
		}
	)
)

export default AuthStore

// set => ({
// 	isLoggedIn: false,
// 	token: '',
// 	role: '',
// 	login: (token: string, role: string) =>
// 		set(state => ({
// 			...state,
// 			isLoggedIn: true,
// 			token,
// 			role,
// 		})),
// })
