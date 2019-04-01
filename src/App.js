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
