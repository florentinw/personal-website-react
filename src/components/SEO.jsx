import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SEO extends Component {
  render() {
    const defaultTitle = "Florentin | Freelance Graphic Designer";
    const description =
      this.props.description ||
      "I'm Florentin, a designer based in a small town in Germany. I love designing logos, developing websites and creating posters.";
    const cover = this.props.cover || require("../assets/imgs/meta/card.jpg");
    const title = this.props.title || defaultTitle;

    return (
      <Helmet
        defaultTitle={defaultTitle}
        titleTemplate="%s | Florentin"
        title={this.props.title}
        meta={[
          {
            name: "description",
            content: description
          },
          {
            property: "og:url",
            content: window.location.href
          },
          {
            property: "og:type",
            content: "website"
          },
          {
            property: "og:locale",
            content: "en_US"
          },
          {
            property: "og:site_name",
            content: "florentin.design"
          },
          {
            property: "og:title",
            content: title
          },
          {
            property: "og:description",
            content: description
          },
          {
            property: "og:image",
            content: cover
          },
          {
            name: "twitter:site",
            content: "@florentin"
          },
          {
            name: "twitter:creator",
            content: "@florentin"
          },
          {
            name: "twitter:title",
            content: title
          },
          {
            name: "twitter:description",
            content: description
          },
          {
            name: "twitter:image",
            content: cover
          },
          {
            name: "twitter:card",
            content: "summary_large_image"
          }
        ]}
      />
    );
  }
}

export default SEO;
