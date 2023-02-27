// homepage, login, verify
import tester from 'conditional-resolution-package'
const result = tester()
export const onRequest: PagesFunction = async (context) => {
	return new Response(result, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain;charset=UTF-8',
		},
	})
}
