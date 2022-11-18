import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { ActionButton }  from "./App.jsx";

const text = "Dodaj imię!";
const onClick = jest.fn()

describe("ActionButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should be in the document", () => {
    render(<ActionButton text={text} onClick={onClick} />);

    expect(screen.getByTestId("action-button")).toBeInTheDocument();
  });

  it("should display a button name", () => {
    render(<ActionButton text={text} onClick={onClick} />);

    expect(screen.getByTestId("action-button").textContent).toBe(text)
  });

  it("should simulate a click event", async () => {
    render(<ActionButton text={text} onClick={onClick} />);

    await userEvent.click(screen.getByTestId("action-button"));

    expect(onClick).toBeCalledTimes(1);
  });

  it("should simulate a 3 click events", async () => {
    render(<ActionButton text={text} onClick={onClick} />);

    await userEvent.click(screen.getByTestId("action-button"));
    await userEvent.click(screen.getByTestId("action-button"));
    await userEvent.click(screen.getByTestId("action-button"));

    expect(onClick).toBeCalledTimes(3);
  });
});


