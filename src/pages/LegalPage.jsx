import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import SEO from "../components/SEO";

import Navbar from "../components/Navbar";
import InlineNavItem from "../components/InlineNavItem";
import GoBackHomeButton from "../components/GoBackHomeButton";

import ErrorPage from "../pages/ErrorPage";
import LegalDisclosurePage from "../pages/legal/LegalDisclosurePage";
import PrivacyPolicyPage from "../pages/legal/PrivacyPolicyPage";
import TermsAndConditionsPage from "../pages/legal/TermsAndConditionsPage";

class LegalPage extends Component {
  render() {
    return (
      <Fragment>
        <SEO title="Legal" description="Legal Pages for our Website" />
        <Navbar
          leftContent={<GoBackHomeButton />}
          rightContent={
            <nav>
              <ul>
                <InlineNavItem to={this.props.match.path}>Legal Disclosure</InlineNavItem>
                <InlineNavItem to={`${this.props.match.path}/privacypolicy`}>Privacy Policy</InlineNavItem>
                <InlineNavItem to={`${this.props.match.path}/termsandconditions`}>Terms &amp; Conditions</InlineNavItem>
              </ul>
            </nav>
          }
        />
        <Switch>
          <Route exact path={this.props.match.path} component={LegalDisclosurePage} />
          <Route path={`${this.props.match.path}/privacypolicy`} component={PrivacyPolicyPage} />
          <Route path={`${this.props.match.path}/termsandconditions`} component={TermsAndConditionsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Fragment>
    );
  }
}
export default LegalPage;
