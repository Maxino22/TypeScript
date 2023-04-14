type ComponentOptions = {
	selector: string
}

function Component(options: ComponentOptions) {
	return (constructor: Function) => {
		console.log('Component decorator called')
		constructor.prototype.options = options
		constructor.prototype.uniquId = Date.now()
		constructor.prototype.insertInDom = () => {
			console.log('Inseting in DOM')
		}
	}
}

function Pipe(constructor: Function) {
	console.log('Pipe decorator called')
	constructor.prototype.pipe = true
}

//class decorator
//
@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}
