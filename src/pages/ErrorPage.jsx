import React, { Component, Fragment } from "react";
import SEO from "../components/SEO";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import GoBackButton from "../components/GoBackHomeButton";

class ErrorPage extends Component {
  render() {
    return (
      <Fragment>
        <SEO title="Looks like you're lost.." description="Sorry, but the page you are looking for does not exist." />
        <Navbar leftContent={<GoBackButton />} />
        <Header content={`Looks like you're lost..\n Sorry, but the page you are looking for does not exist.`} />
      </Fragment>
    );
  }
}

export default ErrorPage;
