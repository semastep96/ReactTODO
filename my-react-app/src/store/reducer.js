import { ACTION_NAMES } from './actions'

const initialState = {
  id: 0,
  tasks: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ACTION_NAMES.ADD_TASK:
      return Object.assign({}, state, {
        id: state.id + 1,
        tasks: [...state.tasks, {
          id: state.id,
          text: action.text,
          priority: action.priority,
          checked: false
        }]
      })
    case ACTION_NAMES.DELETE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.filter(task => task.id !== action.id)
      })
    case ACTION_NAMES.TOGGLE_CHANGE:
      return Object.assign({}, state, {
        tasks: state.tasks.map(task => {
          if (task.id === action.id) {
            return Object.assign({}, task, {checked: !task.checked})
          }
          return task
        })
      })
    default:
      return state
  }
}

export default reducer