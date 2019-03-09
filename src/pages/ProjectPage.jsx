import React, { Component } from "react";
import Header from "../components/Header";

class ProjectPage extends Component {
  render() {
    return <Header content={"Project: " + this.props.slug} />;
  }
}

export default ProjectPage;
