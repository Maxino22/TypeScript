import { HasFormatter } from '../Interphases/HasFormatter'

export class Payment implements HasFormatter {
	constructor(
		public recipient: string,
		public details: string,
		public amount: number
	) {}
	format() {
		return `${this.recipient} is  owed  KSH${this.amount}  for ${this.details}`
	}
}
