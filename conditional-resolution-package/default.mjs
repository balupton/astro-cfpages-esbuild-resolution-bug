export default function def() {
	if (
		typeof process === 'undefined' &&
		typeof window === 'undefined' &&
		typeof Deno === 'undefined' &&
		typeof caches === 'undefined'
	) {
		return 'default mjs'
	} else {
		throw new Error('not default mjs')
	}
}
