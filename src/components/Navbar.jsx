import React, { Component } from "react";
import Container from "./Container";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexContainer = styled(Container)`
  display: flex;
  padding-top: 40px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;

  > * {
    flex: 1;
  }

  > *:first-child {
    text-align: left;
  }
  > *:last-child {
    text-align: right;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <FlexContainer>
        <div>{this.props.leftContent}</div>
        <div>{this.props.rightContent}</div>
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
