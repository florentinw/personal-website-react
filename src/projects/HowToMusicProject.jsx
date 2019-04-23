import React, { Component } from "react";
import BodyText from "../components/BodyText";
import LabelSubtitleParagraphLayout from "../components/LabelSubtitleParagraphLayout";

class HowToMusicProject extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default HowToMusicProject;
