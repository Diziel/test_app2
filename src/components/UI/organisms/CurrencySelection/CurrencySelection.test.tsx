import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrencySelection from "./CurrencySelection";

test("renders empty currency list when no currency is selected", () => {
  const { container } = render(<CurrencySelection />);
  const currencyList = container.querySelector(".currency-list");

  expect(currencyList).toBeEmptyDOMElement();
});

test("renders selected currency in the currency list", () => {
  const { getByLabelText, container } = render(<CurrencySelection />);
  const eurCheckbox = getByLabelText("EUR");

  fireEvent.click(eurCheckbox);

  const currencyList = container.querySelector(".currency-list");

  expect(currencyList).toHaveTextContent("EUR");
  expect(currencyList).toContainHTML(
    '<div class="button icon">+</div>EUR</div>'
  );
});

test("renders the component with default state", () => {
  render(<CurrencySelection />);

  const eurCheckbox = screen.getByLabelText("EUR");
  const gbpCheckbox = screen.getByLabelText("GBP");

  expect(eurCheckbox).toBeInTheDocument();
  expect(gbpCheckbox).toBeInTheDocument();
});
