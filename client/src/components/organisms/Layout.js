import React, { Component } from "react";
import MainHeader from "./MainHeader";
import MainNav from "./MainNav";
import MainFooter from "./MainFooter";

export default class Layout extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrap">
          <MainHeader />
          <MainNav />
          {this.props.children}
          <MainFooter />
        </div>
      </div>
    );
  }
}
