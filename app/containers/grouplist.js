import {Component} from 'react';
import React from 'react';

import Group from './group'
import status from '../constants/status'

export default class GroupList extends React.Component {
  constructor(props){
    super(props);
    this.filterByStatus = this.filterByStatus.bind(this);
  }
  filterByStatus(status) {
    let projects = this.props.store.getState().projects;
    return projects.filter(project => project.status === status);
  }

  render() {
    return (
      <group-list>
        <Group title="To do" projects={this.filterByStatus(status.INBACKLOG)} hasPrevious={false} hasNext={true} store={this.props.store} />
        <Group title="In Progress" projects={this.filterByStatus(status.INPROGRESS)} hasPrevious={true} hasNext={true} store={this.props.store} />
        <Group title="Done" projects={this.filterByStatus(status.DONE)} hasPrevious={true} hasNext={false} store={this.props.store} />
      </group-list>
    );
  }
}
