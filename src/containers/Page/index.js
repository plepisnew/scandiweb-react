import React from "react";

class Page extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <div className="page">{children}</div>;
  }
}

export default Page;
