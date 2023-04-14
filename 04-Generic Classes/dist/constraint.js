"use strict";
class Bikes {
    constructor(model) {
        this.model = model;
    }
}
//class
function bike(arg) {
    return `best car${arg}`;
}
//interphase
function car(arg) {
    return `best car${arg}`;
}
//object
function bull(arg) {
    return `If name is main ${arg}`;
}
//data types
function main(arg) {
    return `If name is main ${arg}`;
}
main(23);
bull({ breed: 'Lukakau' });
car({ model: 'Subaru' });
bike(new Bikes('suzuki'));
