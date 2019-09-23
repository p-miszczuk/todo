import { REMOVE_TASK, ADD_TASK } from '../data/data'

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Clean the car',
      timestamp: '01.10.2019',
      done: false,
      description: 'Clean the car asap',
      comments: 'asap',
      priority: 'high',
    },
    {
      id: 2,
      name: 'Shoes',
      timestamp: '02.10.2019',
      done: false,
      description: 'Buy Addidas or Nike',
      comments: 'sports type',
      priority: 'low',
    },
    {
      id: 3,
      name: 'Meeting',
      timestamp: '03.10.2019',
      done: false,
      description: 'Meeting with Anna and John',
      comments: 'Dance Club',
      priority: 'medium',
    },
  ],
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      }

    default:
      return state
  }
}

export default todos
