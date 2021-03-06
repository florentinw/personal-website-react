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
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/howtomusic/real1.jpg")}
            srcTiny={require("../assets/imgs/portfolio/howtomusic/real1-tiny.jpg")}
          />
          <SectionText label="The Campaign" title="All throughout Berlin">
            <BodyText>
              In order to initially promote the show, a poster campaign was initiated. The posters were hung up all over Berlin, where the
              show also takes place.
            </BodyText>
            <BodyText>
              I was commissioned to design the individual posters featuring all protagonists based on images provided by a photo-shooting
              earlier.
            </BodyText>
          </SectionText>
          <Gallery
            images={[
              {
                src: require("../assets/imgs/portfolio/howtomusic/poster1.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/poster1-tiny.jpg")
              },
              {
                src: require("../assets/imgs/portfolio/howtomusic/poster2.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/poster2-tiny.jpg")
              },
              {
                src: require("../assets/imgs/portfolio/howtomusic/poster3.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/poster3-tiny.jpg")
              }
            ]}
          />
          <Gallery
            images={[
              {
                src: require("../assets/imgs/portfolio/howtomusic/poster4.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/poster4-tiny.jpg")
              },
              {
                src: require("../assets/imgs/portfolio/howtomusic/poster5.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/poster5-tiny.jpg")
              },
              {
                src: require("../assets/imgs/portfolio/howtomusic/poster6.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/poster6-tiny.jpg")
              }
            ]}
          />
        </Section>
        <Section>
          <Gallery
            images={[require("../assets/imgs/portfolio/howtomusic/real2.jpg"), require("../assets/imgs/portfolio/howtomusic/real3.jpg")]}
          />
        </Section>
        <Section>
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/howtomusic/header.jpg")}
            srcTiny={require("../assets/imgs/portfolio/howtomusic/header-tiny.jpg")}
          />
          <SectionText label="Channel Designs" title="Present on all channels">
            <BodyText>
              I designed the complete channel design from banner &amp; profile picture to thumbnail template for all platforms. Working with
              funk branding guidelines gives all channels of the content network a professional and unified look.
            </BodyText>
          </SectionText>
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/howtomusic/yt.jpg")}
            srcTiny={require("../assets/imgs/portfolio/howtomusic/yt-tiny.jpg")}
          />
          <Gallery
            images={[
              {
                src: require("../assets/imgs/portfolio/howtomusic/thumbnail.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/thumbnail-tiny.jpg")
              },
              {
                src: require("../assets/imgs/portfolio/howtomusic/logo.jpg"),
                srcTiny: require("../assets/imgs/portfolio/howtomusic/logo-tiny.jpg")
              }
            ]}
          />
        </Section>
        <Section>
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/howtomusic/talents-overview.jpg")}
            srcTiny={require("../assets/imgs/portfolio/howtomusic/talents-overview-tiny.jpg")}
          />
          <SectionText label="The Talent Channels" title="More content for fans">
            <BodyText>
              On the individual protagonist's channels viewers have the chance to discover what's going on behind the scenes of How to Music
              and stay up to date with exciting vlogs week after week.
            </BodyText>
            <BodyText>Besides designing the main channel's look, I was also in charge of the individual channel designs.</BodyText>
          </SectionText>
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/howtomusic/talents-header.jpg")}
            srcTiny={require("../assets/imgs/portfolio/howtomusic/talents-header-tiny.jpg")}
          />
        </Section>
        <Section>
          <ImageWithContainer
            src={require("../assets/imgs/portfolio/howtomusic/funk.jpg")}
            srcTiny={require("../assets/imgs/portfolio/howtomusic/funk-tiny.jpg")}
          />
          <SectionText label="About funk" title="funk is content network">
            <BodyText>
              funk unites the online formats from ARD and ZDF, the public service broadcasting in Germany, focused on reaching a younger
              target audience between the age of 14 - 29. Their content is natively designed for third-party platforms such as YouTube,
              Facebook, Instagram, Snapchat and TikTok as well as on their own web app <Link to="http://funk.net/">funk.net</Link>.
            </BodyText>
            <BodyText>
              The content network, originally launched in October 2016, is a public service and is therefore financed by the radio
              contribution, which enables the creators to create content that is free of advertising and independent of financial and
              political influences.
            </BodyText>
            <BodyText>
              funk publishes entertaining, informative, critical and hopefully captivating videos on over 70 different channels.
            </BodyText>
          </SectionText>
        </Section>
      </Fragment>
    );
  }
}

export default HowToMusicProject;
