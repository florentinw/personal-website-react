import React, { Component, Fragment } from "react";

import SEO from "../../components/SEO";
import Header from "../../components/Header";
import BodyText from "../../components/BodyText";
import Highlight from "../../components/Highlight";
import Container from "../../components/Container";

class LegalDisclosurePage extends Component {
  render() {
    return (
      <Fragment>
        <SEO title="Legal Disclosure" />
        <Header content="Provider identification pursuant to §5 of the TMG" />
        <Container>
          <BodyText>
            <Highlight>Florentin Walter</Highlight>
            <br />
            Breslauerstraße 12 · 63927 Bürgstadt · Germany
          </BodyText>
          <BodyText>
            <Highlight>Mail:</Highlight> hello@florentin.design <br />
            <Highlight>Phone:</Highlight> 0174 8860123
          </BodyText>
        </Container>
      </Fragment>
    );
  }
}

export default LegalDisclosurePage;
