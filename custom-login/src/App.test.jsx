/* global jest, beforeEach, afterEach, it, expect */
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.mock('./Login', () => () => <div>Login</div>);

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders title link', async () => {
  await act(async () => {
    ReactDOM.render(<App />, container);
  });

  const linkElement = container.querySelector('a');
  expect(linkElement.textContent.trim()).toBe('Okta-React Sample Project');
});
