import React from "react";
// import Logo from "../assets/logo.svg";
import Logo from "../assets/Logo";
import "./Header.css"
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <Logo className="logo" fill="#FF6060"/>
      </Link>

      <nav className="header-nav">
        <NavLink className="nav-link" to="/">Accueil</NavLink>
        <NavLink className="nav-link" to="/about">A propos</NavLink>
      </nav>
      <Outlet />
    </header>
  );
}
