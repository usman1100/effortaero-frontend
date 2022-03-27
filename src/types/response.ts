export interface SuccessResponse {
	data: {
		failed: boolean
		message: string
		code: number
		data: {
			token: string
			user: UserData
		}
	}
}

export interface ErrorResponse {}

export interface UserData {
	_id: string
	role: string
	password: string
	email: string
	name: string
	__v: number
}
