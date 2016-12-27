import transition from '../constants/actiontypes'

//action creators
export default function createProject(projectName) {
  return {
    type: transition.ADD_TO_BACKLOG,
    project: {
      id: Date.now(),
      name: projectName
    }    
  };
}
