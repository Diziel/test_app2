import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import WithRedux from "./WithRedux";

const mockStore = configureStore();

test("renders WithRedux page", () => {
  const store = mockStore({
    currency: {
      list: [],
    },
  });

  const { container } = render(
    <Provider store={store}>
      <WithRedux />
    </Provider>
  );

  const pageTitle = screen.getByText("With Redux");
  expect(pageTitle).toBeInTheDocument();

  const currencySelectionComponent = container.querySelector(
    ".currency-container"
  );
  expect(currencySelectionComponent).toBeInTheDocument();
});
