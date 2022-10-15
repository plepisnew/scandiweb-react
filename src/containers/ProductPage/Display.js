import React from "react";

class Display extends React.PureComponent {
  render() {
    const { image } = this.props;
    return (
      <div className="display">
        <img className="display-image" alt="display" src={image} />
      </div>
    );
  }
}

export default Display;
