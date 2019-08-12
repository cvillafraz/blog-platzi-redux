import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { create } from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("App component", () => {
  test("Matches app snapshot", () => {
    const button = create(<App />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
