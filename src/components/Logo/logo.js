import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/image";

export default props => (
  <Link to="/">
    <Image alt="Homepage" src="/logo.png" width="160px" />
  </Link>
);
