import * as types from '../actions/posts/types'

const initialState = {
	items: [],
	loading: false,
	com_loading: false,
	error: null,
	com_error: null
}
export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_POSTS:
			return { ...state, items: action.payload, loading: false, error: null }
		case types.UPDATE_COMMENTS:
			return {
				...state,
				items: action.payload,
				com_loading: false,
				com_error: null
			}
		case types.LOADING:
			return { ...state, loading: true }
		case types.COM_LOADING:
			return { ...state, com_loading: true }
		case types.ERROR:
			return { ...state, error: action.payload, loading: false }
		case types.COM_ERROR:
			return { ...state, com_error: action.payload, com_loading: false }
		default:
			return state
	}
}
