"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    depostit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }
    // private method
    calculateTax() {
        console.log('Tax');
    }
    //access private property
    getBalance() {
        this.calculateTax();
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'Maxwell', 0);
account.depostit(200);
// account.balance = 20 setter
console.log(account.balance);
