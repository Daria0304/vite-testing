import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ActionButton }  from "./App.jsx";

const text = "Dodaj imię!";
const onClick = () => {};

describe("ActionButton", () => {
  it("should be in the document", () => {
    render(<ActionButton text={text} onClick={onClick} />);

    expect(screen.getByTestId("action-button")).toBeInTheDocument();
  });

  // it("should add a name to the list", () => {
  //   render(<ActionButton text={text} onClick={onClick} />);

  //   userEvent.click(getByTestId("action-button"));

  //   expect(screen.getByTestId("action-button")). ??
  // });
});


