export default function browser() {
	if (
		window &&
		typeof process === 'undefined' &&
		typeof Deno === 'undefined' &&
		typeof caches === 'undefined'
	) {
		return 'browser mjs'
	} else {
		throw new Error('not browser mjs')
	}
}
