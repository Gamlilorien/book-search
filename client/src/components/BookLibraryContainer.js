import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import SearchForm from "./SearchForm";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class BookLibraryContainer extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Search />;
    } else {
      return <Saved />
    } 
  }

   renderSearchForm = () => {
    if (this.state.currentPage === "Search") {
      return <SearchForm />;
    } else {
      // nothing
      }
   }

  render() {
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        
        <div className="container-fluid mTop"><Banner /></div>

        <div className="container">{this.renderSearchForm()}</div>
        <br />
        <div className="container">
            {this.renderPage()}
        </div>
        
      </div>
    );
  }
}

export default BookLibraryContainer;
