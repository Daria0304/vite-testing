import React from "react";
import  { render, screen  } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

import { Form }  from "./App.jsx";

const name = "Anna";
const counter = 0;
const handleChange = () => {};
const children = "Delete Anna";

describe("Form", () => {
  it("should be in the document", () => {
    render(
      <Form name={name} counter={counter} handleChange={handleChange}>
        {children}
      </Form>
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it('should be initially empty for input', () => {
    render(
      <Form name={name} counter={counter} handleChange={handleChange}>
        {children}
      </Form>
    );
    expect(screen.getByLabelText('Wpisz swoje imię').value).toBe('');
  })

  it('should be able to type a name', () => {
    render(
      <Form name={name} counter={counter} handleChange={handleChange}>
        {children}
      </Form>
    );
    userEvent.type(screen.getByLabelText('Wpisz swoje imię'), 'Anna')
    expect(screen.getByLabelText('Wpisz swoje imię')).toHaveValue('Anna');
  })
});