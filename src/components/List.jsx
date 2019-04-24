import React, { Component } from "react";
import styled from "styled-components";
import BodyText from "./BodyText";

const ListItemWrapper = styled.li`
  list-style-type: disc;
  list-style-position: inside;

  > p {
    display: inline;
  }
`;

const ListWrapper = styled.ul`
  margin: 1em 0;
`;

class ListItem extends Component {
  render = () => {
    return (
      <ListItemWrapper>
        <BodyText>{this.props.children}</BodyText>
      </ListItemWrapper>
    );
  };
}

class List extends Component {
  render = () => {
    return (
      <ListWrapper>
        {this.props.items.map((item, index) => {
          return <ListItem key={index}>{item}</ListItem>;
        })}
      </ListWrapper>
    );
  };
}

export default List;
