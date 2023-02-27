export default function workerd() {
	if (
		caches &&
		typeof window === 'undefined' &&
		typeof Deno === 'undefined' &&
		typeof process === 'undefined'
	) {
		return 'workerd mjs'
	} else {
		throw new Error('not workerd mjs')
	}
}
