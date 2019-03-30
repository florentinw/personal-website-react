import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Label from "./Label";
import Subtitle from "./Subtitle";

const Wrapper = styled.article`
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
    url("https://images.pexels.com/photos/1963478/pexels-photo-1963478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") no-repeat center /
      cover;
  border-radius: 6px;
  padding: 32px;
  margin: 6px;
  flex: 0 0 41%;
`;

class PortfolioItem extends Component {
  render() {
    return (
      <Wrapper>
        <Label>{this.props.client}</Label>
        <Subtitle>{this.props.headline}</Subtitle>
        <Label>{this.props.skills}</Label>
      </Wrapper>
    );
  }
}

PortfolioItem.propTypes = {
  client: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired
};

export default PortfolioItem;
