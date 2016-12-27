import {Component} from 'react';
import React from 'react';
import '../css/body.less';

import AddProject from './addproject'
import GroupList from './grouplist'

export default class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.store.getState();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.store.subscribe(this.handleChange);
  }

  handleChange() {
    this.setState(this.props.store.getState())
  }

  render(){
    let projects = this.state.projects;
    return (
      <container>
        <AddProject store={this.props.store} />
        <GroupList store={this.props.store} />
      </container>
    );
  }
}
