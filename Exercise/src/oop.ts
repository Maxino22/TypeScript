class Logger {
	constructor(public fileName: string) {}

	logMessages(): void {
		console.log('Message written')
	}
}

class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`
	}
}

const person = new Person('Isabella', 'Minyak')

// class Employee extends Person{
//   constructor(public salary: string, firstName: string, lastName: string ){
//     super(firstName, lastName)
//   }
// }

interface Adress {
	street: string
	city: string
	zipcode: number
}

interface Employee {
	name: string
	salary: number
	address: Adress
}

class FactoryEmployee implements Employee {
	constructor(
		public name: string,
		public salary: number,
		public address: Adress
	) {}
}
