import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchUsers from '../../config/actions/users/fetchUsers'
import * as types from '../../config/actions/types'
import expect from 'expect' // You can use any testing library
import 'jest-dom/extend-expect'

const mockStore = configureMockStore([thunk])

describe('GET users action', () => {

  it('returns users when they have been fetched successfully', () => {

    const expectedAction = 
      { type: types.FETCH_USERS, payload: [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }] }
    

      expect(fetchUsers([{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }])).toEqual(expectedAction)
    })

    it('returns true when users request is loading', ()=>{
      const expectedAction = {
        type: types.USERS_LOADING,
        payload: true
      }
      expect(fetchUsers()).toEqual(expectedAction)
    })

    it('returns error message if users request failed', ()=>{
      const expectedAction = {
        type: types.USERS_ERROR,
        payload: 'Usuario(s) no disponible(s)'
      }

      expect(fetchUsers('not found')).toEqual(expectedAction)
    })
  })
  