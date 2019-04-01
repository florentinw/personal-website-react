import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import GoBackHomeButton from "../components/GoBackHomeButton";
import Navbar from "../components/Navbar";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={this.props.match.params.slug} />
        <Navbar leftContent={<GoBackHomeButton />} />
        <Header content={"Project: " + this.props.match.params.slug} />
      </div>
    );
  }
}

export default ProjectPage;
