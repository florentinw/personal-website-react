import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import "./assets/css/main.css";

//import Link from "./components/CustomLink";
import Translation from "./function/translation";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import LegalPage from "./pages/LegalPage";
import ErrorPage from "./pages/ErrorPage";

import Footer from "./components/Footer";

import portfolioData from "./data/portfolio";

window.t = Translation.getPhrase;

class App extends Component {
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

  componentDidMount = () => {
    window.globalRef = this;
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
      <div>
        <Helmet defaultTitle="Florentin | Freelance Graphic Designer" titleTemplate="%s | Florentin" />
        <ThemeProvider theme={currentTheme}>
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path={`/project/:slug(${Object.keys(portfolioData).join("|")})`} component={ProjectPage} />
                <Route path="/legal" component={LegalPage} />
                <Route component={ErrorPage} />
              </Switch>
            </Router>

            <Footer changeThemeFunction={this.handleSwitchThemeButton} />
          </div>
        </ThemeProvider>
      </div>
    );
  };
}

export default App;
