const initialState = {
  list: [
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

const todoAppReducer = (state = initialState, actions) => {
  return state
}

export default todoAppReducer
