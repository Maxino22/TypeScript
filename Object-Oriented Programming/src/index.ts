class Account {
	nickname?: string // optional

	constructor(
		public readonly id: number,
		public owner: string,
		private _balance: number
	) {}

	depostit(amount: number): void {
		if (amount <= 0) {
			throw new Error('Invalid amount')
		}
		this._balance += amount
	}
	// private method
	private calculateTax(): void {
		console.log('Tax')
	}
	//access private property
	getBalance(): number {
		this.calculateTax()
		return this._balance
	}

	get balance(): number {
		return this._balance
	}

	// set balance(value: number){
	//   if(value < 0 ) throw new Error('Invalid value')
	//   this._balance = value
	// }
}

let account = new Account(1, 'Maxwell', 0)

account.depostit(200)
// account.balance = 20 setter
console.log(account.balance)
