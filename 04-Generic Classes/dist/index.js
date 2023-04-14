"use strict";
/// generic classes
class KeyValuePair {
    constructor(Key, value) {
        this.Key = Key;
        this.value = value;
    }
}
const pair = new KeyValuePair('a', 23);
//functions
function walk(animal) {
    return [animal];
}
console.log(walk('bear'));
class Person {
    eat(food) {
        console.log(`You eat ${food}`);
    }
    static walk(place) {
        return 'You walk to ' + place;
    }
}
const maxino = new Person();
maxino.eat('ugali');
const mike = Person.walk('Kinoo');
console.log(mike);
