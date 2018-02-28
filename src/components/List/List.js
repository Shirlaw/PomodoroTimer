import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  renderItems() {
    let { items } = this.props;

    return items.forEach(item => {
      console.log(item);
      <ListItem key={item.id} item={item} />;
    });
  }
  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}
