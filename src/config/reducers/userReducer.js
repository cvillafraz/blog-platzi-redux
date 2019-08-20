import * as types from '../actions/users/types'
const initialState = {
    items: [],
    loading: false,
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERS:
            return { ...state, items: action.payload, loading: false }
        case types.LOADING:
            return { ...state, loading: true }
        case types.ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}