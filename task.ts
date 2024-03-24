declare global {
	interface Array<T> {
		groupBy(fn: (item: T) => string): Record<string, T[]>
	}
}

Array.prototype.groupBy = function (fn) {
	const obj = {}
	for (let i = 0; i < this.length; i++) {
		obj[fn(this[i])]
			? obj[fn(this[i])].push(this[i])
			: (obj[fn(this[i])] = [this[i]])
	}

	return obj
}
