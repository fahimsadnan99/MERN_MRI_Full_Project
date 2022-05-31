import {
  ACTIVITY_RESULT_ERROR,
  ACTIVITY_RESULT_LOADING,
  ACTIVITY_RESULT_SUCCESS,
  CLEAR_ACTIVITY_RESULT,
} from "./actionTypes"

const initial_state = {
  activityResult: null,
  loading: false,
  err: null,
}

const ActivityResult = (state = initial_state, action) => {
  switch (action.type) {
    case ACTIVITY_RESULT_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ACTIVITY_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        activityResult: action.payload,
        err: null,
      }
    case ACTIVITY_RESULT_ERROR:
      return {
        ...state,
        loading: false,
        activityResult: null,
        err: action.payload,
      }
    case CLEAR_ACTIVITY_RESULT:
      return {
        ...state,
        loading: null,
        activityResult: null,
        err: null,
      }
    default:
      return state
  }
}

export default ActivityResult
