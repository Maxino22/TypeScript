"use strict";
// type alias
var _a;
let employee = {
    id: 1,
    name: 'Maxino',
    retire: (date) => {
        console.log(date);
    },
};
let employee2 = {
    id: 2,
    name: 'Ingrid',
    retire: (date) => {
        console.log(date);
    },
};
// union tyypes
function kgtoPound(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgtoPound('10');
kgtoPound(100);
let textbox = {
    drag() {
        console.log('drag');
    },
    resize(a, b) {
        console.log(a + b);
    },
};
let quantity = 100;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(2);
//optinona property
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//optional element
// Nulish Coalaese
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
// type assertation
let phone = document.getElementById('phone');
phone.value;
// unkown is prefered to any
function storyBook(document) {
    if (typeof document === 'string')
        document.toLowerCase;
    else if (typeof document === 'number')
        document.toString();
}
///never type
function processEvents() {
    while (true) { }
}
processEvents();
