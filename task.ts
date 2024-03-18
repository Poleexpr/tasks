var promiseAll = function (functions: any) {
	return new Promise((resolve, reject) => {
		if (functions.length === 0) {
			resolve([])
			return
		}
		const res: any[] = []
		let resolvedCount = 0
		functions.forEach(async (el: any, idx: any) => {
			try {
				const subResult = await el()
				res[idx] = subResult
				resolvedCount++
				if (resolvedCount === functions.length) {
					resolve(res)
				}
			} catch (err) {
				reject(err)
			}
		})
	})
}
