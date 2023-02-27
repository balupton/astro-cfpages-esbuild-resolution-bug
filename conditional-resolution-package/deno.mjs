export default function deno() {
	if (
		Deno &&
		typeof window === 'undefined' &&
		typeof process === 'undefined' &&
		typeof caches === 'undefined'
	) {
		return 'deno mjs'
	} else {
		throw new Error('not deno mjs')
	}
}
