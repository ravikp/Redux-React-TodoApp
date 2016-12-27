import {Component} from 'react';
import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.previousElement = this.previousElement.bind(this);
    this.nextElement = this.nextElement.bind(this);
  }

  previousElement() {
    if(this.props.hasPrevious)
      return (<span onClick={this.props.onClickPrevious}>&#8592;</span>);
    return "";
  }

  nextElement() {
    if(this.props.hasNext)
      return (<span onClick={this.props.onClickNext}>&#8594;</span>);
    return "";
  }

  render() {
    return (
      <item>
        {this.previousElement()}
        <project-box>{this.props.name}</project-box>
        {this.nextElement()}
      </item>
    );
  }
}
