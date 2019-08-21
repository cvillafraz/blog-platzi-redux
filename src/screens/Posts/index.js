import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import Comments from './Comments'
import Loading from '../../components/general/Loading'
import Fatal from '../../components/general/Fatal'
import fetchPosts from '../../config/actions/posts/fetchPosts'
import fetchUsers from '../../config/actions/users/fetchUsers'
import {
	showComments,
	getComments
} from '../../config/actions/posts/showComments'

const Posts = ({ match }) => {
	const [posts, users] = useSelector(state => [state.posts, state.users])
	const dispatch = useDispatch()
	const store = useStore()
	const usersCall = useCallback(() => fetchUsers(dispatch), [dispatch])
	const postsCall = useCallback(key => fetchPosts(key, store), [store])
	const toggleComments = useCallback(
		(postKey, comKey) => showComments(postKey, comKey, store),
		[store]
	)
	const commentsCall = useCallback(
		(postKey, comKey) => getComments(postKey, comKey, store),
		[store]
	)
	useEffect(() => {
		if (users.items.length === 0 && !users.error) {
			usersCall()
		}
	}, [usersCall, users.error, users.items.length])

	useEffect(() => {
		async function getPosts() {
			if (
				users.items.length &&
				!('posts_key' in users.items[match.params.key])
			) {
				await postsCall(match.params.key)
			}
		}
		getPosts()
	}, [postsCall, match, users.items])

	function displayComments(postKey, comKey, comments) {
		toggleComments(postKey, comKey)
		if (!comments.length) {
			commentsCall(postKey, comKey)
		}
	}
	function showUserName() {
		if (users.error) return <Fatal message={users.error} />
		if (users.loading) return <Loading />
		if (users.items.length > 0) {
			return (
				<h1 data-testid="username" className="mb-4 display-4">
					{`Publicaciones de ${users.items[match.params.key].name}`}
				</h1>
			)
		}
		return null
	}
	function showPosts() {
		if (!users.items.length) return null
		if (posts.error) {
			return <Fatal message={posts.error} />
		}
		if (posts.loading) {
			return <Loading />
		}
		if (!('posts_key' in users.items[match.params.key])) return null
		const { posts_key } = users.items[match.params.key]
		if (posts.items.length > 0)
			return posts.items[posts_key].map((post, index) => (
				<div key={post.id} className="card my-4">
					<h2
						data-testid={post.id == 1 && 'post-title'}
						className="card-title card-header"
					>
						{post.title}
					</h2>
					<div className="card-body">
						<p data-testid={post.id == 1 && 'post-body'}>{post.body}</p>
						<button
							className="text-info border-0 bg-transparent text-left pl-0"
							onClick={() => displayComments(posts_key, index, post.comments)}
						>
							{!post.open ? 'Mostrar' : 'Cerrar'} comentarios
						</button>
					</div>

					{post.open && <Comments comments={post.comments} />}
				</div>
			))
		return null
	}

	return (
		<main>
			{showUserName()}
			{showPosts()}
		</main>
	)
}

export default Posts
