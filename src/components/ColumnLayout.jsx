import React, { Component } from "react";
import Container from "./Container";
import PropTypes from "prop-types";

import styled from "styled-components";

const FlexContainer = styled(Container)`
  display: flex;
  margin: 80px auto;
`;
const FlexColumn = styled.div`
  flex: ${props => props.ratio};
`;

class ColumnLayout extends Component {
  render() {
    return (
      <FlexContainer>
        <FlexColumn ratio={1}>{this.props.titleRow}</FlexColumn>
        <FlexColumn ratio={2}>{this.props.contentRow}</FlexColumn>
      </FlexContainer>
    );
  }
}

ColumnLayout.propTypes = {
  titleRow: PropTypes.element
};

export default ColumnLayout;
