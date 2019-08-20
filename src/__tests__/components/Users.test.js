import React from 'react'
import {
  render,
  cleanup,
  waitForElement,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import axiosMock from 'axios'
import Users from '../../screens/Users'
import { act } from '../../config/utils';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from '../../config/reducers'

afterEach(cleanup)

function renderWithRedux(
  ui,
  { store = createStore(rootReducer) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

describe('rendering users', () => {
  test('loads and displays users if successfully fetched', async () => {

    let usersComponent = null
    let url = 'https://jsonplaceholder.typicode.com/users'

    await act(() => {
      axiosMock.get.mockResolvedValueOnce({
        data: [{
          "id": 1,
          "name": "Leanne Graha",
          "username": "Bret",
          "email": "Sincere@april.biz"
        }]
      });
      usersComponent = renderWithRedux(<BrowserRouter><Users url={url} /></BrowserRouter>);
    })


    const username = await waitForElement(() => usersComponent.getByTestId("username"));



    expect(username).toHaveTextContent("Leanne Graha");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  })
})

