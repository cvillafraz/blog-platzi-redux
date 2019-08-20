import * as types from '../actions/todos/types'

const INITIAL_STATE = {
    items: {},
    loading: false,
    error: null,
    userId: '',
    title: '',
    redirect: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_TODOS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
                redirect: false
            }

        case types.LOADING:
            return { ...state, loading: true }

        case types.ERROR:
            return { ...state, error: action.payload, loading: false }

        case types.UPDATE_INPUTS:
            return action.payload

        case types.ADD_TODO:
            return {
                ...state,
                todos: {},
                loading: false,
                error: null,
                redirect: true,
                userId: '',
                title: ''
            }

        case types.UPDATE_TODO:
            return { ...state, items: action.payload }

        default: return state;
    };
};