import React from "react";
import { useNavigate } from "react-router-dom";

function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

class Logo extends React.PureComponent {
  render() {
    return (
      <img
        src="/images/logo.png"
        alt="logo"
        width={41}
        height={41}
        onClick={() => {
          const { navigate } = this.props;
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default withNavigation(Logo);
