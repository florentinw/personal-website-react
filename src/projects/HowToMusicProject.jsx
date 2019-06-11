import React, { Component, Fragment } from "react";
import BodyText from "../components/BodyText";
import TwoColumnsWithLabelTitleText from "../components/TwoColumnsWithLabelTitleText";
import Gallery from "../components/Gallery";
import ImageWithContainer from "../components/ImageWithContainer";
import Link from "../components/CustomLink";

class HowToMusicProject extends Component {
  render() {
    return (
      <Fragment>
        <ImageWithContainer src={require("../assets/imgs/portfolio/howtomusic/funk.jpg")} />
        <TwoColumnsWithLabelTitleText label="About funk" title="funk is content network">
          <BodyText>
            funk unites the online formats from ARD and ZDF, the public service broadcasting in Germany, focused on reaching a younger
            target audience between the age of 14 - 29. Their content is natively designed for third-party platforms such as YouTube,
            Facebook, Instagram, Snapchat and TikTok as well as on their own web app <Link to="http://funk.net/">funk.net</Link>.
          </BodyText>
          <BodyText>
            The content network originally launched in October 2016 is a public service and is therefore financed by the radio contribution,
            which enables the creators to create content that is free of advertising and independent of financial and political influences.
          </BodyText>
          <BodyText>
            funk publishes entertaining, informative, critical and hopefully captivating videos on over 70 different channels.
          </BodyText>
        </TwoColumnsWithLabelTitleText>
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
