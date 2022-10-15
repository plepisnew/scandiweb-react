import React from "react";
import { Link } from "react-router-dom";
import { GET_CATEGORIES } from "../../GraphQL/Queries";
import QueryHandler from "../../GraphQL/QueryHandler";

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "",
    };
  }

  createNavItems(categories) {
    const { selectedItem } = this.state;
    return categories.map((category) => {
      return (
        <div
          key={category.name}
          className={`nav-item ${
            selectedItem === category.name ? "selected" : ""
          }`}
        >
          <Link
            to={`/category/${category.name}`}
            className="nav-link"
            onClick={() => {
              this.setState({
                selectedItem: category.name,
              });
            }}
          >
            {category.name}
          </Link>
        </div>
      );
    });
  }

  render() {
    return QueryHandler({
      query: GET_CATEGORIES,
      loadedElement: (data) => (
        <div className="navigation">{this.createNavItems(data.categories)}</div>
      ),
    });
  }
}

export default Navigation;
