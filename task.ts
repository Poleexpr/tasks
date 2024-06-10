function intersect(nums1: number[], nums2: number[]): number[] {
	let result = []
	if (nums1.length < nums2.length) {
		return intersect(nums2, nums1)
	}
	const obj = nums1.reduce((acc, num) => {
		// здесь сначала будет underfund тк ключ acc[num] отсутствует, он создаётся со значением 1, затем совпадения ключа считаются добавлением 1 каждый раз
		acc[num] = acc[num] + 1 || 1
		return acc
	}, {})

	for (let i = 0; i < nums2.length; i++) {
		if (obj[nums2[i]] !== undefined && obj[nums2[i]] > 0) {
			obj[nums2[i]] = obj[nums2[i]] - 1
			result.push(nums2[i])
		}
	}

	return result
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
