import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchUsers from '../../config/actions/users/fetchUsers'
import * as types from '../../config/actions/users/types'
import 'jest-dom/extend-expect'
import axiosMock from 'axios'

const mockStore = configureMockStore([thunk])

describe('GET users action', () => {

  it('returns users when they have been fetched successfully', () => {
    axiosMock.get.mockResolvedValueOnce({
      data: [{
        "id": 1,
        "name": "Leanne Graffe",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }]
    })
    const store = mockStore({ users: { items: [] } })
    const expectedActions = [
      { type: types.LOADING },
      {
        type: types.FETCH_USERS, payload:
          [{
            "id": 1,
            "name": "Leanne Graffe",
            "username": "Bret",
            "email": "Sincere@april.biz"
          }]
      }
    ]

    return fetchUsers(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})