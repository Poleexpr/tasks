type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
	const obj = {}
	return function (...args) {
		let json = JSON.stringify([...args])
		if (obj.hasOwnProperty(json)) {
			return obj[json]
		} else {
			obj[json] = fn(...args)
			return obj[json]
		}
	}
}

const sum: Fn = (a, b) => {
	return a + b
}
const memoizedSum = memoize(sum)

console.log(memoizedSum(2, 2))
