import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./App";

// Unit tests
test("adds numbers correctly", () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Result: 8")).toBeInTheDocument();
});

test("subtracts numbers correctly", () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText("Subtract"));
  expect(screen.getByText("Result: 2")).toBeInTheDocument();
});
