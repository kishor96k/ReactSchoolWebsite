import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg navbar-primary" style={{background:" #94b8b8"}}>
      <Link className="navbar-brand" to="/">UNIQUE ENGLISH MEDIUM SCHOOL</Link>
=======
    <nav className="navbar navbar-expand-lg navbar-primary mb-0" style={{background:" #94b8b8"}}>
      <Link className="navbar-brand" to="/">School Website</Link>
>>>>>>> a91b257215ab8179d1472c887fbde902006dd7b5
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registration">Registration</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
