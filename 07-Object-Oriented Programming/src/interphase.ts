interface Calender {
	name: string
	addEvent(): void
	removeEvent(): void
}
// only specify signature of our interphase

interface CloudCalender extends Calender {
	sync(): void
}

class GoogleCalender implements Calender {
	constructor(public name: string) {}

	addEvent(): void {
		throw new Error('Method not implemented.')
	}
	removeEvent(): void {
		throw new Error('Method not implemented.')
	}
}
