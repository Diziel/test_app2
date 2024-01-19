import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders App component", async () => {
  render(<App />);

  const textToFind = /With Default state \(useState\)/i;

  await waitFor(() => {
    const linkElement = screen.getByText(textToFind);
    expect(linkElement).toBeInTheDocument();
  });
});
