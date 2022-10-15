import React from "react";

class Attribute extends React.PureComponent {
  constructor(props) {
    super(props);

    const selectedIndex = props.index || 0;
    this.state = {
      selectedAttribute: selectedIndex,
    };
  }

  createSelector(attribute) {
    const { selectedAttribute } = this.state;
    const { setAttribute, disabled } = this.props;
    switch (attribute.type) {
      case "swatch":
        return attribute.items.map((item, index) => (
          <div
            className={
              "swatch-selector " +
              (selectedAttribute === index && "swatch-selected")
            }
            style={{
              background: attribute.items[index].value,
            }}
            onClick={() => {
              if (!disabled)
                this.setState({
                  selectedAttribute: index,
                });
              if (setAttribute) setAttribute(index);
            }}
            key={attribute.items[index].id}
          >
            &nbsp;
          </div>
        ));
      case "text":
        return attribute.items.map((item, index) => (
          <div
            className={
              "text-selector " +
              (selectedAttribute === index && "text-selected")
            }
            onClick={() => {
              if (!disabled)
                this.setState({
                  selectedAttribute: index,
                });
              if (setAttribute) setAttribute(index);
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
    const { attribute } = this.props;
    return (
      <div className="attribute-container">
        <p className="attribute-name">{attribute.name}:</p>
        <div className="attribute">{this.createSelector(attribute)}</div>
      </div>
    );
  }
}

export default Attribute;
