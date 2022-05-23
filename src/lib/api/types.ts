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

export interface UpdateUserDetails {
	name: string
	email: string
}

export interface SearchUsersType extends UpdateUserDetails {}

export interface ChangePasswordDTO {
	oldPassword: string
	newPassword: string
}

export interface AddContributionDTO {
	value: number
	message?: string
}
