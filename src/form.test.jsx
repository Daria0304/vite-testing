import React from "react";
import  { render, screen, waitFor  } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

import { Form }  from "./App.jsx";

const name = "Anna";
const counter = 0;
const handleChange = () => {};

describe("Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should be in the document", () => {
    render(
      <Form name={name} counter={counter} handleChange={handleChange}>
      </Form>
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it('should initially include "Anna" name', () => {
    render(
      <Form name={name} counter={counter} handleChange={handleChange}>
      </Form>
    );
    expect(screen.getByLabelText('Wpisz swoje imię')).toHaveValue('Anna')
  })

  it('should be able to type a name', async () => {
    render(
      <Form name={name} counter={counter} handleChange={handleChange}>
      </Form>
    );
    await userEvent.type(screen.getByLabelText('Wpisz swoje imię'), 'Ola')
    screen.debug() 
    expect(await screen.findByLabelText('Wpisz swoje imię')).toHaveValue('Ola');
  })
});