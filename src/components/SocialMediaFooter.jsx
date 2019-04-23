import React, { Component } from "react";
import styled from "styled-components";

import Subtitle from "./Subtitle";
import Container from "./Container";
import CustomLink from "./CustomLink";

const Wrapper = styled(Container)`
  margin: 100px auto;
`;

class SocialMediaFooter extends Component {
  render() {
    return (
      <Wrapper>
        <Subtitle>
          Find out about what I’m currently working on over at{" "}
          <CustomLink color="#ff73c5" to="https://dribbble.com/florentin">
            Dribbble
          </CustomLink>
          , like some of my awesome tweets on{" "}
          <CustomLink color="#1da1f2" to="https://twitter.com/florentin">
            Twitter
          </CustomLink>{" "}
          or shoot me an{" "}
          <CustomLink color="#ffcd65" to="mailto:hello@florentin.design?Subject=Hello">
            Email
          </CustomLink>
          .
        </Subtitle>
        <Subtitle>– I’d love to hear from you!</Subtitle>
      </Wrapper>
    );
  }
}

export default SocialMediaFooter;
