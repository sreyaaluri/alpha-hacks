import React from 'react';
import '../App.css';


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchPhrase: this.props.searchPhrase };
    this.handleNewSearch = this.handleNewSearch.bind(this);
  }
  
  // add function to handle state change from app?

  // mySubmitHandler = (event) => {
  //   event.preventDefault();
  //   var inputVal = document.getElementById("searchInput1").value;
  //   this.setState({searchPhrase: inputVal});
  //   alert("You are submitting " + inputVal);
  // }
  // // myChangeHandler = (event) => {
  //   this.setState({username: event.target.value});
  // }
  render() {
    var searchPhrase = this.state.searchPhrase;
    return (
      <div>
        <h3>Hello {searchPhrase}</h3>
      </div>
    );
  }
}

export default SearchResults;
