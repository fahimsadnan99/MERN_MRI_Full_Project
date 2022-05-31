import { SINGLE_ACTIVITY_SUCCESS,SINGLE_ACTIVITY_LOADING ,SINGLE_ACTIVITY_ERROR} from "./actionTypes"

const initial_state = {
  singleActivity: null,
  loading: false,
  err: null,
  
}

const getSingleActivity = (state = initial_state, action) => {
  switch (action.type) {
    case SINGLE_ACTIVITY_LOADING:
      return {
        ...state,
        loading: true,
        
      }
    case SINGLE_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        singleActivity: action.payload,
        err: null,
      }
    case SINGLE_ACTIVITY_ERROR:
      return {
        ...state,
        loading: false,
        singleActivity: null,
        err: action.payload,
      }
    default:
      return state
  }
}


export default getSingleActivity