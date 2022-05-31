import { post } from 'helpers/api_helper';
import { axios } from 'axios';
import { baseUrl } from './../../../App';
import { ACTIVITY_SUCCESS,ACTIVITY_LOADING ,ACTIVITY_ERROR} from "./actionTypes"

export const getAllActivitySuccess = data => {
  return {
    type: ACTIVITY_SUCCESS,
    payload: data,
  }
}
export const getAllActivityloading = data => {
  return {
    type: ACTIVITY_LOADING,
    
  }
}
export const getAllActivityError = data => {
  return {
    type: ACTIVITY_ERROR,
    payload: data,
  }
}


export const fetchAllActivity = () => async dispatch => {
  dispatch(getAllActivityloading())

  try {

    const data = await post("/list-activity")
    dispatch(getAllActivitySuccess(data.activities))
    
  } catch (error) {

    dispatch(getAllActivityError(error))
    
  }
    
  // axios
  //   .post(baseUrl + "/list-activity")
  //   .then(res => dispatch(getAllActivitySuccess(res.data)))
  //   .catch(err => dispatch(getAllActivityError(err)))
}
