import { act as reactAct } from 'react-dom/test-utils'

const SUPPRESSED_PREFIXES = [
	'Warning: Do not await the result of calling ReactTestUtils.act(...)',
	'Warning: An update to %s inside a test was not wrapped in act(...)'
]

function isSuppressedErrorMessage(message) {
	return SUPPRESSED_PREFIXES.some(sp => message.startsWith(sp))
}

// eslint-disable-next-line import/prefer-default-export
export async function act(f) {
	const oldError = window.console.error
	window.console.error = (...args) => {
		if (!isSuppressedErrorMessage(args[0])) {
			oldError(...args)
		}
	}
	await Promise.race([reactAct(f), new Promise(res => setTimeout(res))])
	window.console.error = oldError
}
