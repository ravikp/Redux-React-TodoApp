import {Component} from 'react';
import React from 'react';
import ProjectsCount from './projectscount';

let TotalProjects = props => (
  <total-projects-container>
    <span>TOTAL</span>
    <ProjectsCount count = {props.count} />
  </total-projects-container>
);

export default TotalProjects;
