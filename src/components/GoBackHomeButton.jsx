import React, { Component } from "react";
import styled from "styled-components";

import CustomLink from "./CustomLink";
import ChevronBackIcon from "./icons/ChevronBackIcon";

const Wrapper = styled(CustomLink)`
  display: flex;
  align-items: center;
  line-height: 1.3;

  svg {
    margin-right: 10px;
  }
`;

class GoBackButton extends Component {
  render() {
    return (
      <Wrapper to="/" noborder="true">
        <ChevronBackIcon />
        {this.props.children}
      </Wrapper>
    );
  }
}

export default GoBackButton;
//
