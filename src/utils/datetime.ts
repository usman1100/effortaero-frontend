export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

export const formatDate = (date: string) => {
	const d = new Date(date)
	const monthName = monthNames[d.getMonth()]
	const day = d.getDate()
	const year = d.getFullYear()

	return `${day} ${monthName} ${year}`
}

export const formatDateTime = (date: string) => {
	const d = new Date(date)
	const month = d.getMonth() + 1
	const day = d.getDate()
	const year = d.getFullYear()
	const hours = d.getHours()
	const minutes = d.getMinutes()

	return `${day} ${month} ${year} ${hours}:${minutes}`
}
