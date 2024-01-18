import React, { StrictMode } from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import AppRouter from "./Router.tsx";

const App: React.FC = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
};

export default App;
