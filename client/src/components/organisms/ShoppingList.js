import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ListGroup } from "reactstrap";
import propTypes from "prop-types";

import ShoppingItem from "../atoms/ShoppingItem";

class ShoppingList extends Component {
  render() {
    const { items, deleteItem, loadingFlag } = this.props;

    if (items.length || loadingFlag) {
      return (
        <ListGroup>
          <TransitionGroup>
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ShoppingItem id={_id} deleteItem={deleteItem} name={name} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      );
    } else {
      return <h3>No items.</h3>;
    }
  }
}

ShoppingItem.propTypes = {
  loadingFlag: propTypes.bool,
  items: propTypes.array,
  deleteItem: propTypes.func.isRequired
};

export default ShoppingList;
