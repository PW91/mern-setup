import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import DeleteButton from "../atoms/DeleteButton";

class ShoppingList extends Component {
  render() {
    const { items, deleteItem } = this.props;

    return (
      <ListGroup>
        <TransitionGroup>
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                {" "}
                <DeleteButton deleteItem={deleteItem} id={_id} />
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    );
  }
}

export default ShoppingList;
