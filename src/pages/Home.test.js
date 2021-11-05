import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { waitFor } from '@testing-library/react' // (or /dom, /vue, ...)

import { act } from "react-dom/test-utils";

import axios from 'axios';
import Home from './Home';

jest.mock('axios');

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderisa a página Home, principal página da aplicação", async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        "id": 140,
        "content": "testandooo",
        "createdAt": "2021-11-05T05:56:28.676Z",
        "updatedAt": "2021-11-05T05:56:28.676Z",
        "likes": 1,
        "loves": 0,
        "activeUserLikedIt": 0,
        "activeUserLovedIt": 0,
        "author": {
            "id": 93,
            "username": "otavio"
        }
      }
    ]
  });

  act(() => {
    render(
      <Home/>,
      container
    );
  });

  await waitFor(() => {
    const getSpy = jest.spyOn(axios, 'get');
    expect(getSpy).toBeCalled()
  });

  const post = document.getElementById('140');
  expect(post.textContent).toBe("testandooo");
});
