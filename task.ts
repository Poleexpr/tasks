function plusOne(digits: number[]): string[] {
	let result = BigInt(digits.join('')) + BigInt(1)
	return result.toString().split('')
}

console.log(plusOne([3, 6, 1, 0]))
