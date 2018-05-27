import React, { Component } from "react";
import { Link } from "react-router-dom";

const logo = "https://static.wixstatic.com/media/2879e1_a34a3c0bf5ee4c3bb7bea153aad14b69~mv2.png/v1/fill/w_292,h_72,al_c,usm_0.66_1.00_0.01/2879e1_a34a3c0bf5ee4c3bb7bea153aad14b69~mv2.png"

export default props => (
  <Link to="/">
    <img src={logo} />
  </Link>
);
