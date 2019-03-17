import React from "react";

function SearchForm(props) {
  return (
    
    <form>
      <h3>Book Search</h3>
    <div className="form-group">
      <label htmlFor="search">Book</label>
      <div className="form-row">
        <div className="col">
          <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Book"
          id="search"
        />
        </div>
        <div className="col">
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
          </button>
        </div>
      </div>
      
    </div>
  </form>
  );
}

export default SearchForm;