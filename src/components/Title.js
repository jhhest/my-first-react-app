import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
