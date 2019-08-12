import { FETCH_POSTS, POSTS_LOADING, POSTS_ERROR } from '../types'

export default (data) => {
        if (typeof data === 'string') {
                return {
                        type: POSTS_ERROR,
                        payload: 'Publicaciones no disponibles'
                }
        } else if (data === true) {
                return {
                        type: POSTS_LOADING,
                        payload: data
                }
        } else {
                return {
                        type: FETCH_POSTS,
                        payload: data.map(post => ({
                                ...post,
                                comments: [],
                                open: false
                        }))
                }
        }

}