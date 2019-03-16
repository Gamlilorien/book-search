import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#Search" onClick={() => props.handlePageChange("Search")} className="nav-link">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a href="#Saved" onClick={() => props.handlePageChange("Saved")} className="nav-link">
          Saved
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
