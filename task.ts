function singleNumber(nums: number[]): number {
	let result = nums[0]
	for (let i = 1; i < nums.length; i++) {
		result = result ^ nums[i]
	}

	return result
}

console.log(singleNumber([1, 2, 3, 1]))
