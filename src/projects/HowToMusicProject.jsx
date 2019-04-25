import React, { Component, Fragment } from "react";
import BodyText from "../components/BodyText";
import LabelSubtitleParagraphLayout from "../components/LabelSubtitleParagraphLayout";
import Gallery from "../components/Gallery";

class HowToMusicProject extends Component {
  render() {
    return (
      <Fragment>
        <LabelSubtitleParagraphLayout label="The Lorem" title="Lorem ipsum dolor sit amet">
          <BodyText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </BodyText>
          <BodyText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </BodyText>
        </LabelSubtitleParagraphLayout>
        <Gallery
          images={[
            require("../assets/imgs/portfolio/howtomusic/poster1.jpg"),
            require("../assets/imgs/portfolio/howtomusic/poster2.jpg"),
            require("../assets/imgs/portfolio/howtomusic/poster3.jpg")
          ]}
        />
      </Fragment>
    );
  }
}

export default HowToMusicProject;
