import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './Interphases/HasFormatter.js'

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

const form = document.querySelector('form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
	e.preventDefault()
	let doc: HasFormatter
	if (type.value === 'invoice')
		doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
	doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)

	list.render(doc, type.value, 'end')
})
