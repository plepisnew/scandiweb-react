import React from "react";
import StyledHeader from "./Header.styled";
import Navigation from "./Navigation";
import Logo from "./Logo";
import CurrencyAction from "./CurrencyAction";
import CartAction from "./CartAction";

class Header extends React.PureComponent {
  render() {
    return (
      <StyledHeader className="header">
        <Navigation />
        <Logo />
        <div className="actions">
          <CurrencyAction />
          <CartAction />
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
