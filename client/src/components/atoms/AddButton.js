import React, { Component } from "react";
import { Button } from "reactstrap";

class AddButton extends Component {
  render() {
    const { addItem } = this.props;

    return (
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={addItem}>
        Add item
      </Button>
    );
  }
}

export default AddButton;
