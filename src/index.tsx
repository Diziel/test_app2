import ReactDOM from "react-dom/client";
import "./assets/styles/common.scss";
import App from "./App.tsx";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
