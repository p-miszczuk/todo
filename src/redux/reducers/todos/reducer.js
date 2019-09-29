import {
  REMOVE_TASK,
  ADD_TASK,
  EDIT_TASK,
  CHANGE_STATUS,
  REMOVE_DONE_TASK,
} from '../../reducers/todos/actions'

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Clean the car',
      timestamp: '01.10.2019',
      done: true,
      description: 'Clean the car asap',
      comments: [],
      priority: 'high',
    },
    {
      id: 2,
      name: 'Shoes',
      timestamp: '02.10.2019',
      done: false,
      description: 'Buy Addidas or Nike',
      comments: [],
      priority: 'low',
    },
    {
      id: 3,
      name: 'Meeting',
      timestamp: '03.10.2019',
      done: false,
      description: 'Meeting with Anna and John',
      comments: ['Dance Club', 'Big Ice'],
      priority: 'medium',
    },
  ],
  doneTasks: [],
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        doneTasks: state.doneTasks.concat(
          state.tasks.find(task => task.id === action.payload),
        ),
      }
    case REMOVE_DONE_TASK:
      return {
        ...state,
        doneTasks: state.doneTasks.filter(
          task => task.id !== action.payload,
        ),
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.id ? action.payload : task,
        ),
      }
    case CHANGE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, done: !task.done }
            : task,
        ),
      }

    default:
      return state
  }
}

export default todos
