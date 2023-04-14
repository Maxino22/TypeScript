/// generic classes
class KeyValuePair<K, V> {
	constructor(public Key: K, public value: V) {}
}

const pair = new KeyValuePair('a', 23)

//functions
function walk<T>(animal: T) {
	return [animal]
}

console.log(walk('bear'))

class Person {
	eat<T>(food: T) {
		console.log(`You eat ${food}`)
	}

	static walk<T>(place: T) {
		return 'You walk to ' + place
	}
}

const maxino = new Person()
maxino.eat('ugali')

const mike = Person.walk('Kinoo')

console.log(mike)
