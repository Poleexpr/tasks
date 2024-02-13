function createCounter(n: number): () => number {
	return () => {
		return ++n
	}
}

let counter = createCounter(-2)

console.log(counter(), counter(), counter())
