import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import Search from "../pages/Search";
import Saved from "../pages/Saved";

class BookLibraryContainer extends Component {
  state = {
    currentPage: "Search",
    search: "",
    results: [],
    book: {},
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  //add promise to load saved books from mongo
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  searchGooglebooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  handleInputChange = event => {

    // we can destructure this to save us a line
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogleBooks(this.state.search);
  };

  renderPage = () => {
    if (this.state.currentPage === "Search") {
      return <Search results={this.state.results} />;
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
            {/* {this.getBooks()} */}
            {this.renderPage()} 
        </div>
        
      </div>
    );
  }
}

export default BookLibraryContainer;
