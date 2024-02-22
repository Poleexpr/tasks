type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
	return Promise.all([promise1, promise2]).then(responses => {
		return responses.reduce((a, b) => a + b)
	})
}

const promise1: P = new Promise(resolve => setTimeout(() => resolve(2), 20))
const promise2: P = new Promise(resolve => setTimeout(() => resolve(5), 60))

console.log(addTwoPromises(promise1, promise2))
