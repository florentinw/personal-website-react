import React, { Component } from "react";
import styled from "styled-components";

import Container from "./Container";
import PortfolioItem from "./PortfolioItem";

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

class PortfolioLayout extends Component {
  render() {
    return (
      <Wrapper>
        <PortfolioItem
          client="How To Music"
          headline="Designing physical campains for a digital product"
          skills="print design"
          backgroundImage="https://images.pexels.com/photos/1769408/pexels-photo-1769408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          page="/dab"
        />
        <PortfolioItem
          client="ShortTech"
          headline="Rethinking how Gen Z interacts with tech news"
          skills="web design & branding"
          backgroundImage="https://images.pexels.com/photos/1769408/pexels-photo-1769408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          page="/dab"
        />
        <PortfolioItem
          client="Optik Blümel"
          headline="Moving traditional companies into the digital age"
          skills="Web design & development"
          backgroundImage="https://images.pexels.com/photos/1769408/pexels-photo-1769408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          page="/dab"
        />
      </Wrapper>
    );
  }
}

export default PortfolioLayout;
