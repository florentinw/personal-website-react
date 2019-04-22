import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

import Label from "./Label";
import Subtitle from "./Subtitle";

const Wrapper = styled.article`
  background: ${p =>
    p.backgroundImage
      ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("${p.backgroundImage}") no-repeat
      center / cover`
      : p.theme.lowerContrast};

  border-radius: 6px;
  padding: calc(10px + 8%);
  margin: 24px 12px;
  cursor: pointer;
`;

class PortfolioItem extends Component {
  handleOnClick = () => {
    this.setState({ redirect: true });
  };
  state = {};

  render = () => {
    if (this.state.redirect) {
      return <Redirect push to={`project/${this.props.slug}`} />;
    }

    return (
      <Wrapper onClick={this.handleOnClick} backgroundImag={this.props.backgroundImage}>
        <Label>{this.props.name}</Label>
        <Subtitle>{this.props.headline}</Subtitle>
        <Label>{this.props.skills}</Label>
      </Wrapper>
    );
  };
}

PortfolioItem.propTypes = {
  client: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  slug: PropTypes.string.isRequired
};

export default PortfolioItem;
