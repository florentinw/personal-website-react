import React, { Component, Fragment } from "react";
import SEO from "../components/SEO";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import GoBackButton from "../components/GoBackHomeButton";

class ErrorPage extends Component {
  render() {
    return (
      <Fragment>
        <SEO title="Error" description="An error has occurred" />
        <Navbar leftContent={<GoBackButton>Back to home</GoBackButton>} />
        <Header content="Error" />
      </Fragment>
    );
  }
}

export default ErrorPage;
