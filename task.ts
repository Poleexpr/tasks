type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
	for (let i = 0; i < nums.length; i++) {
		init = fn(init, nums[i])
		console.log(init)
	}

	return init
}

let arr = [1, 2, 3, 4]

function sum(accum: number, curr: number) {
	return accum + curr * curr
}
const init = 100

console.log(reduce(arr, sum, init))
