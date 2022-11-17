import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { ActionButton }  from "./App.jsx";

const text = "Dodaj imię!";
const onClick = () => {};

describe("ActionButton", () => {
  it("should be in the document", () => {
    render(<ActionButton text={text} onClick={onClick} />);

    expect(screen.getByTestId("action-button")).toBeInTheDocument();
  });

  it("should display a button name", () => {
    render(<ActionButton text={text} onClick={onClick} />);

    expect(screen.getByTestId("action-button").textContent).toBe(text)
  });

  it("should simulate a click event", () => {
    render(<ActionButton text={text} onClick={onClick} />);

    userEvent.click(screen.getByTestId("action-button"));

    expect(screen.getByTestId("action-button")).toBeCalledTimes(1);
  });
});


