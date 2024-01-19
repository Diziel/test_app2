import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./NoMatch";

test("renders NoMatch component", () => {
  render(
    <Router>
      <NoMatch />
    </Router>
  );

  const heading = screen.getByRole("heading", {
    name: /Nothing to see here!/i,
  });
  expect(heading).toBeInTheDocument();

  const linkToHome = screen.getByRole("link", { name: /Go to the home page/i });
  expect(linkToHome).toBeInTheDocument();
});
