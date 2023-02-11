import React from 'react';
import {Link} from 'react-router-dom';Link

export default function HeaderBar() {
  return (
    <nav className="navBar navBar-expand-lg navBar-light bg-light shadow-sm">
        <span className="navBar-brand mb-0 h1">Name List</span>
        <ul classNmae="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/namelist">
              Show Name List
            </Link>
          </li>
        </ul>
    </nav>
  );
}
