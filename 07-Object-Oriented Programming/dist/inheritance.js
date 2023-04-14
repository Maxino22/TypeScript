"use strict";
class Person {
    constructor(fistName, lastName) {
        this.fistName = fistName;
        this.lastName = lastName;
    }
    get FullName() {
        return `${this.fistName}  ${this.lastName}`;
    }
    walk() {
        console.log('walk');
    }
}
class Student extends Person {
    constructor(studentId, fistName, lastName) {
        super(fistName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('taking test');
    }
}
let student1 = new Student(1, 'Max', 'Webb');
student1.FullName;
class Teacher extends Person {
    get FullName() {
        return `Professor  ${super.FullName}`;
    }
}
class Principle extends Person {
    get FullName() {
        return `Princinple  ${super.FullName}`;
    }
}
let teacher = new Teacher('Mosh', 'Hamedani');
console.log(teacher.FullName);
printNames([
    new Student(1, 'Stan', 'Smith'),
    new Student(1, 'Rodger', 'Smith'),
    new Principle('Steve', 'Smith'),
    new Teacher('Mosh', 'Hamedani'),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.FullName);
}
