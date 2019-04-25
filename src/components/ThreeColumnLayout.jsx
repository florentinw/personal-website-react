import React, { Component } from "react";
import Container from "./Container";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 40px 0;
  text-align: center;

  > *:not(:empty) {
    flex: 1;
  }

  > *:first-child {
    text-align: left;
  }
  > *:last-child {
    text-align: right;
  }
`;

class ThreeColumnLayout extends Component {
  render() {
    return (
      <FlexContainer className={this.props.className}>
        <div>{this.props.leftContent}</div>
        <div>{this.props.centerContent}</div>
        <div>{this.props.rightContent}</div>
      </FlexContainer>
    );
  }
}

ThreeColumnLayout.propTypes = {
  leftContent: PropTypes.element,
  centerContent: PropTypes.element,
  rightContent: PropTypes.element,
  className: PropTypes.string
};

export default ThreeColumnLayout;
