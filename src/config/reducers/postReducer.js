import * as types from '../actions/types'
const initialState={
    items: [],
    loading: false,
    error: null
}
export default (state=initialState, action) => {
    switch(action.type){
        case types.FETCH_POSTS:
            return {...state, items: action.payload, loading: false}
        case types.POSTS_LOADING:
            return {...state, loading: action.payload}
        case types.POSTS_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}