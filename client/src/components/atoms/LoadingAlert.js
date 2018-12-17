import React, { Component } from "react";
import { Alert } from "reactstrap";
import propTypes from "prop-types";

class LoadingAlert extends Component {
  render() {
    const { loadingFlag } = this.props;

    if (loadingFlag) {
      return <Alert color="light">Loading...</Alert>;
    } else {
      return <React.Fragment />;
    }
  }
}

LoadingAlert.propTypes = {
  loadingFlag: propTypes.bool.isRequired
};

export default LoadingAlert;
