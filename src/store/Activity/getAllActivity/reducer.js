import { ACTIVITY_SUCCESS,ACTIVITY_LOADING ,ACTIVITY_ERROR} from "./actionTypes"

const initial_state = {
  activities: [],
  loading: false,
  err: {},
  
}

const allActivity = (state = initial_state, action) => {
  switch (action.type) {
    case ACTIVITY_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        activities: action.payload,
        err: {},
      }
    case ACTIVITY_ERROR:
      return {
        ...state,
        loading: false,
        activities: [],
        err: action.payload,
      }
    default:
      return state
  }
}


export default allActivity