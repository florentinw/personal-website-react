import React, { Component, Fragment } from "react";

import BodyText from "../components/BodyText";
import Image from "../components/Image";
import Link from "../components/CustomLink";
import SectionText from "../components/SectionText";
import Section from "../components/Section";
import ImageWithContainer from "../components/ImageWithContainer";
import Gallery from "../components/Gallery";

class HowToMusicProject extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/shorttech/business-cards.jpg")} />
          <SectionText
            label="The Logo"
            title="s + t is short for ShortTech"
            text="The simple, yet clear letter mark endows the young brand with an unique look and high recognition value. It works for all form
            factors from small to big."
          >
            <Image src={require("../assets/imgs/portfolio/shorttech/logo-showcase.jpg")} />
          </SectionText>
        </Section>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/shorttech/twitter-app.jpg")} />
          <SectionText label="Why Twitter" title="Go where your community lives">
            <BodyText>
              Twitter connects 100 million daily-active users with over tweets sent each day. 37% of all these users are between the ages of
              18 and 29. And with{" "}
              <Link to="https://www.journalism.org/2017/09/07/news-use-across-social-media-platforms-2017">74% of twitter users</Link>{" "}
              stating to utilize the social network as their primary source for news it's the perfect platform for ShortTech.
            </BodyText>
            <BodyText>
              And their success can be measured: As they started out with their twitter account they quickly reached hundreds of followers.
            </BodyText>
          </SectionText>
        </Section>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/shorttech/website-perspective.jpg")} />
          <SectionText label="The Blog" title="In-depth reviews &amp; tutorials">
            <BodyText>
              They reached out to extend their twitter account with a blog. I chose ghost as the CMS of choice, which is particularly
              focused on blogging. The blog covers more in-depth reviews, tutorials and personal opinions on topic around tech &amp; media
              world.
            </BodyText>
            <BodyText>
              My job was to design &amp; develop a custom design for all pages. During my process I focused on colorful &amp; playful
              layouts delivering real emotions.
            </BodyText>
          </SectionText>
          <ImageWithContainer src={require("../assets/imgs/portfolio/shorttech/home.jpg")} />
        </Section>
        <Section>
          <ImageWithContainer src={require("../assets/imgs/portfolio/shorttech/alexa.jpg")} />
          <SectionText label="Alexa Flash Briefing Skill" title="Alexa, tell me the news">
            <BodyText>
              Together with the team from ShortTech we also developed a custom Alexa Skill, which directly integrates with the newest tweets
              &amp; blog posts. Just say "Alexa, tell me the news" and be always up to date!
            </BodyText>
            <BodyText>
              Customers discover and enable the skill in the Alexa app or through voice, the first time they listen to flash briefing.
            </BodyText>
          </SectionText>
        </Section>
        <Section>
          <Gallery
            images={[require("../assets/imgs/portfolio/shorttech/stickers.jpg"), require("../assets/imgs/portfolio/shorttech/tshirt.jpg")]}
          />
          <SectionText label="Materials for events" title="Being present">
            <BodyText>
              ShortTech also markets their self outside the online word. Being present on events gives them the opportunity to meet their
              fans and engage with the fast-growing community. Of course stickers &amp; merchandising play a major role.
            </BodyText>
          </SectionText>
        </Section>
      </Fragment>
    );
  }
}

export default HowToMusicProject;
