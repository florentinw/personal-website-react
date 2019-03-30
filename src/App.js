import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import "./assets/css/main.css";

//import Link from "./components/CustomLink";
import Translation from "./function/translation";

// import Button from "./components/Button";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import LegalPage from "./pages/LegalPage";
import ErrorPage from "./pages/ErrorPage";

//import socialData from "./data/social";

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
        labelColor: colors.grayDark,
        headlineColor: colors.black,
        backgroundColor: colors.white,
        buttonTextColor: colors.white,
        buttonBackgroundColor: colors.black,
        iconColor: colors.black,
        linkColor: colors.black,
        linkBorderColor: colors.grayLight,
        staticColors: colors
      },
      dark: {
        bodyTextColor: colors.gray,
        labelColor: colors.grayDark,
        headlineColor: colors.white,
        backgroundColor: colors.black,
        buttonTextColor: colors.black,
        buttonBackgroundColor: colors.white,
        iconColor: colors.white,
        linkColor: colors.white,
        linkBorderColor: colors.grayDark,
        staticColors: colors
      }
    };

    let currentTheme = this.state.darkmode ? themes.dark : themes.light;
    document.body.style = "background-color: " + currentTheme.backgroundColor;

    return (
      <div>
        <Helmet defaultTitle="Florentin | Freelance Graphic Designer" titleTemplate="%s | Florentin" />
        <ThemeProvider theme={currentTheme}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route path="/project/:slug" component={ProjectPage} />
              <Route path="/legal" component={LegalPage} />
              <Route component={ErrorPage} />
            </Switch>
            {/*socialData.map(s => (
              <a key={s.name} href={s.name} title={s.name} target="_top">
                <span className={s.name} />
              </a>
            ))

            
            */}
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
