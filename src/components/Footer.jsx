import React, { Component } from "react";

import Button from "./Button";

class Footer extends Component {
  render() {
    return (
      <footer style={{ textAlign: "center", margin: "50px 0" }}>
        <Button onClick={() => this.props.changeThemeFunction()}>Switch Theme</Button>
      </footer>
    );
  }
}

export default Footer;
