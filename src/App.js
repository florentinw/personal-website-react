import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./assets/css/main.css";

//import Link from "./components/CustomLink";
import Translation from "./function/translation";

import Button from "./components/Button";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import LegalPage from "./pages/LegalPage";

import socialData from "./data/social";
import ErrorPage from "./pages/ErrorPage";

window.t = Translation.getPhrase;

class App extends Component {
  componentWillMount() {
    if (window.prefersDarkmode) {
      // force darkmode
      this.switchTheme("dark");
    } else {
      // set theme to previous state
      this.setState({ darkmode: localStorage.getItem("darkmode") ? true : false });
    }
  }

  switchTheme(nextTheme) {
    if (nextTheme === "dark" || !localStorage.getItem("darkmode")) {
      localStorage.setItem("darkmode", "activeted");
      this.setState({ darkmode: true });
    } else {
      localStorage.removeItem("darkmode");
      this.setState({ darkmode: false });
    }
  }

  componentDidMount() {
    window.globalRef = this;
  }

  render() {
    const colors = {
      black: "#111111",
      grayDark: "#777777",
      gray: "#CCCCCC",
      grayLight: "#E9E9E9",
      white: "#FFFFFF"
    };
    const themes = {
      light: {
        bodyTextColor: colors.grayDark,
        labelColor: colors.gray,
        headlineColor: colors.black,
        backgroundColor: colors.white,
        buttonTextColor: colors.white,
        buttonBackgroundColor: colors.black,
        staticColors: colors
      },
      dark: {
        bodyTextColor: colors.grayLight,
        labelColor: colors.grayDark,
        headlineColor: colors.white,
        backgroundColor: colors.black,
        buttonTextColor: colors.black,
        buttonBackgroundColor: colors.white,
        staticColors: colors
      }
    };

    let currentTheme = this.state.darkmode ? themes.dark : themes.light;
    document.body.style = "background-color: " + currentTheme.backgroundColor;

    return (
      <ThemeProvider theme={currentTheme}>
        <Router basename={window.basename}>
          <div>
            <header className="header">
              <div className="header-nav" />

              <div className="header-logo" />

              <div className="header-social">
                {socialData.map(s => (
                  <a key={s.name} href={s.name} title={s.name} target="_top">
                    <span className={s.name} />
                  </a>
                ))}
              </div>
            </header>
            {!window.pillMode && <div className="header-border" />}
            <main>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path="/project/:slug" component={ProjectPage} />
                <Route path="/legal" component={LegalPage} />
                <Route component={ErrorPage} />
              </Switch>
            </main>
            <footer style={{ textAlign: "center" }}>
              <Button onClick={() => this.switchTheme()}>Switch Theme</Button>
            </footer>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
