import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./App";

// Integration test
test("updates result when buttons are clicked", () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Result: 8")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Subtract"));
  expect(screen.getByText("Result: 2")).toBeInTheDocument();
});
