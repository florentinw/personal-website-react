import React, { Component } from "react";

import { ReactComponent as LogoSVG } from "../assets/svg/logo.svg";

class Logo extends Component {
  render() {
    return <LogoSVG style={{ height: 36 }} />;
  }
}

export default Logo;
