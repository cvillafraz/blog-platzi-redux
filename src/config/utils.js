import { act as reactAct } from 'react-dom/test-utils'
import axios from 'axios'

const SUPPRESSED_PREFIXES = [
    "Warning: Do not await the result of calling ReactTestUtils.act(...)",
    "Warning: An update to %s inside a test was not wrapped in act(...)",
];

function isSuppressedErrorMessage(message){
    return SUPPRESSED_PREFIXES.some(sp => message.startsWith(sp));
}

export async function act(f){
    const oldError = window.console.error;
    window.console.error = (...args) => {
        if (!isSuppressedErrorMessage(args[0])) {
            oldError(...args);
        }
    };
    await Promise.race([reactAct(f), new Promise(res => setTimeout(res))]);
    window.console.error = oldError;
}
export async function getData(dispatch, action, url){
    try {
        let { data } = await axios.get(url)
        dispatch(action(data))
      } catch (err) {
        dispatch(action('Algo salió mal, intente mas tarde'))
      }
}