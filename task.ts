type MultiDimensionalArray = (number | MultiDimensionalArray)[]

var flat = function (
	arr: MultiDimensionalArray,
	n: number
): MultiDimensionalArray {
	if (n === 0) {
		return arr
	}

	const result: MultiDimensionalArray = []

	const subFlat = (array: MultiDimensionalArray, depth: number) => {
		for (let a of array) {
			Array.isArray(a) && depth < n ? subFlat(a, depth + 1) : result.push(a)
		}
		return result
	}

	return subFlat(arr, 0)
}

console.log(
	flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
)
