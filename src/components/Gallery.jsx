import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";
import Container from "./Container";

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: calc(80px - 12px) auto;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1 0 300px;
  margin: 12px 12px;
  position: relative;
  &:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
class Gallery extends Component {
  render = () => {
    return (
      <Wrapper>
        {this.props.images.map((source, index) => {
          return (
            <Item>
              <Image src={source} key={index} />
            </Item>
          );
        })}
      </Wrapper>
    );
  };
}

export default Gallery;
//
