import axios from 'axios'
import { FETCH_POSTS, LOADING, ERROR } from './types'
import { FETCH_USERS } from '../users/types'

export default async (key, { dispatch, getState }) => {
	dispatch({
		type: LOADING
	})

	const users = getState().users.items
	const posts = getState().posts.items
	const userId = users[key].id
	try {
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		)
		const newPosts = res.data.map(post => ({
			...post,
			comments: [],
			open: false
		}))
		const updatedPosts = [...posts, newPosts]

		dispatch({
			type: FETCH_POSTS,
			payload: updatedPosts
		})

		const posts_key = updatedPosts.length - 1
		const updatedUsers = [...users]
		updatedUsers[key] = {
			...users[key],
			posts_key
		}

		dispatch({
			type: FETCH_USERS,
			payload: updatedUsers
		})
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: 'Publicaciones no disponibles.'
		})
	}
}
