import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="container">
        <div className="row">
          <div className="col-10">
            <form id="search-form">
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                id="search-text-input"
              />
              <button type="submit" className="search-sign" id="search-text">
                Go!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
