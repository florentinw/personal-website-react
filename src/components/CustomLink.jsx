import React from "react";
import { Link } from "react-router-dom";

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}

/**
 * Scrollt to top when clicked on Link
 */
class CustomLink extends React.Component {
  componentWillMount() {
    this.id = "CustomLink-" + guid();
  }

  componentDidMount() {
    document.getElementById(this.id).addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    return (
      <Link {...this.props} id={this.id}>
        {this.props.children}
      </Link>
    );
  }
}

export default CustomLink;
