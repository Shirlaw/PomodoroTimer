import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  renderItem(item) {
    let { deleteItem } = this.props;

    return <ListItem key={item.id} item={item} deleteItem={deleteItem} />;
  }
  render() {
    let { items } = this.props;
    return <ul>{this.props.items.map(item => this.renderItem(item))}</ul>;
  }
}
