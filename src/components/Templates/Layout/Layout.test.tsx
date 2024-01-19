import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";

test("renders Layout component", () => {
  render(
    <Router>
      <Layout />
    </Router>
  );

  const linkWithState = screen.getByRole("link", { name: /With state/i });
  const linkWithRedux = screen.getByRole("link", { name: /With redux/i });

  expect(linkWithState).toBeInTheDocument();
  expect(linkWithRedux).toBeInTheDocument();
});
