type JSONValue =
	| null
	| boolean
	| number
	| string
	| JSONValue[]
	| { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

function chunk(arr: number[], size: number): Obj[][] | any {
	const result = []

	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size))
	}

	return result
}

console.log(chunk([1, 2, 3, 4, 5], 1))
