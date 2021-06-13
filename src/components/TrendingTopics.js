import React from 'react';
import '../App.css';

var topics = ["1", "2", "3", "4", "5"];
const listTopics = topics.map((topic) =>
  <div class="bubble-container">{topic}</div>
);


class TrendingTopics extends React.Component {
  render(){
    return (
      <div class="section-container trending-topics">{listTopics}</div>
    );
  }
}

export default TrendingTopics;