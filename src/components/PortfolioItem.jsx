import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import Tilty from "react-tilty";

import Label from "./Label";
import Subtitle from "./Subtitle";

const AddonWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
`;

const AddonImage = styled.img`
  max-height: 80%;
  max-width: 80%;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  display: block;
`;

const Wrapper = styled.article`
  border-radius: 5px;
  padding: calc(20px + 8%) calc(14px + 8%);
  margin: 24px 12px;
  cursor: pointer;
  position: relative;
  background: ${p => {
    if (p.background.type === "img") {
      return `url("${p.background.src}") no-repeat center / cover`;
    } else if (p.background.type === "gradient") {
      return `linear-gradient(to top right,${p.background.from}, ${p.background.to})`;
    } else {
      return p.theme.lowerContrast;
    }
  }};

  * {
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
    color: white !important;
  }

  &.addon-postion-right {
    ${Subtitle} {
      max-width: 40%;
      min-width: 220px;
    }
    ${Label} {
      max-width: 55%;
    }
    ${AddonWrapper} {
      justify-content: flex-end;
      align-items: center;
      ${AddonImage} {
        max-width: 45%;
        margin-right: -3%;
      }
    }
  }

  &.addon-postion-bottom {
    ${Subtitle} {
      max-width: 80%;
      min-width: 220px;
    }
    ${AddonWrapper} {
      justify-content: center;
      align-items: flex-end;
      ${AddonImage} {
        max-height: 60%;
      }
    }
  }
  &.howtomusic {
    background: ${p => `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("${p.background.src}") no-repeat center / cover`};
  }
  &.shorttech {
    padding-bottom: 60%;
  }
  &.optikbluemel ${AddonImage} {
    max-width: 65% !important;
    margin-right: -20% !important;
  }

  @media screen and (max-width: 580px) {
    ${Subtitle} {
      width: 100%;
      hyphens: auto;
    }
    &.addon-postion-right {
      ${AddonWrapper} {
        justify-content: center;
        align-items: flex-end;
        ${AddonImage} {
          max-width: 80% !important;
          margin-bottom: -30%;
          margin-right: 0 !important;
        }
      }
    }
    &.howtomusic {
      padding-bottom: 90%;
    }
    &.optikbluemel {
      padding-bottom: 55%;
      ${AddonImage} {
        margin-bottom: 0% !important;
      }
    }
  }
`;

class PortfolioItem extends Component {
  state = {
    redirect: false
  };

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render = () => {
    if (this.state.redirect) {
      return <Redirect push to={`project/${this.props.slug}`} />;
    }

    return (
      <Tilty
        settings={{
          scale: 1.02,
          max: 6,
          speed: 1000
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Wrapper
          onClick={this.handleOnClick}
          background={this.props.background}
          className={[
            this.props.name
              .toLowerCase()
              .replace(/\s/g, "")
              .replace(/\u00fc/g, "ue"),
            `addon-postion-${this.props.addonPosition}`
          ].join(" ")}
        >
          <Label>{this.props.name}</Label>
          <Subtitle nopadding="true" style={{ lineHeight: 1.2 }}>
            {this.props.headline}
          </Subtitle>
          <Label>{this.props.skills}</Label>
          <AddonWrapper>
            <AddonImage src={this.props.addonImage} />
          </AddonWrapper>
        </Wrapper>
      </Tilty>
    );
  };
}

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  background: PropTypes.shape({
    type: PropTypes.string.isRequired,
    from: PropTypes.string,
    to: PropTypes.string,
    src: PropTypes.string
  }),
  addonImage: PropTypes.string,
  slug: PropTypes.string.isRequired
};

export default PortfolioItem;
