import React from "react";
import { navigation } from "../../config";
import Link from "../Link/link";
import Logo from "../Logo/logo";

import { Header } from "./style";

const nav = navigation.map(({ to, label, ...rest }) => (
  <Link key={label} to={to} {...rest} innerStyle={{ padding: "16px" }}>
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
