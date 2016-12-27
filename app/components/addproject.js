import {Component} from 'react';
import React from 'react';

import status from '../constants/status'
import createProject from '../actions/createProject'

export default class AddProject extends React.Component {
  constructor(props){
    super(props);
    this.state = this.getDefaultState();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  getDefaultState() {
    return {
      projectname: ''
    };
  }

  onSubmit(e){
    if(e.keyCode == 13 && e.target.value !== undefined){
      let createProjectAction = createProject(e.target.value);
      this.props.store.dispatch(createProjectAction);
      this.setState(this.getDefaultState());
    }
  }

  onChange(e) {
    this.setState({projectname: e.target.value});
  }

  render() {
    return (
      <add-project-container>
        <label>add project</label>
        <input onChange={this.onChange} onKeyDown={this.onSubmit} value={this.state.projectname} />
      </add-project-container>
    );
  }
}
