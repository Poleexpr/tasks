function pivotIndex(nums: number[]): number {
	//start to sum start nums and end nums
	//if sum of start nums === sum of end nums return i
	const sum = nums.reduce((prev, cur) => prev + cur, 0)
	let sumLeft = 0

	for (let i = 0; i < nums.length; i++) {
		if (sum - nums[i] - sumLeft === sumLeft) {
			return i
		}

		sumLeft += nums[i]
	}

	return -1
}

pivotIndex([1, 7, 3, 6, 5, 6])
