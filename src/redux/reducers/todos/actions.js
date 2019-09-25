export const REMOVE_TASK = 'REMOVE_TASK'
export const ADD_TASK = 'ADD_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const CHANGE_STATUS = 'CHANGE_STATUS'

export const removeTask = payload => {
  return {
    type: REMOVE_TASK,
    payload,
  }
}

export const addTask = payload => ({
  type: ADD_TASK,
  payload,
})

export const editTask = (id, payload) => ({
  type: EDIT_TASK,
  id,
  payload,
})

export const changeTaskStatus = payload => ({
  type: CHANGE_STATUS,
  payload,
})
