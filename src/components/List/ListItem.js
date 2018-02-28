import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    let { item } = this.props;
    return <li>{item.name}</li>;
  }
}
