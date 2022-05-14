export interface LoginDetails {
	email: string
	password: string
}

export interface RegisterDetails {
	name: string
	email: string
	newPassword: string
	confirmPassword: string
	role: 'owner' | 'user'
}

export interface SocialLoginDetails {
	authProvider: 'google' | 'facebook' | 'github'
	name: string
	email: string
}
