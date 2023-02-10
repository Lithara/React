import React from 'react'

export default function HeaderBar() {
  return (
    <nav className="navBar navBar-expand-lg navBar-light bg-light shadow-sm">
        <span className="navBar-brand mb-0 h1">Name List</span>
        <ul classNmae="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Show Name List
            </a>
          </li>
        </ul>
    </nav>
  );
}
