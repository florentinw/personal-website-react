import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import GoBackHomeButton from "../components/GoBackHomeButton";
import Navbar from "../components/Navbar";
import PortfolioItemIntroduction from "../components/PortfolioItemIntroduction";

import portfolioData from "../data/portfolio.js";

class ProjectPage extends Component {
  render() {
    const currentProject = portfolioData[this.props.match.params.slug];
    console.log(currentProject);
    return (
      <div>
        <Helmet title={currentProject.name} />
        <Navbar leftContent={<GoBackHomeButton />} />
        <div>
          <Header content={currentProject.summary} />
          <PortfolioItemIntroduction client={currentProject.client} skills={currentProject.skills}>
            {currentProject.introduction}
          </PortfolioItemIntroduction>
          <img
            alt={currentProject.name}
            src={currentProject.backgroundImage}
            style={{ width: "100%", objectFit: "cover", maxHeight: "60vh" }}
          />
        </div>

        {currentProject.component}
      </div>
    );
  }
}

export default ProjectPage;
