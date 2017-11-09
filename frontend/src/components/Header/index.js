import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const location = window.location.pathname;
  return (
    <header className="mb-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Readable</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={`nav-item ${location === '/' && 'active'}`}>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className={`nav-item ${location.includes('/add') && 'active'}`}>
                <Link className="nav-link" to="/add">Add post</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
