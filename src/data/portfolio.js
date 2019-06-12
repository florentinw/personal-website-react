import React, { Fragment } from "react";

import HowToMusicProject from "../projects/HowToMusicProject";
import ShortTechProject from "../projects/ShortTechProject";
import OptikBluemelProject from "../projects/OptikBluemelProject";

import BodyText from "../components/BodyText";

export default {
  howtomusic: {
    name: "How To Music",
    client: "United Creators PMB GmbH",
    headline: "Designing physical campains for a digital product",
    skills: "Print Design",
    summary:
      'In the funk-produced YouTube series "How to Music", the audience accompanies six up-and-coming musicians who are breaking new ground in the music industry.',
    introduction: (
      <Fragment>
        <BodyText>
          How do you start a music career? How to Music accompany six young up-and-coming musicians on their hard way into the music
          industry. In addition to talent, songwriters must have many skills and work hard to be successful in the music industry in the
          long term.
        </BodyText>
        <BodyText>
          With hard training, practice and the most important tips and tricks for appearances, personality, performance, studio recordings
          and challenging challenges, the young artists learn week after week new skills to further advance their music careers bringing
          them closer to their big dream of a record deal.
        </BodyText>
        <BodyText>The next tough challenge is never far away!</BodyText>
      </Fragment>
    ),
    background: {
      type: "img",
      src: require("../assets/imgs/portfolio/howtomusic/cover/background.jpg")
    },
    addonImage: require("../assets/imgs/portfolio/howtomusic/poster2.jpg"),
    seoImage: require("../assets/imgs/portfolio/howtomusic/card.jpg"),
    component: <HowToMusicProject />
  },
  shorttech: {
    name: "ShortTech",
    client: "ShortTech",
    headline: "Rethinking how Gen Z interacts with tech news",
    skills: "Web Design & Branding",
    summary: "ShortTech truly simplifies the way young generations consume  consumer electronic media.",
    introduction: (
      <Fragment>
        <BodyText>
          ShortTech is a non-profit tech project built by a small team of young teenagers who love to engage with consumer electronics &amp;
          tech gadgets.
        </BodyText>
        <BodyText>
          Since mid 2017 they report on the newest innovations in the tech &amp; media world live on Twitter and on their blog. No matter if
          during weekdays or the weekends: ShortTech is always well informed about all topics and provides up-to-date news directly for you.
        </BodyText>
      </Fragment>
    ),
    background: {
      type: "gradient",
      from: "#7447BA",
      to: "#1DA6CB"
    },
    addonImage: require("../assets/imgs/portfolio/shorttech/cover/addon.jpg"),
    seoImage: require("../assets/imgs/portfolio/shorttech/card.jpg"),
    component: <ShortTechProject />
  },
  optikbluemel: {
    name: "Optik Blümel",
    client: "Blümel & Liebschwager GbR",
    headline: "Moving traditional companies into the digital age",
    skills: "Web Design & Development",
    summary: "Optik Blümel & Liebschwager combines great tradition and personal advice at expert level with modern, trendy looks.",
    introduction: (
      <Fragment>
        <BodyText>
          Since 1977 the shop "Augenoptik Uhren Schmuck" (Optics, Watches &amp; Jewelry) exists at the Bahnhofstrasse 19. Their small team
          attaches great importance to individual consultation, quality and timeless design. Personal connections and customer satisfaction
          guarantee are also a key element to their business.
        </BodyText>
        <BodyText>
          They feature a large selection of trendy spectacle frames in your visual acuity, color and personal style. No matter if for far,
          near or progressive vision, all sports or work - you are optimally equipped with Optik Blümel &amp; Liebschwager.
        </BodyText>
      </Fragment>
    ),
    background: {
      type: "img",
      src: require("../assets/imgs/portfolio/optikbluemel/cover/background.jpg"),
      to: "#3a3c42",
      from: "#222427"
    },
    addonImage: require("../assets/imgs/portfolio/optikbluemel/cover/addon.jpg"),
    seoImage: require("../assets/imgs/portfolio/optikbluemel/card.jpg"),
    component: <OptikBluemelProject />
  }
};
