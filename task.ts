function compactObject(obj: any): any {
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}
	if (Array.isArray(obj)) {
		const resultArr = []
		for (let i = 0; i < obj.length; i++) {
			let val = compactObject(obj[i])
			val && resultArr.push(val)
		}
		return resultArr
	}

	const compactObj = {}

	for (let key in obj) {
		const val = compactObject(obj[key])
		if (val) {
			compactObj[key] = val
		}
	}

	return compactObj
}

console.log(compactObject([null, 0, 5, [0], [false, 16]]))
