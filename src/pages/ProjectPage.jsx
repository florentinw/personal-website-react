import React, { Component, Fragment } from "react";

import SEO from "../components/SEO";
import Header from "../components/Header";
import GoBackHomeButton from "../components/GoBackHomeButton";
import Navbar from "../components/Navbar";
import PortfolioItemIntroduction from "../components/PortfolioItemIntroduction";

import portfolioData from "../data/portfolio.js";

class ProjectPage extends Component {
  render() {
    const currentProject = portfolioData[this.props.match.params.slug];
    return (
      <Fragment>
        <SEO title={currentProject.name} cover={currentProject.seoImage} />
        <Navbar leftContent={<GoBackHomeButton />} />
        <Header content={currentProject.summary} />
        <PortfolioItemIntroduction client={currentProject.client} skills={currentProject.skills}>
          {currentProject.introduction}
        </PortfolioItemIntroduction>
        {currentProject.component}
      </Fragment>
    );
  }
}

export default ProjectPage;
