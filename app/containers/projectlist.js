import {Component} from 'react';
import React from 'react';
import Project from './project'

let ProjectList = ({projects, store, hasPrevious, hasNext}) => (
  <items>
    {
      projects.map (
        project => (
          <Project
          key={project.id}
          store={store}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          project={project} />)
      )
    }
  </items>
);

export default ProjectList;
