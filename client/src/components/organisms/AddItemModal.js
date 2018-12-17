import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import propTypes from "prop-types";

class AddItemModal extends Component {
  state = {
    modalOpenFlag: false,
    name: ""
  };

  toggleModal = () => {
    this.setState({
      modalOpenFlag: !this.state.modalOpenFlag
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const { addItem } = this.props;
    addItem(this.state.name);
    this.toggleModal();
  };

  render() {
    return (
      <div className="add-button__wrap">
        <Button color="dark" onClick={this.toggleModal}>
          Add item
        </Button>
        <Modal isOpen={this.state.modalOpenFlag} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <Label for="item" />
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add item"
                  onChange={this.onInputChange}
                />
              </FormGroup>
              <Button color="dark" block>
                Add item
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

AddItemModal.propTypes = {
  addItem: propTypes.func.isRequired
};

export default AddItemModal;
