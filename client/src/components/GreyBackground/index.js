import React from "react";
import StyledGreyBackground from "./GreyBackground.styled";

class GreyBackground extends React.Component {
  render() {
    return (
      <StyledGreyBackground active={this.props.active}></StyledGreyBackground>
    );
  }
}

export default GreyBackground;
