import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";
import Container from "./Container";

const StyledImage = styled(Image)`
  margin: 20px 0;
`;

class ImageWithContainer extends Component {
  render = () => {
    return (
      <Container>
        <StyledImage src={this.props.src} />
      </Container>
    );
  };
}

export default ImageWithContainer;
