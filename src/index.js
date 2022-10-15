import ReactDOM from "react-dom/client";
import App from "./containers/App/index";
import client from "./GraphQL/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
