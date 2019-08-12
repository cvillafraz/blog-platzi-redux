import postReducer from '../../config/reducers/postReducer'
import * as types from '../../config/actions/types'

describe('post reducer', () => {
    it('returns the initial state', () => {
        expect(postReducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null
        })
    })

    it('returns the posts when fetched successfully', () => {
        expect(postReducer(undefined, {
            type: types.FETCH_POSTS,
            payload:
                [{
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  }]
        })).toEqual(
            {
                items: [{
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  }],
                error: null,
                loading: false
            }
        )
    })
    it('returns loading', () => {
        expect(postReducer(undefined,
            {
                type: types.POSTS_LOADING,
                payload: true
            }
        )).toEqual({
            items: [],
            loading: true,
            error: null
        })
    })
    it('returns error when posts fetch fails', () => {
        expect(postReducer(undefined, {
            type: types.POSTS_ERROR,
            payload: 'not found'
        })).toEqual({
            items: [],
            error: 'not found',
            loading: false
        })
    })
})