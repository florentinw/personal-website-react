import React, { Component } from "react";
import PropTypes from "prop-types";

import Container from "./Container";
import Headline from "./Headline";

class Header extends Component {
  render() {
    return (
      <Container style={{ margin: "180px auto 100px auto" }}>
        <Headline>{this.props.content}</Headline>
      </Container>
    );
  }
}

Header.propTypes = {
  content: PropTypes.string.isRequired
};

export default Header;
