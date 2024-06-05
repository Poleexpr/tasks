function containsDuplicate(nums: number[]): boolean {
	const obj = {}
	let k = 0
	for (let i = 0; i < nums.length; i++) {
		obj.hasOwnProperty(nums[i]) ? (obj[nums[i]] += 1) : (obj[nums[i]] = 0)
	}
	console.log(obj)
	const more = m => m >= 1
	return Object.values(obj).some(more)
}

console.log(containsDuplicate([1, 2, 3, 1]))
