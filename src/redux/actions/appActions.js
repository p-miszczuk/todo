import { REMOVE_TASK, ADD_TASK } from '../data/data'

export const removeTask = payload => {
  return {
    type: REMOVE_TASK,
    payload,
  }
}
