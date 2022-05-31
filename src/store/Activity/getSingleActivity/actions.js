import { baseUrl } from "./../../../App"
import { clearActivityResult } from "./../getActivityResult/actions"
import {
  SINGLE_ACTIVITY_ERROR,
  SINGLE_ACTIVITY_LOADING,
  SINGLE_ACTIVITY_SUCCESS,
} from "./actionTypes"

export const getSingleActivitySuccess = data => {
  return {
    type: SINGLE_ACTIVITY_SUCCESS,
    payload: data,
  }
}
export const getSingleActivityloading = () => {
  return {
    type: SINGLE_ACTIVITY_LOADING,
  }
}
export const getSingleActivityError = data => {
  return {
    type: SINGLE_ACTIVITY_ERROR,
    payload: data,
  }
}

export const fetchSingleActivity = id => async dispatch => {
  dispatch(getSingleActivityloading())
  dispatch(clearActivityResult())

  try {
    const response = await fetch(`${baseUrl}/view-activity`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        activityId: id,
      },
    })
    const data = await response.json()

    dispatch(getSingleActivitySuccess(data.Activity[0]))
  } catch (error) {
    console.log(error.message)
    dispatch(getSingleActivityError(error))
  }

  // axios
  //   .post(baseUrl + "/list-activity")
  //   .then(res => dispatch(getAllActivitySuccess(res.data)))
  //   .catch(err => dispatch(getAllActivityError(err)))
}
