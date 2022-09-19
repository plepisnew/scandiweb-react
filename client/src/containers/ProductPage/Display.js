import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <img className="display-image" alt="display" src={this.props.image} />
      </div>
    );
  }
}

export default Display;
