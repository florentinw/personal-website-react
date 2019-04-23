import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

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
        <Helmet title={currentProject.name} />
        <Navbar leftContent={<GoBackHomeButton />} />
        <Header content={currentProject.summary} />
        <PortfolioItemIntroduction client={currentProject.client} skills={currentProject.skills}>
          {currentProject.introduction}
        </PortfolioItemIntroduction>
        <img
          alt={currentProject.name}
          src={currentProject.backgroundImage}
          style={{ width: "100%", objectFit: "cover", maxHeight: "60vh" }}
        />
        {currentProject.component}
      </Fragment>
    );
  }
}

export default ProjectPage;
