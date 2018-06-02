import React from "react";
import { navigation } from "../../config";
import Link from "../Link/link";
import Logo from "../Logo/logo";
import "./header.css";

const nav = navigation.map(({ to, label, ...rest }) => (
  <Link key={label} to={to} {...rest}>
    {label}
  </Link>
));

export default props => (
  <header className="container">
    <div className="logo">
      <Logo />
    </div>
    <nav className="nav">{nav}</nav>
  </header>
);
