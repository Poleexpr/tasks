type Fn = (n: number, i: number) => any

function curry(f: Fn) {
	return function (a: number) {
		return function (b: number) {
			return f(a, b)
		}
	}
}

function filter(arr: number[], fn: Fn): number[] {
	const result = []
	let curriedFn = curry(fn)

	console.log(curriedFn)
	for (let i = 0; i < arr.length; i++) {
		if (curriedFn(arr[i])) {
			result.push(arr[i])
		}
		if (curriedFn(i)) {
			result.push(i)
		}
	}

	return result
}

let arr = [0, 10, 20, 30]

function greaterThan10(n: number) {
	return n > 10
}

console.log(filter(arr, greaterThan10))
