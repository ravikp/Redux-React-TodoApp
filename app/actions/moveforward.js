import transition from '../constants/actiontypes'

export default function moveForward(project) {
  let action = {
    type: transition.MOVE_TO_NEXT_STATE,
    project: {
      id: project.id
    }
  };
  return action;
}
