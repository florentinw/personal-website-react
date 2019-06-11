import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Label from "./Label";
import Subtitle from "./Subtitle";
import Container from "./Container";
import BodyText from "./BodyText";

const Wrapper = styled(Container)`
  display: flex;
  margin: 80px auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleColumn = styled.div`
  flex: 2;
  margin-right: 20px;
  * {
    max-width: 245px;
  }
`;

const ContentColumn = styled.div`
  flex: 5;
`;

class TwoColumnsWithLabelTitleText extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <TitleColumn>
          <Label>{this.props.label}</Label>
          <Subtitle nopadding="true">{this.props.title}</Subtitle>
          <BodyText>{this.props.text}</BodyText>
        </TitleColumn>
        <ContentColumn>{this.props.children}</ContentColumn>
      </Wrapper>
    );
  }
}

TwoColumnsWithLabelTitleText.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default TwoColumnsWithLabelTitleText;
