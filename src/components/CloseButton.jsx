import React, { Component } from "react";
import styled from "styled-components";

import CustomLink from "./CustomLink";
import CloseIcon from "./icons/CloseIcon";

const Wrapper = styled(CustomLink)`
  display: flex;
  align-items: center;
`;

class GoBackButton extends Component {
  render() {
    return (
      <Wrapper to="/" noborder="true">
        <CloseIcon />
        {this.props.children}
      </Wrapper>
    );
  }
}

export default GoBackButton;
