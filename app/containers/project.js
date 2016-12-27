import {Component} from 'react';
import React from 'react';

import transition from '../constants/actiontypes'
import moveForward from '../actions/moveForward'
import moveBackward from '../actions/moveBackward'
import Project from '../components/project'

export default class ProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePreviousState = this.handlePreviousState.bind(this);
    this.handleNextState = this.handleNextState.bind(this);
  }

  handleNextState(){
    let action = moveForward(this.props.project);
    this.props.store.dispatch(action);
  }

  handlePreviousState(){
    let action = moveBackward(this.props.project);
    this.props.store.dispatch(action);
  }

  render() {
    let properties = {
      name: this.props.project.name,
      onClickPrevious: this.handlePreviousState,
      onClickNext: this.handleNextState,
      hasPrevious: this.props.hasPrevious,
      hasNext: this.props.hasNext
    }
    return (
      <Project {...properties}/>
    );
  }
}
