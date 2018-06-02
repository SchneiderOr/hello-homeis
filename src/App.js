import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header/header";
import "./App.css";

class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
