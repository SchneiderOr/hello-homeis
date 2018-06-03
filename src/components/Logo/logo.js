import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/image";

const Logo = props => (
  <Link to="/">
    <Image
      alt="Homepage"
      src="/logo.png"
      width={props.width}
      height={props.height}
    />
  </Link>
);
Logo.defaultProps = {
  width: "160px",
  height: "auto"
};
export default Logo;
