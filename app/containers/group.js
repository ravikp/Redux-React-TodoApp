import {Component} from 'react';
import React from 'react';

import GroupHeader from '../components/groupheader'
import ProjectList from './projectlist'

let Group = props => (
  <group>
    <GroupHeader title={props.title} count={props.projects.length} />
    <ProjectList {...props} />
  </group>
)

export default Group;
