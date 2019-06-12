import React, { Component, Fragment } from "react";
import ImageWithContainer from "../components/ImageWithContainer";
import Section from "../components/Section";
import SectionText from "../components/SectionText";
import Image from "../components/Image";

class HowToMusicProject extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/optikbluemel/desktop.jpg")}
            srcTiny={require("../assets/imgs/portfolio/optikbluemel/desktop-tiny.jpg")}
          />
          <SectionText
            label="The Website"
            title="Modern, simple &amp; clear"
            text="They reached out to impart a professional and modern look to their dated website. For an independent content editing experience I utilized WordPress together with a custom theme."
          >
            <Image
              src={require("../assets/imgs/portfolio/optikbluemel/iphone.jpg")}
              srcTiny={require("../assets/imgs/portfolio/optikbluemel/iphone-tiny.jpg")}
            />
          </SectionText>
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/optikbluemel/screenshot.jpg")}
            srcTiny={require("../assets/imgs/portfolio/optikbluemel/screenshot-tiny.jpg")}
          />
        </Section>
      </Fragment>
    );
  }
}

export default HowToMusicProject;
