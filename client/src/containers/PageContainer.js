import React, { Component } from "react";
import { Container } from "reactstrap";

class PageContainer extends Component {
  render() {
    return (
      <div className="container__wrap">
        <Container>
          <h1>Page</h1>
        </Container>
      </div>
    );
  }
}

export default PageContainer;
