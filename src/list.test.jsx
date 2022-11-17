import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { List }  from "./App.jsx";

const list = [
  {
    id: 1,
    name: "Anna"
  },
  {
    id: 2,
    name: "Tom"
  }
];

const children = "Delete Anna";

describe("List", () => {
  it("should be in the document", () => {
    render(<List list={list}>{children}</List>);

    expect(screen.getByTestId("list")).toBeInTheDocument();
  });

  it("should rednder a list of names", () => {
    render(<List list={list}>{children}</List>);

    expect(screen.getByTestId("list")).toHaveValue([list.name]);;
  });
});
