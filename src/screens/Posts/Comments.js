import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../components/general/Loading'
import Fatal from '../../components/general/Fatal'

const Comments = ({ comments }) => {
	const { com_error, com_loading } = useSelector(state => state.posts)
	if (com_error) {
		return <Fatal message={com_error} />
	}
	if (com_loading && !comments.length) {
		return <Loading />
	}

	return (
		<ul id="comments">
			{comments.map(comment => (
				<li key={comment.id}>
					<strong>
						<u>{comment.email}</u>
					</strong>
					<br />
					{comment.body}
				</li>
			))}
		</ul>
	)
}

export default Comments
