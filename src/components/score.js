import React, { Component } from "react";

class Score extends Component {
  render() {
    let scoreColor;
    if (this.props.score > 80) scoreColor = "high-score";
    else if (this.props.score > 50) scoreColor = "medium-score";
    else 
    scoreColor='low-score'

    return <div className={scoreColor}>{this.props.score}</div>;
  }
}
export default Score;
