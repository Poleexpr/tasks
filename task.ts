function majorityElement(nums: number[]): number {
	const map = new Map()
	for (let num of nums) {
		let g = (map.get(num) ?? 0) + 1
		map.set(num, g)
		if (g > nums.length / 2) return num
	}
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
