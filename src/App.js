import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import TrendingTopics from './components/TrendingTopics';
import SearchResults from './components/SearchResults';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { searchPhrase: ''};
    this.handleNewSearch = this.handleNewSearch.bind(this);
  }

  handleNewSearch(_State){
    console.log(_State);
    this.setState()
  }

  render(){
    return(
        <div className="App container">
        <SearchBar />
        <TrendingTopics />
        {/* <SearchResults /> */}
        </div>
    );
  }
}
