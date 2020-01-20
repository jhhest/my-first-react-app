import React, { Component } from "react";

export default class Presentation extends Component {
  render() {
    return (
      <div className="component-usp-row">
        <div className="item team">
          <img
            className="image"
            src={this.props.imgSrcLeft}
            alt="learn together in groups"
          />
          <div className="component-title title">{this.props.textLeft}</div>
        </div>
        <div className="item team">
          <img
            className="image"
            src={this.props.imgSrcMiddle}
            alt="learn together in groups"
          />
          <div className="component-title title">{this.props.textMiddle}</div>
        </div>
        <div className="item team">
          <img
            className="image"
            src={this.props.imgSrcRight}
            alt="learn together in groups"
          />
          <div className="component-title title">
            <div className="description">{this.props.textRight}</div>
          </div>
        </div>
      </div>
    );
  }
}
