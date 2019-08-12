import * as types from '../actions/types'
const initialState={
    items: [],
    loading: false,
    error: null
}
export default (state=initialState, action) => {
    switch(action.type){
        case types.FETCH_USERS:
            return {...state, items: action.payload, loading: false}
        case types.USERS_LOADING:
            return {...state, loading: action.payload}
        case types.USERS_ERROR:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}