import React, { Component, Fragment } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CustomLink from "../components/CustomLink";
import Logo from "../components/Logo";
import PortfolioLayout from "../components/PortfolioLayout";
import SocialMediaFooter from "../components/SocialMediaFooter";
import SEO from "../components/SEO";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <SEO cover={require("../assets/imgs/meta/card-preview.jpg")} />
        <Navbar leftContent={<Logo />} rightContent={<CustomLink to="/about">about</CustomLink>} />
        <Header
          content={`Self-taught, 16-year-old digital product designer and dark chocolate enthusiast focused on creating experiences & beautiful products.`}
        />
        <PortfolioLayout />
        <SocialMediaFooter />
      </Fragment>
    );
  }
}

export default HomePage;
