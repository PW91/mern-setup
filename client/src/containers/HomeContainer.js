import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container } from "reactstrap";
import propTypes from "prop-types";

import { itemsActions } from "../modules/items";
import AddItemModal from "../components/organisms/AddItemModal";
import ShoppingList from "../components/organisms/ShoppingList";
import LoadingAlert from "../components/atoms/LoadingAlert";
import ErrorAlert from "../components/atoms/ErrorAlert";

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
    const { items, loadingFlag, errorFlag, errorMsg } = this.props;

    return (
      <div className="container__wrap">
        <Container>
          <h1>Home</h1>
          <LoadingAlert loadingFlag={loadingFlag} />
          <ErrorAlert errorFlag={errorFlag} errorMsg={errorMsg} />
          <ShoppingList
            items={items}
            deleteItem={this.deleteItem}
            loadingFlag={loadingFlag}
          />
          <AddItemModal addItem={this.addItem} />
        </Container>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  items: propTypes.array.isRequired,
  loadingFlag: propTypes.bool.isRequired,
  errorFlag: propTypes.bool.isRequired,
  errorMsg: propTypes.string
};

const mapStateToProps = state => ({
  items: state.items.items,
  loadingFlag: state.items.loadingFlag,
  errorFlag: state.items.errorFlag,
  errorMsg: state.items.errorMsg
});

const mapDispatchToProps = dispatch => ({
  itemsActions: bindActionCreators(itemsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
