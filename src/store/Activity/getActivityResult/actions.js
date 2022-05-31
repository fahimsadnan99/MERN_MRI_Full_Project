import { baseUrl } from "./../../../App"
import {
  ACTIVITY_RESULT_ERROR,
  ACTIVITY_RESULT_LOADING,
  ACTIVITY_RESULT_SUCCESS,
  CLEAR_ACTIVITY_RESULT,
} from "./actionTypes"

export const getActivityResultSuccess = data => {
  return {
    type: ACTIVITY_RESULT_SUCCESS,
    payload: data,
  }
}
export const getActivityResultLoading = () => {
  return {
    type: ACTIVITY_RESULT_LOADING,
  }
}
export const getActivityResultError = data => {
  return {
    type: ACTIVITY_RESULT_ERROR,
    payload: data,
  }
}
export const clearActivityResult = () => {
  return {
    type: CLEAR_ACTIVITY_RESULT,
  }
}

export const fetchActivityResult =
  (activityid, studentid) => async dispatch => {
    dispatch(getActivityResultLoading())

    try {
      const response = await fetch(`${baseUrl}/activity-result`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          activityid: activityid,
          studentid: studentid,
        },
      })
      const data = await response.json()

      dispatch(getActivityResultSuccess(data))
      console.log(data)
    } catch (error) {
      dispatch(getActivityResultError(error))
      console.log(error)
    }
  }
