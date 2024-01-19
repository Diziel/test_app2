import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CurrencySelectionRedux from "./CurrencySelectionRedux";

const mockStore = configureStore();

test("renders empty currency list when no currency is selected", () => {
  const store = mockStore({
    currency: {
      list: [],
    },
  });

  const { container } = render(
    <Provider store={store}>
      <CurrencySelectionRedux />
    </Provider>
  );

  const currencyList = container.querySelector(".currency-list");

  expect(currencyList).toBeEmptyDOMElement();
});

test("renders selected currency in the currency list", () => {
  const store = mockStore({
    currency: {
      list: ["EUR"],
    },
  });

  const { container } = render(
    <Provider store={store}>
      <CurrencySelectionRedux />
    </Provider>
  );

  const currencyList = container.querySelector(".currency-list");

  expect(currencyList).toHaveTextContent("EUR");
  expect(currencyList).toContainHTML(
    '<div class="button icon">+</div>EUR</div>'
  );
});

test("renders the component with default state", () => {
  const store = mockStore({
    currency: {
      list: [],
    },
  });

  render(
    <Provider store={store}>
      <CurrencySelectionRedux />
    </Provider>
  );

  const eurCheckbox = screen.getByLabelText("EUR");
  const gbpCheckbox = screen.getByLabelText("GBP");

  expect(eurCheckbox).toBeInTheDocument();
  expect(gbpCheckbox).toBeInTheDocument();
});
