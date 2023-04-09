// type alias

type Employee = {
	readonly id: number
	name: string
	retire: (date: Date) => void
}

let employee: Employee = {
	id: 1,
	name: 'Maxino',
	retire: (date: Date) => {
		console.log(date)
	},
}

let employee2: Employee = {
	id: 2,
	name: 'Ingrid',
	retire: (date: Date) => {
		console.log(date)
	},
}

// union tyypes
function kgtoPound(weight: number | string): number {
	if (typeof weight === 'number') return weight * 2.2
	else return parseInt(weight) * 2.2
}

kgtoPound('10')
kgtoPound(100)

// intersetion

type draggable = {
	drag: () => void
}

type resize = {
	resize: (length: number, width: number) => void
}

type UIWidget = draggable & resize

let textbox: UIWidget = {
	drag() {
		console.log('drag')
	},
	resize(a: number, b: number) {
		console.log(a + b)
	},
}

// Literal(exact, specific)

type Quantity = 50 | 100

let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

// optional chaining

type Customer = {
	birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(2)
//optinona property
console.log(customer?.birthday?.getFullYear())
//optional element

// Nulish Coalaese
let speed: number | null = null
let ride = {
	speed: speed ?? 30,
}

// type assertation
let phone = <HTMLInputElement>document.getElementById('phone')

phone.value

// unkown is prefered to any
function storyBook(document: unknown) {
	if (typeof document === 'string') document.toLowerCase
	else if (typeof document === 'number') document.toString()
}

///never type

function processEvents(): never {
	while (true) {}
}

processEvents()
