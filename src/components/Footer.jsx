import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer style={{ textAlign: "center" }}>
        <Button onClick={() => this.switchTheme()}>Switch Theme</Button>
      </footer>
    );
  }
}

export default Footer;
