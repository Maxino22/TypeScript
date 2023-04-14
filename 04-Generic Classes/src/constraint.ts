interface Car {
	model: string
}

class Bikes {
	constructor(public model: string) {}
}

//class
function bike<T extends Bikes>(arg: T) {
	return `best car${arg}`
}
//interphase
function car<T extends Car>(arg: T) {
	return `best car${arg}`
}
//object
function bull<T extends { breed: string }>(arg: T) {
	return `If name is main ${arg}`
}
//data types
function main<T extends string | number>(arg: T) {
	return `If name is main ${arg}`
}

main(23)

bull({ breed: 'Lukakau' })

car({ model: 'Subaru' })
bike(new Bikes('suzuki'))
