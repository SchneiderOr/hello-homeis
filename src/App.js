import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./components/molecules/Header/header";

import "./App.css";

import guides from "./containers/Gudies/guides";
import posts from "./containers/Post/post";


class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    console.log(this.props.loadGuides);
    this.props.loadGuides();
    this.props.loadPost();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default posts(guides(App));
