import React from "react";
import client from "../../GraphQL/ApolloClient";
import GlobalStyle from "./GlobalStyle";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../../components/Header";
import CategoryPage from "../CategoryPage";
import ProductPage from "../ProductPage";
import CartPage from "../CartPage";
import GreyBackground from "../../components/GreyBackground";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<CategoryPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>

          <GreyBackground active={this.props.overlay} />
          <Header />
          <GlobalStyle />
        </Router>
      </ApolloProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    overlay: state.overlay,
  };
};

export default connect(mapStateToProps)(App);
