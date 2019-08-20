import userReducer from '../../config/reducers/userReducer'
import * as types from '../../config/actions/users/types'
describe('user reducer', () => {
    it('returns the initial state', () => {
        expect(userReducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null
        })
    })

    it('returns the users when fetched successfully', () => {
        expect(userReducer(undefined, {
            type: types.FETCH_USERS,
            payload:
                [{
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz"
                }]
        })).toEqual(
            {
                items: [{
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz"
                }],
                error: null,
                loading: false
            }
        )
    })
    it('returns loading', () => {
        expect(userReducer(undefined,
            {
                type: types.LOADING,
            }
        )).toEqual({
            items: [],
            loading: true,
            error: null
        })
    })
    it('returns error when users fetch fails', () => {
        expect(userReducer(undefined, {
            type: types.ERROR,
            payload: 'not found'
        })).toEqual({
            items: [],
            error: 'not found',
            loading: false
        })
    })
})