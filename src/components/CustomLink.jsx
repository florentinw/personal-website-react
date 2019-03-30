import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import isExternal from "is-url-external";

const InternalLink = styled(Link)`
  color: ${props => props.theme.linkColor || "black"};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  padding: ${props => (props.noBorder ? `0px` : `0 2px 0.15em 2px`)};
  border-bottom: ${props => (props.noBorder ? `none` : `0.15em solid ${props.theme.linkBorderColor || "gray"}`)};
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.linkColor || "black"};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  padding: ${props => (props.noBorder ? `0px` : `0 2px 0.15em 2px`)};
  border-bottom: ${props => (props.noBorder ? `none` : `0.15em solid ${props.theme.linkBorderColor || "gray"}`)};
`;

class CustomLink extends React.Component {
  render() {
    return isExternal(this.props.to) ? (
      // eslint-disable-next-line
      <ExternalLink target="_blank" href={this.props.to} {...this.props} />
    ) : (
      <InternalLink {...this.props} onClick={window.scrollTo(0, 0)}>
        {this.props.children}
      </InternalLink>
    );
  }
}

export default CustomLink;
