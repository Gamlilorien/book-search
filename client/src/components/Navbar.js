import React from "react";

function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <p className="navbar-brand">Google Books</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#Search" onClick={() => props.handlePageChange("Search")}>Search <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Saved" onClick={() => props.handlePageChange("Saved")}>Saved</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
