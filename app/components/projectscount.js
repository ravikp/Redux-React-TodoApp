import {Component} from 'react';
import React from 'react';

let ProjectsCount = props => (
  <total-projects>
    <count>{props.count}</count>
    <span className="projects-label">PROJECTS</span>
  </total-projects>
);

export default ProjectsCount
