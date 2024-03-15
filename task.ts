type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
	let timeOut: ReturnType<typeof setTimeout>

	return function (...args) {
		clearTimeout(timeOut)
		timeOut = setTimeout(() => fn(...args), t)
	}
}
