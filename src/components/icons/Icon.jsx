import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

class Icon extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width || 30}
        height={this.props.height || 30}
        viewBox="0 0 24 24"
        fill="none"
        stroke={this.props.strokeColor || this.props.theme.iconColor}
        strokeWidth={this.props.strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "inline" }}
      >
        {this.props.children}
      </svg>
    );
  }
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.string
};

export default withTheme(Icon);
