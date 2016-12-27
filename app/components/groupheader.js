import {Component} from 'react';
import React from 'react';
import ProjectsCount from './projectscount'

let GroupHeader = props => (
  <group-header>
    <title>{props.title}</title>
    <ProjectsCount count={props.count} />
  </group-header>
);

export default GroupHeader;
