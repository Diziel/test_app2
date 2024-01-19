import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/react";
import CloseButton from "./CloseButton";

test("renders CloseButton component with default props", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<CloseButton onClick={onClickMock} />);
  const buttonElement = getByText("+");

  expect(buttonElement).toBeInTheDocument();
});

test("applies custom className to Button component", () => {
  const onClickMock = jest.fn();
  const { container } = render(
    <CloseButton onClick={onClickMock} className="custom-button" />
  );
  const buttonElement = container.querySelector(".button.custom-button");

  expect(buttonElement).toBeInTheDocument();
});

test("triggers onClick callback when button is clicked", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<CloseButton onClick={onClickMock} />);
  const buttonElement = getByText("+");

  fireEvent.click(buttonElement);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
