import React, { Component } from "react";
import styled from "styled-components";

import Image from "./Image";
import Container from "./Container";

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  max-width: 1174px;
  width: 95%;
  margin: 8px auto;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1 0 300px;
  margin: 12px 12px;
  position: relative;
  ${p =>
    p.squared
      ? `&:before {
    content: "";
    float: left;
    padding-top: 100%;
  }`
      : void 0}
  img {
    position: ${p => (p.squared ? "absolute;" : "relative")};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
class Gallery extends Component {
  render = () => {
    return (
      <Wrapper>
        {this.props.images.map((item, index) => {
          return (
            <Item key={index} squared={this.props.squared}>
              {typeof item === "object" ? <Image src={item.src} srcTiny={item.srcTiny} /> : <Image src={item} />}
            </Item>
          );
        })}
      </Wrapper>
    );
  };
}

export default Gallery;
