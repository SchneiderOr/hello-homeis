import React from "react";

import { navigation } from "../../config";

import Logo from "../Logo/logo";

import { Link, Header } from "./style";

const nav = navigation.map(({ to, label, ...rest }) => (
  <Link key={label} to={to} {...rest}>
    {label}
  </Link>
));

export default props => (
  <Header>
    <div>
      <Logo />
    </div>
    <nav>{nav}</nav>
  </Header>
);
