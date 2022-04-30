export interface Attribute {
	name: string
	complexity: string
	description?: string
}

export interface Project {
	id: string
	name: string
	actors: Attribute[]
	useCases: Attribute[]
}
