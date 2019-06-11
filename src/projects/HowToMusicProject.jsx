import React, { Component, Fragment } from "react";

import BodyText from "../components/BodyText";
import SectionText from "../components/SectionText";
import Gallery from "../components/Gallery";
import Link from "../components/CustomLink";
import Section from "../components/Section";
import ImageWithContainer from "../components/ImageWithContainer";

class HowToMusicProject extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/howtomusic/funk.jpg")} />
          <SectionText label="About funk" title="funk is content network">
            <BodyText>
              funk unites the online formats from ARD and ZDF, the public service broadcasting in Germany, focused on reaching a younger
              target audience between the age of 14 - 29. Their content is natively designed for third-party platforms such as YouTube,
              Facebook, Instagram, Snapchat and TikTok as well as on their own web app <Link to="http://funk.net/">funk.net</Link>.
            </BodyText>
            <BodyText>
              The content network originally launched in October 2016 is a public service and is therefore financed by the radio
              contribution, which enables the creators to create content that is free of advertising and independent of financial and
              political influences.
            </BodyText>
            <BodyText>
              funk publishes entertaining, informative, critical and hopefully captivating videos on over 70 different channels.
            </BodyText>
          </SectionText>
        </Section>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/howtomusic/real1.jpg")} />
          <SectionText label="The Campaign" title="Posters">
            <BodyText>Text</BodyText>
          </SectionText>
          <Gallery
            images={[
              require("../assets/imgs/portfolio/howtomusic/poster1.jpg"),
              require("../assets/imgs/portfolio/howtomusic/poster2.jpg"),
              require("../assets/imgs/portfolio/howtomusic/poster3.jpg")
            ]}
          />
        </Section>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/howtomusic/header2.jpg")} />
          <SectionText label="Channel Designs" title="Professionalism on point">
            <BodyText>
              I designed the complete channel design from Banner, profile Picture and Thumbnail Template for all platforms. Working with
              funk branding guidelines gives all channels of the content network "funk" a professional and unified look.
            </BodyText>
          </SectionText>
          <ImageWithContainer src={require("../assets/imgs/portfolio/howtomusic/yt.jpg")} />
          <Gallery
            images={[require("../assets/imgs/portfolio/howtomusic/thumbnail.jpg"), require("../assets/imgs/portfolio/howtomusic/logo.jpg")]}
          />
        </Section>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/howtomusic/talents-overview.jpg")} />
          <SectionText label="The Talent Channels" title="More content">
            <BodyText>
              <BodyText>
                On the individual channels of the main protagonists viewers have the chance to discover what's going on behind the scenes of
                How to Music on the hard way to a music career and stay up to date with exciting blogs week after week.
              </BodyText>
              <BodyText>Besides designing the main channel look, I was also in charge of the individual channel designs.</BodyText>
            </BodyText>
          </SectionText>
          <ImageWithContainer src={require("../assets/imgs/portfolio/howtomusic/talents-header.jpg")} />
        </Section>
      </Fragment>
    );
  }
}

export default HowToMusicProject;
