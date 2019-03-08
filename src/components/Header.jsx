import React, { Component } from "react";
import PropTypes from "prop-types";

import Container from "./Container";
import Headline from "./Headline";

class Header extends Component {
  render() {
    return (
      <Container style={{ margin: "170px auto 100px auto" }}>
        <Headline>{this.props.text}</Headline>
      </Container>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
