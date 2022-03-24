export const ACTION_NAMES = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  TOGGLE_CHANGE: 'TOGGLE_CHANGE'
}

export function addTask(text, priority) {
  return {
    type: ACTION_NAMES.ADD_TASK,
    text,
    priority
  }
}


export function deleteTask(id) {
  return {
    type: ACTION_NAMES.DELETE_TASK,
    id
  }
}

export function toggleChange(id) {
  return {
    type: ACTION_NAMES.TOGGLE_CHANGE,
    id
  }
}