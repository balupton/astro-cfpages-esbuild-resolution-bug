export default function node() {
	if (
		process &&
		typeof window === 'undefined' &&
		typeof Deno === 'undefined' &&
		typeof caches === 'undefined'
	) {
		return 'node mjs'
	} else {
		throw new Error('not node mjs')
	}
}
