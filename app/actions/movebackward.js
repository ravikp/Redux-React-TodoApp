import transition from '../constants/actiontypes'

export default function moveBackward(project) {
  let action = {
    type: transition.MOVE_TO_PREVIOUS_STATE,
    project: {
      id: project.id
    }
  };
  return action;
}
