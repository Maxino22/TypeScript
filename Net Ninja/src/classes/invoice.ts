//classes

import { HasFormatter } from '../Interphases/HasFormatter'

export class Invoice implements HasFormatter {
	constructor(
		public client: string,
		public details: string,
		public amount: number
	) {}
	format() {
		return `${this.client} owed  KSH${this.amount}  for ${this.details}`
	}
}
