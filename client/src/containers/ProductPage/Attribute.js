import React from "react";

class Attribute extends React.Component {
  constructor(props) {
    super(props);

    const selectedIndex = props.index || 0;
    this.state = {
      selectedAttribute: selectedIndex,
    };
  }

  createSelector(attribute) {
    switch (attribute.type) {
      case "swatch":
        return attribute.items.map((item, index) => (
          <div
            className={
              "swatch-selector " +
              (this.state.selectedAttribute === index && "swatch-selected")
            }
            onClick={() => {
              this.setState({
                selectedAttribute: index,
              });
              this.props.setAttribute(index);
            }}
            key={attribute.items[index].id}
            style={{
              background: attribute.items[index].value,
            }}
          >
            &nbsp;
          </div>
        ));
      case "text":
        return attribute.items.map((item, index) => (
          <div
            className={
              "text-selector " +
              (this.state.selectedAttribute === index && "text-selected")
            }
            onClick={() => {
              this.setState({
                selectedAttribute: index,
              });
              this.props.setAttribute(index);
            }}
            key={attribute.items[index].id}
          >
            {item.displayValue}
          </div>
        ));
      default:
        return <></>;
    }
  }

  render() {
    return (
      <div className="attribute-container">
        <p className="attribute-name">{this.props.attribute.name}:</p>
        <div className="attribute">
          {this.createSelector(this.props.attribute)}
        </div>
      </div>
    );
  }
}

export default Attribute;
