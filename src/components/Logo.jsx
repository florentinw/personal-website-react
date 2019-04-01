import React, { Component } from "react";
import styled from "styled-components";

import { ReactComponent as LogoSVG } from "../assets/svg/logo.svg";

const LogoSVGFill = styled(LogoSVG)`
  fill: ${props => props.theme.higherContrast || "black"};
`;

class Logo extends Component {
  render() {
    return <LogoSVGFill style={{ height: 36 }} />;
  }
}

export default Logo;
