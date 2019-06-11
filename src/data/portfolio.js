import React from "react";

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
      <div>
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
      </div>
    ),
    background: {
      type: "img",
      src: require("../assets/imgs/portfolio/howtomusic/cover/background.jpg")
    },
    addonImage: require("../assets/imgs/portfolio/howtomusic/poster2.jpg"),
    component: <HowToMusicProject />
  },
  shorttech: {
    name: "ShortTech",
    client: "ShortTech",
    headline: "Rethinking how Gen Z interacts with tech news",
    skills: "Web Design & Branding",
    summary: "ShortTech truly simplifies the way young generations consume  consumer electronic media.",
    introduction: (
      <div>
        <BodyText>
          ShortTech is a non-profit tech project built by a small team of young teenagers who love to engage with consumer electronics &amp;
          tech gadgets.
        </BodyText>
        <BodyText>
          Since mid 2017 they report on the newest innovations in the tech &amp; media world live on Twitter and on their blog. No matter if
          during weekdays or the weekends: ShortTech is always well informed about all topics and provides up-to-date news directly for you.
        </BodyText>
      </div>
    ),
    background: {
      type: "gradient",
      from: "#7447BA",
      to: "#1DA6CB",
      introImage: require("../assets/imgs/portfolio/shorttech/business-cards.jpg")
    },
    addonImage: require("../assets/imgs/portfolio/shorttech/cover/addon.jpg"),
    component: <ShortTechProject />
  },
  optikbluemel: {
    name: "Optik Blümel",
    client: "Blümel & Liebschwager GbR",
    headline: "Moving traditional companies into the digital age",
    skills: "Web Design & Development",
    summary:
      'In the funk-produced YouTube series "How to Music", the audience accompanies six up-and-coming musicians who are breaking new ground in the music industry.',
    introduction: (
      <div>
        <BodyText>
          In the funk-produced YouTube series "How to Music", the audience accompanies six up-and-coming musicians who are breaking new
          ground in the music industry.
        </BodyText>
        <BodyText>
          How to Music coaches and supports the musicians with tips, tricks and workshops to bring them closer to their big dream of a
          record deal!
        </BodyText>
      </div>
    ),
    background: {
      type: "img",
      src: require("../assets/imgs/portfolio/optikbluemel/cover/background.jpg")
    },
    addonImage: require("../assets/imgs/portfolio/optikbluemel/cover/addon.jpg"),
    component: <OptikBluemelProject />
  }
};
