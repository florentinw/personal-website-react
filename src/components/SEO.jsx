import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SEO extends Component {
  render() {
    const description =
      this.props.description ||
      "I'm Florentin, a designer based in a small town in Germany. I love designing logos, developing websites and creating posters.";
    const cover = this.props.cover || require("../assets/imgs/meta/card.jpg");
    const title = this.props.title;

    return (
      <Helmet
        title={this.props.title}
        meta={[
          {
            name: "description",
            content: description
          },
          {
            name: "twitter:description",
            content: description
          },
          {
            name: "og:description",
            content: description
          },
          {
            name: "twitter:image",
            content: cover
          },
          {
            name: "og:image:secure_url",
            content: cover
          },
          {
            name: "og:image",
            content: cover
          },
          {
            name: "og:url",
            content: "https://florentin.design"
          },
          {
            name: "og:type",
            content: "website"
          },
          {
            name: "og:locale",
            content: "en_US"
          },
          {
            name: "og:site_name",
            content: "florentin.design"
          },
          {
            name: "og:title",
            content: title
          },
          {
            name: "twitter:card",
            content: "summary_large_image"
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
          }
        ]}
      />
    );
  }
}

export default SEO;
