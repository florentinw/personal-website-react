import React from "react";

import HowToMusicProject from "../projects/HowToMusicProject";
import ShortTechProject from "../projects/ShortTechProject";
import OptikBluemelProject from "../projects/OptikBluemelProject";
import OtherProject from "../projects/OtherProject";

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
    summary: "Shorttech changes the way how young people interact with tech media",
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
      type: "gradient",
      from: "#1E7DA3",
      to: "#4F418F"
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
  },
  other: {
    name: "Other",
    client: "Someone AG",
    headline: "Other Headline",
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
      type: "gradient",
      from: "#555555",
      to: "#111111"
    },
    component: <OtherProject />
  }
};
