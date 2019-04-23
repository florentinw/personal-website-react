import React, { Component } from "react";
import styled from "styled-components";

import CustomNavLink from "../components/CustomNavLink";

const Wrapper = styled.li`
  display: inline;
  margin-left: 15px;
`;

class InlineNavItem extends Component {
  render() {
    return (
      <Wrapper>
        <CustomNavLink exact to={this.props.to} activeClass="active">
          {this.props.children}
        </CustomNavLink>
      </Wrapper>
    );
  }
}

export default InlineNavItem;
