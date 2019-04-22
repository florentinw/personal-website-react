import React, { Component } from "react";
import styled from "styled-components";

import Container from "./Container";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio.js";

const MainWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
`;

const Wrapper = styled.div`
  display: block;
  flex: 1;
  margin-top: -24px;
  @media (max-width: 960px) {
    flex: 1 1 320px !important;
  }
`;

class PortfolioLayout extends Component {
  render = () => {
    return (
      <MainWrapper>
        <Wrapper style={{ flex: 7 }}>
          {Object.keys(portfolioData).map((slug, index) => {
            if (!(index & 1)) {
              return (
                <PortfolioItem
                  key={slug}
                  client={portfolioData[slug].client}
                  headline={portfolioData[slug].headline}
                  skills={portfolioData[slug].skills}
                  backgroundImage={portfolioData[slug].backgroundImage}
                  slug={slug}
                />
              );
            } else {
              return false;
            }
          })}
        </Wrapper>
        <Wrapper style={{ flex: 5 }}>
          {Object.keys(portfolioData).map((slug, index, array) => {
            if (index & 1) {
              return (
                <PortfolioItem
                  key={slug}
                  client={portfolioData[slug].client}
                  headline={portfolioData[slug].headline}
                  skills={portfolioData[slug].skills}
                  backgroundImage={portfolioData[slug].backgroundImage}
                  slug={slug}
                />
              );
            } else {
              return false;
            }
          })}
        </Wrapper>
      </MainWrapper>
    );
  };
}

export default PortfolioLayout;
