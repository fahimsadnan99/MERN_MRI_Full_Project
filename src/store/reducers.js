import { combineReducers } from "redux"
import ActivityResult from "./Activity/getActivityResult/reducer"
import allActivity from "./Activity/getAllActivity/reducer"
import getSingleActivity from "./Activity/getSingleActivity/reducer"
import storeActivityData from "./Activity/storeActivityData/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
// Authentication
import Login from "./auth/login/reducer"
import Profile from "./auth/profile/reducer"
import Account from "./auth/register/reducer"
// Front
import Layout from "./layout/reducer"
import PopUpQuestion from "./PopUpQuestion/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  storeActivityData,
  PopUpQuestion,
  allActivity,
  getSingleActivity,
  ActivityResult,
})

export default rootReducer
