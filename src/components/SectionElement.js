import React, { Component } from "react";

export default class HeaderElement extends Component {
  render() {
    return (
      <div className="section section-what-usp">
        {this.props.intro}
        {this.props.presentation}
      </div>
    );
  }
}
