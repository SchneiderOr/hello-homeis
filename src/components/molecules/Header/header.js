import React, { Component } from "react";
import Link from "../../atoms/Link/link";
import Logo from "../../atoms/Logo/logo";
import "./header.css";
const navigation = [
  {
    to: "/about",
    label: "About"
  },
  {
    to: "/contact",
    label: "Contact"
  },
  {
    to: "/blog",
    label: "Blog"
  }
];

export default class Header extends Component {
  render() {
    const nav = navigation.map(link => (
      <Link key={link.caption} to={link.to}>
        {link.label}
      </Link>
    ));
    return (
      <header className="container">
        <div className="logo">
          <Logo />
        </div>
        <nav className="nav">{nav}</nav>
      </header>
    );
  }
}
