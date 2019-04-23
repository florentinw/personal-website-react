import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import GoBackButton from "../components/GoBackHomeButton";

class ErrorPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title="Error" />
        <Navbar leftContent={<GoBackButton>Back to home</GoBackButton>} />
        <Header content="Error" />
      </Fragment>
    );
  }
}

export default ErrorPage;
