import { ADD_POP_UP_QUESTION } from "./actionTypes"

export const setPopUpQuestion = data => {
  return {
    type: ADD_POP_UP_QUESTION,
    payload: data,
  }
}
