import React, { useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PostForm from "./PostForm";

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

it("renderisa formulario para postagem", () => {
  act(() => {
    render(
      <PostForm
        reload={false}
        setReload={() => {}}
      />,
      container
    );
  });

  const labelPostForm = document.querySelector(".form-label");
  expect(labelPostForm.textContent).toBe("Poste um texto");

  const buttonPostForm = document.getElementById('postFormButton');
  expect(buttonPostForm.textContent).toBe("Postar");
});
