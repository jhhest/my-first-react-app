import React, { Component } from "react";

export default class sectionElementIntro extends Component {
  render() {
    return (
      <div className="component-section-header">
        <div className="title-badge">
          <div className="title-badge-title">{this.props.titleBadge}</div>
        </div>
        <h2>
          <div className="component-title ">{this.props.componentTitle}</div>
        </h2>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}
