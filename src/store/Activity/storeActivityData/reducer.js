import {
    STORE_ACTIVITY
  } from "./actionTypes"
  
const initialState = {}
  
  const storeActivityData = (state = initialState, action) => {
    switch (action.type) {
        case STORE_ACTIVITY:
            return  state = {
                ...state,...action.payload
              }
          
      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default storeActivityData
  