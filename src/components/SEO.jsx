import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SEO extends Component {
  render() {
    const defaultTitle = "Florentin | Freelance Graphic Designer";
    const description =
      this.props.description ||
      "Self-taught, 16-year-old digital product designer and dark chocolate enthusiast focused on creating experiences & beautiful products.";
    const cover = this.props.cover || require("../assets/imgs/meta/card.jpg");
    const title = this.props.title || defaultTitle;

    return (
      <Helmet
        defaultTitle={defaultTitle}
        titleTemplate="%s | Florentin"
        title={this.props.title}
        link={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: require("../assets/imgs/meta/apple-touch-icon.png")
          },
          {
            rel: "mask-icon",
            href: require("../assets/imgs/meta/safari-pinned-tab.svg"),
            color: "#222222"
          }
        ]}
        meta={[
          {
            name: "apple-mobile-web-app-title",
            content: "Florentin"
          },
          {
            name: "theme-color",
            content: "#eeeeeee"
          },
          {
            name: "msapplication-TileColor",
            content: "#222222"
          },
          {
            name: "application-name",
            content: "Florentin"
          },
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
