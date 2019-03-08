import React, { Component } from "react";
import Container from "./Container";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexContainer = styled(Container)`
  display: flex;
  padding-top: 40px;
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  left: 0;

  > * {
    flex: 1;
  }

  *:first-child {
    text-align: left;
  }
  *:last-child {
    text-align: right;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <FlexContainer>
        {this.props.leftContent}
        {this.props.rightContent}
      </FlexContainer>
    );
  }
}

Navbar.propTypes = {
  leftContent: PropTypes.element,
  rightContent: PropTypes.element
};

export default Navbar;

/*
  Logo
  Back-Button
  Close-Button
  
  
  About-Button
  Legal-Menu
  None
  */
