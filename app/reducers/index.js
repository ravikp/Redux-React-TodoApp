import transition from '../constants/actiontypes'
import status from '../constants/status'

function addProject(state, action){
    let newProject = {
      ...action.project,
      status: status.INBACKLOG
    }
    return {
      projects: state.projects.concat(newProject)
    };
}

function moveToBacklog(state, action, project){
  let projectId = action.project.id;
  let projects = state.projects.filter(project => project.id !== projectId).concat({
    ...project, status: status.INBACKLOG
  });
  return { projects };
}

function moveToInProgress(state, action, project){
  let projectId = action.project.id;
  let projects = state.projects.filter(project => project.id !== projectId).concat({
    ...project, status: status.INPROGRESS
  });
  return { projects };
}

function moveToDone(state, action, project){
  let projectId = action.project.id;
  let projects = state.projects.filter(project => project.id !== projectId).concat({
    ...project, status: status.DONE
  });
  return { projects };
}

let initialState = {
  projects: []
};

// There are several different ways to refactor this IFTTT code. I have taken the simple steps (not elegant)
// to demonstrate the redux-react capabilities. To know more about the refactoring, you can talk to me.

export default function reducer(state = initialState, action) {
  if(action.project === undefined)
    return state;

  let projectId = action.project.id;
  let project = state.projects.find(x => x.id === projectId);

  if(action.type === transition.ADD_TO_BACKLOG){
    return addProject(state, action);
  } else if(action.type === transition.MOVE_TO_NEXT_STATE && project.status === status.INBACKLOG){
    return moveToInProgress(state, action, project)
  } else if(action.type === transition.MOVE_TO_NEXT_STATE && project.status === status.INPROGRESS){
    return moveToDone(state, action, project)
  } else if(action.type === transition.MOVE_TO_PREVIOUS_STATE && project.status === status.DONE){
    return moveToInProgress(state, action, project)
  } else if(action.type === transition.MOVE_TO_PREVIOUS_STATE && project.status === status.INPROGRESS) {
    return moveToBacklog(state, action, project)
  } else {
    return state;
  }
}
