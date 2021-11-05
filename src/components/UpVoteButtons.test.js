import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import UpVoteButtons from "./UpVoteButtons";

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

const postData = {
  feedId: 0,
  reload: false,
  likes: 0,
  loves: 0,
  setReload: () => {}
}

it("renders upvotes buttons", () => {
  const onChange = jest.fn();
  act(() => {
    render(
      <UpVoteButtons
        likes={postData.likes}
        loves={postData.loves}
        feedId={postData.feedId}
        reload={postData.reload}
        setReload={postData.setReload}
      />,
      container
    );
  });

  const likeButton = document.getElementById("likeButton");
  expect(likeButton.textContent).toBe("0 ");

  const loveButton = document.getElementById("loveButton");
  expect(loveButton.textContent).toBe("0 ");
});

it("clicks upvotes buttons", () => {
  const onChange = jest.fn();
  act(() => {
    render(
      <UpVoteButtons
        likes={postData.likes}
        loves={postData.loves}
        feedId={postData.feedId}
        reload={postData.reload}
        setReload={postData.setReload}
      />,
      container
    );
  });

  const likeButton = document.getElementById("likeButton");
  act(() => {
    likeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(likeButton.textContent).toBe("0 ");

  const loveButton = document.getElementById("loveButton");
  act(() => {
    loveButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(loveButton.textContent).toBe("0 ");
});
