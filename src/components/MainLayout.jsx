import React, { Component, Fragment } from "react";
import ColumnLayout from "./ColumnLayout";
import Label from "./Label";
import Subtitle from "./Subtitle";

class Layout extends Component {
  state = {};
  render() {
    return (
      <ColumnLayout
        titleRow={
          <Fragment>
            <Label>{this.props.label}</Label>
            <Subtitle>{this.props.title}</Subtitle>
          </Fragment>
        }
        contentRow={this.props.children}
      />
    );
  }
}

export default Layout;
