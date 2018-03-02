import React, { Component } from "react";

import { toggleTodo } from "../../actions/actions";

export default class ListItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div>
        <li>{item.get("name")}</li>
        <button
          onClick={() => {
            this.props.deleteItem(item.get("id"));
          }}
        >
          x
        </button>
      </div>
    );
  }
}
