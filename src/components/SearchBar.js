import React from "react";

export default function SearchBar() {
  return (
    <div className="container">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded border-5 border-dark"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <div className="container text-center">
          <span
            className="input-group-text border-5 bg-success text-white btn border-success"
            id="search-addon"
          >
            <i className="fas fa-search"></i>
          </span>
          <span
            className="input-group-text border-5 bg-danger text-white btn border-danger"
            id="search-addon"
          >
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
