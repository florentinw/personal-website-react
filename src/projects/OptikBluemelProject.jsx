import React, { Component, Fragment } from "react";
import ImageWithContainer from "../components/ImageWithContainer";
import Section from "../components/Section";

class HowToMusicProject extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/optikbluemel/screenshot.jpg")} />
        </Section>
      </Fragment>
    );
  }
}

export default HowToMusicProject;
