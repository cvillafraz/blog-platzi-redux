import { TOGGLE_COMMENTS } from '../types'
import axios from 'axios'
export const showComments = id => (dispatch, getState) => {
    const posts = getState().posts.items.map(post => {
        if (post.id == id) {
            post.open = !post.open
            if (!post.comments.length) {
                let comments = axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => res.data)
                post.comments.push(comments)
            }
        }
    })
    return {
        type: TOGGLE_COMMENTS,
        payload: posts
    }
}