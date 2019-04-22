import React, { Component } from "react";
import styled from "styled-components";

import CustomLink from "../components/CustomLink";
import ChevronBackIcon from "../components/icons/ChevronBackIcon";

const Wrapper = styled(CustomLink)`
  display: flex;
  align-items: center;
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
