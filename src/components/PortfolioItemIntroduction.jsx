import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Label from "./Label";
import SubtitleSmall from "./SubtitleSmall";
import Container from "./Container";

const Wrapper = styled(Container)`
  display: flex;
  margin-top: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleColumn = styled.aside`
  flex: 2;
  margin-right: 20px;
  * {
    max-width: 245px;
  }
`;

const ContentColumn = styled.main`
  flex: 5;
`;

const InfoGroup = styled.div`
  margin-bottom: 40px;
`;

class PortfolioItemIntroduction extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <TitleColumn>
          <InfoGroup>
            <Label>Client</Label>
            <SubtitleSmall>{this.props.client}</SubtitleSmall>
          </InfoGroup>
          <InfoGroup>
            <Label>Skills</Label>
            <SubtitleSmall>{this.props.skills}</SubtitleSmall>
          </InfoGroup>
        </TitleColumn>
        <ContentColumn>{this.props.children}</ContentColumn>
      </Wrapper>
    );
  }
}

PortfolioItemIntroduction.propTypes = {
  client: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired
};

export default PortfolioItemIntroduction;
