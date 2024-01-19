import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("renders Checkbox component with default props", () => {
  const { getByLabelText } = render(
    <Checkbox name="Test" onChange={() => {}} checked={false} />
  );
  const checkboxElement = getByLabelText("Test");

  expect(checkboxElement).toBeInTheDocument();
  expect(checkboxElement).not.toBeChecked();
});

test("renders Checkbox component as checked", () => {
  const { getByLabelText } = render(
    <Checkbox name="Test" onChange={() => {}} checked={true} />
  );
  const checkboxElement = getByLabelText("Test");

  expect(checkboxElement).toBeInTheDocument();
  expect(checkboxElement).toBeChecked();
});

test("triggers onChange callback when checkbox is clicked", () => {
  const onChangeMock = jest.fn();
  const { getByLabelText } = render(
    <Checkbox name="Test" onChange={onChangeMock} checked={false} />
  );
  const checkboxElement = getByLabelText("Test");

  fireEvent.click(checkboxElement);

  expect(onChangeMock).toHaveBeenCalledTimes(1);
});
