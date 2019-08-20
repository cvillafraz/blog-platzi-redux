import { UPDATE_COMMENTS, COM_ERROR, COM_LOADING } from './types'
import axios from 'axios'
export const showComments = async (postKey, comKey, { dispatch, getState }) => {
    const posts = getState().posts.items;
    const post = posts[postKey][comKey];

    const updatedPost = {
        ...post,
        open: !post.open
    };

    const updatedPosts = [...posts];

    updatedPosts[postKey] = [
        ...posts[postKey]
    ];
    updatedPosts[postKey][comKey] = updatedPost;

    dispatch({
        type: UPDATE_COMMENTS,
        payload: updatedPosts
    });
}
export const getComments = async (postKey, comKey, { dispatch, getState }) => {
    dispatch({
        type: COM_LOADING
    })
    const posts = getState().posts.items;
    const post = posts[postKey][comKey];

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)

        const updatedPost = {
            ...post,
            comments: response.data
        };

        const updatedPosts = [...posts];

        updatedPosts[postKey] = [
            ...posts[postKey]
        ];
        updatedPosts[postKey][comKey] = updatedPost;

        dispatch({
            type: UPDATE_COMMENTS,
            payload: updatedPosts
        });
    }
    catch (error) {
        console.log(error.message);
        dispatch({
            type: COM_ERROR,
            payload: 'Comentarios no disponibles.'
        });
    }
}