import { FETCH_USERS, USERS_LOADING, USERS_ERROR } from '../types'

export default (data) => {
        if (typeof data === 'string') {
                return {
                        type: USERS_ERROR,
                        payload: 'Usuario(s) no disponible(s)'
                }
        } else if (!data) {
                return {
                        type: USERS_LOADING,
                        payload: true
                }
        } else {
                return {
                        type: FETCH_USERS,
                        payload: data
                }
        }

}
