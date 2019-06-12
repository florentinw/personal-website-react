import React, { Component } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;
const TinyImage = styled(StyledImage)`
  transform: scale(${p => (p.highQualityLoaded ? "1" : "1.1")});
  filter: blur(${p => (p.highQualityLoaded ? "0px" : "50px")});
  transition: all 1.5s ease-in-out;
`;
const TinyWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px;
  position: relative;
`;

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: this.props.srcTiny,
      loadCounter: 0
    };
  }
  render() {
    if (this.props.srcTiny) {
      return (
        <TinyWrapper>
          <TinyImage
            {...this.props}
            src={this.state.imgSrc}
            highQualityLoaded={this.state.loadCounter === 2 ? true : false}
            onLoad={() => {
              this.setState((prevState, props) => ({
                loadCounter: prevState.loadCounter + 1,
                imgSrc: this.props.src
              }));
            }}
          />
        </TinyWrapper>
      );
    } else {
      return <StyledImage {...this.props} />;
    }
  }
}

export default Image;
