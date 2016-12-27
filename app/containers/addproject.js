import {Component} from 'react';
import React from 'react';
import AddProject from '../components/addproject'
import TotalProjects from '../components/totalprojects'

let containerHeader = props => {
  let projects = props.store.getState().projects;
  return (
    <container-header>
      <AddProject store={props.store}/>
      <TotalProjects count={projects.length} />
    </container-header>
  );
}

export default containerHeader;
