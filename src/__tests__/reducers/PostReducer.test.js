import postReducer from '../../config/reducers/postReducer'
import * as types from '../../config/actions/posts/types'

describe('post reducer', () => {
    const initialState = {
        items: [],
        loading: false,
        error: null,
        com_loading: false,
        com_error: null
    }
    it('returns the initial state', () => {
        expect(postReducer(undefined, {})).toEqual(initialState)
    })

    it('returns the posts when fetched successfully', () => {
        expect(postReducer(undefined, {
            type: types.FETCH_POSTS,
            payload:
                [[{
                    "userId": 1,
                    "id": 1,
                    "title": "lorem ipsum",
                    "body": "hello there"
                }]]
        })).toEqual({
            ...initialState,
            items: [[{
                "userId": 1,
                "id": 1,
                "title": "lorem ipsum",
                "body": "hello there"
            }]]
        }
        )
    })
    it('sets loading/com_loading to true', () => {
        expect(postReducer(undefined,
            {
                type: types.LOADING,
            }
        )).toEqual({ ...initialState, loading: true })

        expect(postReducer(undefined, { type: types.COM_LOADING })).toEqual({ ...initialState, com_loading: true })
    })
    it('returns error/com_error when posts/comments fetch fails', () => {
        expect(postReducer(undefined, {
            type: types.ERROR,
            payload: 'not found'
        })).toEqual({ ...initialState, error: 'not found' })

        expect(postReducer(undefined, {
            type: types.COM_ERROR,
            payload: 'not found'
        })).toEqual({ ...initialState, com_error: 'not found' })
    })
    it('updates post with comments', () => {
        expect(postReducer(undefined,
            {
                type: types.UPDATE_COMMENTS,
                payload: [[{
                    "userId": 1,
                    "id": 1,
                    "title": "lorem ipsum",
                    "body": "hello there",
                    "comments": [],
                    "open": true
                }]]
            }
        )).toEqual({
            ...initialState, items: [[{
                "userId": 1,
                "id": 1,
                "title": "lorem ipsum",
                "body": "hello there",
                "comments": [],
                "open": true
            }]]
        })
    })
})