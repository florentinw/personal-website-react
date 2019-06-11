import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";
import Container from "./Container";

const StyledImage = styled(Image)`
  @media screen and (max-width: 768px) {
    height: 40vh;
    object-fit: cover;
    min-height: 60vh;
  }
`;

const StyledContainer = styled(Container)`
  max-width: 1150px;
  width: 95%;
  margin: 20px auto;
`;

class ImageWithContainer extends Component {
  render = () => {
    return (
      <StyledContainer>
        <StyledImage src={this.props.src} />
      </StyledContainer>
    );
  };
}

export default ImageWithContainer;
