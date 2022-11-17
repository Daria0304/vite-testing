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

  it("should render a list of 2 names", () => {
    render(<List list={list}>{children}</List>);
    const list = screen.getByTestId("list")
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(2)
  });

  it("should display names", () => {
    render(<List list={list}>{children}</List>);

    const names = screen.getByTestId("list")
    expect(names).toBe([list.name])
  });
});
