import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import CurrencyElement from "./CurrencyElement";

test("renders CurrencyElement component with default props", () => {
  const handleRemoveMock = jest.fn();
  const { getByText } = render(
    <CurrencyElement name="USD" handleRemove={handleRemoveMock} />
  );

  const currencyElement = getByText("USD");
  const closeButton = getByText("+");

  expect(currencyElement).toBeInTheDocument();
  expect(closeButton).toBeInTheDocument();
});

test("applies custom className to CurrencyElement component", () => {
  const handleRemoveMock = jest.fn();
  const { container } = render(
    <CurrencyElement
      name="USD"
      handleRemove={handleRemoveMock}
      className="custom-element"
    />
  );
  const currencyElement = container.querySelector(
    ".currency-wrapper.custom-element"
  );

  expect(currencyElement).toBeInTheDocument();
});

test("triggers handleRemove callback when CloseButton is clicked", () => {
  const handleRemoveMock = jest.fn();
  const { getByText } = render(
    <CurrencyElement name="USD" handleRemove={handleRemoveMock} />
  );
  const closeButton = getByText("+");

  fireEvent.click(closeButton);

  expect(handleRemoveMock).toHaveBeenCalledWith("USD");
});
