import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WithState from "./WithState";

test("renders WithState page", () => {
  const { container } = render(<WithState />);

  const pageTitle = screen.getByText("With Default state (useState)");
  expect(pageTitle).toBeInTheDocument();

  const currencySelectionComponent = container.querySelector(
    ".currency-container"
  );
  expect(currencySelectionComponent).toBeInTheDocument();
});
