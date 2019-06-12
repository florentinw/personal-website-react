import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SEO extends Component {
  render() {
    return (
      <Helmet title={this.props.title}>
        <meta property="og:image" content={this.props.cover || require("../assets/imgs/meta/card.jpg")} />
        <meta property="og:image:secure_url" content={this.props.cover || require("../assets/imgs/meta/card.jpg")} />
        <meta name="twitter:image" content={this.props.cover || require("../assets/imgs/meta/card.jpg")} />
      </Helmet>
    );
  }
}

export default SEO;
