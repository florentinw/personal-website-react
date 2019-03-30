import React, { Component } from "react";
import styled from "styled-components";

import CustomLink from "../components/CustomLink";
import ChevronBackIcon from "../components/icons/ChevronBackIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

class GoBackButton extends Component {
  render() {
    return (
      <Wrapper>
        <ChevronBackIcon />
        <CustomLink to="/" noBorder>
          {this.props.children}
        </CustomLink>
      </Wrapper>
    );
  }
}

export default GoBackButton;
//
