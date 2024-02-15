type Counter = {
	increment: () => number
	decrement: (init: number) => number
	reset: (init: number) => number
}

function createCounter(init: number): Counter {
	let i = init
	return {
		increment: () => {
			return ++i
		},
		reset: () => {
			return init
		},
		decrement: () => {
			return --i
		},
	}
}

const counter = createCounter(0)

console.log(counter.increment())
