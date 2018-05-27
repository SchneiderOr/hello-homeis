import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import "./link.css";
export default class Link extends Component {
  render() {
    return <RouterLink className="link" {...this.props} />;
  }
}
