import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchPosts from '../../config/actions/posts/fetchPosts'
import * as types from '../../config/actions/posts/types'
import * as commentsActions from '../../config/actions/posts/showComments'
import { FETCH_USERS } from '../../config/actions/users/types'
import 'jest-dom/extend-expect'
import axiosMock from 'axios'

const mockStore = configureMockStore([thunk])

describe('GET posts action', () => {
  it('returns posts when they have been fetched successfully', () => {
    axiosMock.get.mockResolvedValueOnce({
      data: [{
        "userId": 1,
        "id": 1,
        "title": "lorem ipsum",
        "body": "lorem ipsum"
      }]
    })
    const store = mockStore({ posts: { items: [] }, users: { items: [{ id: 1 }] } })
    const expectedActions = [
      { type: types.LOADING },
      {
        type: types.FETCH_POSTS, payload:
          [[{
            "userId": 1,
            "id": 1,
            "title": "lorem ipsum",
            "body": "lorem ipsum",
            "comments": [],
            "open": false
          }]]
      },
      {
        type: FETCH_USERS,
        payload: [{
          "id": 1,
          "posts_key": 0
        }]
      }
    ]

    return fetchPosts(0, store).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
describe('Comments actions', () => {
  it('Toggles open property of a post', () => {
    const store = mockStore({ posts: { items: [[{ open: false }]] } })

    const expectedAction = [{
      type: types.UPDATE_COMMENTS,
      payload: [[{ open: true }]]
    }]

    return commentsActions.showComments(0, 0, store).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
  it('Gets the comments', () => {
    axiosMock.get.mockResolvedValueOnce({
      data: [{
        "postId": 1,
        "id": 1,
        "name": "lorem ipsum",
        "email": "lorem@ipsum.com",
        "body": "hello there"
      }]
    })
    const store = mockStore({
      posts: {
        items: [[{
          "userId": 1,
          "id": 1,
          "title": "lorem ipsum",
          "body": "lorem ipsum",
          "comments": [],
          "open": false
        }]]
      }
    })
    const expectedActions = [{
      type: types.COM_LOADING,
    },
    {
      type: types.UPDATE_COMMENTS,
      payload: [[{
        "userId": 1,
        "id": 1,
        "title": "lorem ipsum",
        "body": "lorem ipsum",
        "comments": [{
          "postId": 1,
          "id": 1,
          "name": "lorem ipsum",
          "email": "lorem@ipsum.com",
          "body": "hello there"
        }],
        "open": false
      }]]
    }
    ]
    return commentsActions.getComments(0, 0, store).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
