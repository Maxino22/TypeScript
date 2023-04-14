interface Items {
	name: string
	price: number
}

type ReadonlyProduct = {
	readonly [K in keyof Items]: Items[K]
}

let product: ReadonlyProduct = {
	name: 'Tea',
	price: 22,
}
