import axios from 'axios'
import { FETCH_USERS, LOADING, ERROR } from './types'

export default async dispatch => {
	dispatch({
		type: LOADING
	})

	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/users')
		dispatch({
			type: FETCH_USERS,
			payload: res.data
		})
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: 'Información de usuario no disponible.'
		})
	}
}
