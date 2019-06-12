import React, { Component, Fragment } from "react";

import SEO from "../components/SEO";
import Header from "../components/Header";
import SectionText from "../components/SectionText";
import BodyText from "../components/BodyText";
import GoBackHomeButton from "../components/GoBackHomeButton";
import Navbar from "../components/Navbar";
import CustomLink from "../components/CustomLink";
import Gallery from "../components/Gallery";

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <SEO
          title="About me"
          description="Hi there! I'm Florentin, a young digital product designer from Germany focused on creating digital products for humans."
          cover={require("../assets/imgs/about/card.jpg")}
        />
        <Navbar leftContent={<GoBackHomeButton>Back to my works</GoBackHomeButton>} />
        <Header
          content={`Hi there!\nI'm Florentin, a young digital product designer from Germany focused on creating digital products for humans.\n\nWith a focus on user interface, web and print design, I strive to create usable and polished products through passionate and deliberate design.`}
        />
        <SectionText label="My journey" title="I actually started out in Microsoft Word">
          <BodyText>
            I've always had a passion for design and art. My journey started out quite early in Microsoft Word, as a young kid and with a
            lot of WordArt. This way I discovered my fascination for visuals and compositions in general.
          </BodyText>
          <BodyText>
            With the creation of my design-related YouTube channel at the age of 13 and two years of continuous uploads, I found my way into
            the video game graphic design community. I also moved away from <CustomLink to="https://microsoft.com">PowerPoint</CustomLink>{" "}
            into the Photoshop World. Through my growing social media presence, I initially got my first few jobs mostly doing work for
            individuals in the social media world.
          </BodyText>
          <BodyText>
            Since then I’ve been expanding my skill set, began developing my knowledge, teaching myself how to code and eventually started
            my own business one year ago. It was at that time when I truly understood the value I was providing.
          </BodyText>
        </SectionText>
        <SectionText label="Now" title="Fast forward">
          <BodyText>
            Fast forward a few years and I'm now working as a freelance user experience and interface designer with various clients from the
            highly diverse economic sectors and I have started my own business to pursue the dream.
          </BodyText>
          <BodyText>
            Whilst being entirely self-taught, I have been previously working with great agencies like Wilkom or Berlin-based dopestudi0s
            which allows me to work with great brands and companies.
          </BodyText>
          <BodyText>
            When I am not pushing pixels, and besides being a student, you may find me trying out the hottest new design tools, shooting
            some sick photographs on Instagram – or oftentimes just snacking some delicious chocolate.
          </BodyText>
        </SectionText>
        <SectionText label="Expertise" title="My focus">
          <BodyText>
            I mainly focus on UI / UX, website design & development and print design – but I’m happy to work with you on whatever you think
            I’m capable of.
          </BodyText>
        </SectionText>
        <Gallery
          squared
          images={[
            {
              src: require("../assets/imgs/about/setup.jpg"),
              srcTiny: require("../assets/imgs/about/setup-tiny.jpg")
            },
            {
              src: require("../assets/imgs/about/work.jpg"),
              srcTiny: require("../assets/imgs/about/work-tiny.jpg")
            },
            {
              src: require("../assets/imgs/about/me.jpg"),
              srcTiny: require("../assets/imgs/about/me-tiny.jpg")
            }
          ]}
        />
      </Fragment>
    );
  }
}

export default AboutPage;
