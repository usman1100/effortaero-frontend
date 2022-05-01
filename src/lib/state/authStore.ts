import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthStoreInterface {
	isLoggedIn: boolean
	token: string
	role: string
	login: (token: string, role: string) => void
	logout: () => void
}

const AuthStore = create<AuthStoreInterface>(
	devtools(
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
				logout: () =>
					set(state => ({
						...state,
						isLoggedIn: false,
						token: '',
						role: '',
					})),
			}),
			{
				name: 'auth',
				version: 1,
			}
		)
	)
)

export default AuthStore
