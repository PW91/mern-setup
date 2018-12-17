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
    this.props.addItem(this.state.name);
    this.toggleModal();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggleModal}
        >
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
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add item
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddItemModal;
