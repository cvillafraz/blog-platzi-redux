import fetchPosts from '../../config/actions/posts/fetchPosts'
import * as types from '../../config/actions/types'
import expect from 'expect' // You can use any testing library
import 'jest-dom/extend-expect'

describe('GET posts action', ()=>{
    it('returns posts when they have been fetched successfully', () => {

      const expectedAction = 
        { type: types.FETCH_POSTS, payload: [{
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }] }
      
  
        expect(fetchPosts([{
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }])).toEqual(expectedAction)
      })
  
      it('returns true when posts request is loading', ()=>{
        const expectedAction = {
          type: types.POSTS_LOADING,
          payload: true
        }
        expect(fetchPosts(true)).toEqual(expectedAction)
      })
  
      it('returns error message when posts request failed', ()=>{
        const expectedAction = {
          type: types.POSTS_ERROR,
          payload: 'Publicaciones no disponibles'
        }
  
        expect(fetchPosts('not found')).toEqual(expectedAction)
      })
  })
