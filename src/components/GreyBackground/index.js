import React from "react";
import StyledGreyBackground from "./GreyBackground.styled";

class GreyBackground extends React.PureComponent {
  render() {
    return (
      <StyledGreyBackground
        active={this.props.active}
        className="grey"
      ></StyledGreyBackground>
    );
  }
}

export default GreyBackground;
