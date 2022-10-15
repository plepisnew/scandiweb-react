import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../../components/Header";
import CategoryPage from "../CategoryPage";
import ProductPage from "../ProductPage";
import CartPage from "../CartPage";
import GreyBackground from "../../components/GreyBackground";
import { connect } from "react-redux";
import Page from "../Page";

class App extends React.PureComponent {
  render() {
    const { overlay } = this.props;
    return (
      <Router>
        <Page>
          <Routes>
            <Route path="/" element={<CategoryPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <GreyBackground active={overlay} />
        </Page>

        <Header />
        <GlobalStyle />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    overlay: state.overlay,
  };
};

export default connect(mapStateToProps)(App);
