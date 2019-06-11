import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "./Container";
import Label from "./Label";
import Subtitle from "./Subtitle";
import BodyText from "./BodyText";

const Wrapper = styled(Container)`
  display: flex;
  margin: 80px auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleColumn = styled.header`
  flex: 2;
  margin-right: 20px;
  * {
    max-width: 245px;
  }
`;

const ContentColumn = styled.main`
  flex: 5;
`;

class SectionText extends Component {
  render() {
    return (
      <Wrapper>
        <TitleColumn>
          {this.props.label ? <Label>{this.props.label}</Label> : void 0}
          {this.props.title ? <Subtitle nopadding="true">{this.props.title}</Subtitle> : void 0}
          {this.props.text ? <BodyText>{this.props.text}</BodyText> : void 0}
        </TitleColumn>
        <ContentColumn>{this.props.children}</ContentColumn>
      </Wrapper>
    );
  }
}
SectionText.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default SectionText;
