import React, { Component, Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import ReactPiwik from "react-piwik";
import { createBrowserHistory } from "history";

import "./assets/css/main.css";

import Translation from "./function/translation";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import LegalPage from "./pages/LegalPage";
import ErrorPage from "./pages/ErrorPage";

import Button from "./components/Button";
import CustomLink from "./components/CustomLink";
import SmallText from "./components/SmallText";
import Footer from "./components/Footer";

import portfolioData from "./data/portfolio";

window.t = Translation.getPhrase;

class App extends Component {
  constructor(props) {
    super(props);

    this.history = createBrowserHistory();

    this.matomoInstance = new ReactPiwik({
      url: "analytics.florentinwalter.de",
      siteId: 3
    });
  }

  componentWillMount = () => {
    if (window.prefersDarkmode) {
      this.setState({ theme: "dark" });
    } else if (localStorage.getItem("theme") === "dark") {
      this.setState({ theme: "dark" });
    } else if (localStorage.getItem("theme") === "light") {
      this.setState({ theme: "light" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  handleSwitchThemeButton = () => {
    const wantedTheme = this.state.theme === "dark" ? "light" : "dark";
    this.setState({ theme: wantedTheme });
    localStorage.setItem("theme", wantedTheme);
  };

  render = () => {
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

    let currentTheme = themes[this.state.theme];
    document.body.style = "background-color: " + currentTheme.background;

    return (
      <ThemeProvider theme={currentTheme}>
        <Router history={this.matomoInstance.connectToHistory(this.history)}>
          <Fragment>
            <Helmet defaultTitle="Florentin | Freelance Graphic Designer" titleTemplate="%s | Florentin" />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route path={`/project/:slug(${Object.keys(portfolioData).join("|")})`} component={ProjectPage} />
              <Route path="/legal" component={LegalPage} />
              <Route component={ErrorPage} />
            </Switch>
            <Footer
              style={{ marginBottom: "100px" }}
              leftContent={<SmallText>2015 - ∞</SmallText>}
              centerContent={<Button onClick={() => this.handleSwitchThemeButton()}>Switch Theme</Button>}
              rightContent={<CustomLink to="/legal">Legal</CustomLink>}
            />
          </Fragment>
        </Router>
      </ThemeProvider>
    );
  };
}

export default App;
