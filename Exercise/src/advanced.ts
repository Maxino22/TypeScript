type Users = [{ name: string; age: number; occupation: string }]

let users: Users = [{ name: 'Max', age: 24, occupation: 'Software Developer' }]

type Pet = {
	swim?: () => void
	fly?: () => void
}

let bird: Pet = {
	fly: () => {
		console.log('can fly')
	},
}
