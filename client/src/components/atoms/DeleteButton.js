import React, { Component } from "react";
import { Button } from "reactstrap";

class DeleteButton extends Component {
  render() {
    const { deleteItem, id } = this.props;

    return (
      <Button
        className="remove-btn"
        color="danger"
        size="sm"
        onClick={deleteItem.bind(null, id)}
      >
        {" "}
        &times;
      </Button>
    );
  }
}

export default DeleteButton;
