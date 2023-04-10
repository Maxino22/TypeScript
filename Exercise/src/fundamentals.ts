let numbers = [1, 2, 3, 4, 5]

numbers.forEach((n) => {
	let newNumbers = []
	newNumbers.push(n++)
	return newNumbers
})

let prices = [100, 200, 300]

type Days =
	| 'Monday'
	| 'Tuesday'
	| 'Wednesday'
	| 'Thursday'
	| 'Friday'
	| 'Sunday'

let today: Days = 'Sunday'
