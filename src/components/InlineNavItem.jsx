import React, { Component } from "react";
import styled from "styled-components";

import CustomNavLink from "../components/CustomNavLink";

const Wrapper = styled.li`
  display: inline;
  margin-left: 15px;

  @media screen and (max-width: 425px) {
    display: block;
    line-height: 1.6;
    margin: 6px 0;
  }
`;

class InlineNavItem extends Component {
  render() {
    return (
      <Wrapper>
        <CustomNavLink exact to={this.props.to} activeclass="active">
          {this.props.children}
        </CustomNavLink>
      </Wrapper>
    );
  }
}

export default InlineNavItem;
