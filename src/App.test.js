import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('My first ReactJS test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect((1+1)).toEqual(2);
  ReactDOM.unmountComponentAtNode(div);
});

/*
 * Code below adapted from
 * https://reactjs.org/docs/testing-recipes.html#setup--teardown
 */

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// This is not a good test yet. The quote could contain the word 'Search' and
// then this test could give a false positive. This should look for the correct
// DOM element, but I do not know yet you to do that with this framework.
it("Has a search field", () => {

  act(() => {
    render(<App />, container);
  });

  expect(container.textContent).toContain("Search" );
});
