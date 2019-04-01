import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

class ThemeWrapper extends Component {
  state = { state: false };

  switchTheme(nextTheme) {
    if (nextTheme === "dark" || !localStorage.getItem("darkmode")) {
      localStorage.setItem("darkmode", "activeted");
      this.setState({ darkmode: true });
    } else {
      localStorage.removeItem("darkmode");
      this.setState({ darkmode: false });
    }
  }

  componentWillMount() {
    if (window.prefersDarkmode) {
      // force darkmode
      this.switchTheme("dark");
    } else {
      // set theme to previous state
      this.setState({ darkmode: localStorage.getItem("darkmode") ? true : false });
    }
  }

  render() {
    const themes = {
      light: {
        background: "#FFFFFF",
        lowerContrast: "#E9E9E9",
        lowContrast: "#aaaaaa",
        mediumContrast: "#888888",
        highContrast: "#333333",
        higherContrast: "#111111"
      },
      dark: {
        background: "#111111",
        lowerContrast: "#333333",
        lowContrast: "#888888",
        mediumContrast: "#aaaaaa",
        highContrast: "#E9E9E9",
        higherContrast: "#FFFFFF"
      }
    };

    let currentTheme = this.state.darkmode ? themes.dark : themes.light;
    document.body.style = "background-color: " + currentTheme.background;
    return <ThemeProvider theme={currentTheme}>{this.props.children}</ThemeProvider>;
  }
}

export default ThemeWrapper;
