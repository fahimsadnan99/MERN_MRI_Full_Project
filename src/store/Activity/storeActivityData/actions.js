import { STORE_ACTIVITY } from "./actionTypes"

export const setStoreActivity = data => {
  return {
    type: STORE_ACTIVITY,
    payload: data,
  }
}
