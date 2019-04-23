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
    backgroundImage: "https://images.pexels.com/photos/1769408/pexels-photo-1769408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    component: HowToMusicProject,
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
    )
  },
  shorttech: {
    name: "ShortTech",
    client: "United Creators PMB GmbH",
    headline: "Rethinking how Gen Z interacts with tech news",
    skills: "web design & branding",
    backgroundImage: "https://images.pexels.com/photos/1769408/pexels-photo-1769408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    component: ShortTechProject
  },
  optikbluemel: {
    name: "Optik Blümel",
    client: "United Creators PMB GmbH",
    headline: "Moving traditional companies into the digital age",
    skills: "Web design & development",
    backgroundImage: "https://images.pexels.com/photos/1769408/pexels-photo-1769408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    component: OptikBluemelProject
  },
  other: {
    name: "Other",
    client: "United Creators PMB GmbH",
    headline: "Other Headline",
    skills: "Web design & development",
    backgroundImage: "https://images.pexels.com/photos/1769408/pexels-photo-1769408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    component: OtherProject
  }
};
