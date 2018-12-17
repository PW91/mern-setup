import React, { Component } from "react";
import { Button } from "reactstrap";
import propTypes from "prop-types";

class DeleteButton extends Component {
  render() {
    const { deleteItem, id } = this.props;

    return (
      <Button
        className="delete-button"
        color="danger"
        size="sm"
        onClick={deleteItem.bind(null, id)}
      >
        &times;
      </Button>
    );
  }
}

DeleteButton.propTypes = {
  deleteItem: propTypes.func.isRequired,
  id: propTypes.string.isRequired
};

export default DeleteButton;
