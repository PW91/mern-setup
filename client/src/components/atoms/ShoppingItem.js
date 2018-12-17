import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";
import propTypes from "prop-types";

import DeleteButton from "./DeleteButton";

class ShoppingItem extends Component {
  render() {
    const { deleteItem, id, name } = this.props;
    return (
      <ListGroupItem>
        <DeleteButton deleteItem={deleteItem} id={id} />
        {name}
      </ListGroupItem>
    );
  }
}

ShoppingItem.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  deleteItem: propTypes.func.isRequired
};

export default ShoppingItem;
