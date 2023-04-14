class Person {
	constructor(public fistName: string, public lastName: string) {}

	get FullName() {
		return `${this.fistName}  ${this.lastName}`
	}

	protected walk() {
		console.log('walk')
	}
}

class Student extends Person {
	constructor(public studentId: number, fistName: string, lastName: string) {
		super(fistName, lastName)
	}

	takeTest() {
		console.log('taking test')
	}
}

let student1 = new Student(1, 'Max', 'Webb')

student1.FullName

class Teacher extends Person {
	override get FullName() {
		return `Professor  ${super.FullName}`
	}
}
class Principle extends Person {
	override get FullName() {
		return `Princinple  ${super.FullName}`
	}
}

let teacher = new Teacher('Mosh', 'Hamedani')
console.log(teacher.FullName)

printNames([
	new Student(1, 'Stan', 'Smith'),
	new Student(1, 'Rodger', 'Smith'),
	new Principle('Steve', 'Smith'),
	new Teacher('Mosh', 'Hamedani'),
])

function printNames(people: Person[]) {
	for (let person of people) console.log(person.FullName)
}
