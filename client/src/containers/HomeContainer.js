import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from "reactstrap";

import propTypes from "prop-types";

import { itemsActions } from "../modules/items";
import AddItemModal from "../components/organisms/AddItemModal";
import ShoppingList from "../components/organisms/ShoppingList";

class HomeContainer extends Component {
  componentDidMount() {
    const { items } = this.props;

    if (!items.length) {
      this.props.itemsActions.watchGettingItems();
    }
  }

  addItem = item => {
    this.props.itemsActions.watchPostingItem(item);
  };

  deleteItem = id => {
    this.props.itemsActions.watchDeletingItem(id);
  };

  render() {
    const { items } = this.props;

    return (
      <Container>
        <AddItemModal addItem={this.addItem} />
        <ShoppingList items={items} deleteItem={this.deleteItem} />
      </Container>
    );
  }
}

HomeContainer.propTypes = {
  items: propTypes.array.isRequired
};

const mapStateToProps = state => ({
  items: state.items.items
});

const mapDispatchToProps = dispatch => ({
  itemsActions: bindActionCreators(itemsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
