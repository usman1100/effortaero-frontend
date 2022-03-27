export interface LoginDetails {
	email: string;
	password: string;
}

export interface RegisterDetails {
	name: string;
	email: string;
	newPassword: string;
	confirmPassword: string;
	role: 'owner' | 'user';
}
