import B_Dashboard from "page/Activity"
import ActivityResult from "page/ActivityResult"
import { companyPreference } from "page/companyPreference"
import Main from "page/dashboard"
import FileRecieve from "page/FileRecieve/file-list"
import Contact from "page/ImagePosition"
import Parameter from "page/Parameter"
import riteAdvantage from "page/RiteAdvantage"
import Slider from "page/Slider"
import React from "react"
import { Redirect } from "react-router-dom"
import AdminLogin from "../pages/Authentication/AdminLogin"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import OtherUserInfo from "../pages/Authentication/OtherUserInfo"
import Register from "../pages/Authentication/Register"
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification"
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2"
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification"
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2"
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword"
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2"
//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Login2 from "../pages/AuthenticationInner/Login2"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2"
import Register1 from "../pages/AuthenticationInner/Register"
import Register2 from "../pages/AuthenticationInner/Register2"

const authProtectedRoutes = [
  { path: "/", component: Main },

  { path: "/file-received", component: FileRecieve },
  { path: "/activity-result", component: ActivityResult },
  { path: "/invoices-created", component: Main },
  { path: "/contacts", component: Contact },
  { path: "/parameter", component: Parameter },
  { path: "/slider", component: Slider },
  { path: "/riteAdvantage", component: riteAdvantage },
  { path: "/activity", component: B_Dashboard },

  { path: "/company-prefernces", component: companyPreference },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/admin-login", component: AdminLogin },
  { path: "/forgot-password", component: ForgetPwd },

  { path: "/register", component: Register },
  { path: "/other-userInfo", component: OtherUserInfo },

  // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-login-2", component: Login2 },
  { path: "/pages-register", component: Register1 },
  { path: "/pages-register-2", component: Register2 },
  { path: "/page-recoverpw", component: Recoverpw },
  { path: "/page-recoverpw-2", component: Recoverpw2 },
  { path: "/pages-forgot-pwd", component: ForgetPwd1 },
  { path: "/auth-recoverpw-2", component: ForgetPwd2 },
  { path: "/auth-lock-screen", component: LockScreen },
  { path: "/auth-lock-screen-2", component: LockScreen2 },
  { path: "/page-confirm-mail", component: ConfirmMail },
  { path: "/page-confirm-mail-2", component: ConfirmMail2 },
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-email-verification-2", component: EmailVerification2 },
  { path: "/auth-two-step-verification", component: TwostepVerification },
  { path: "/auth-two-step-verification-2", component: TwostepVerification2 },
]

export { authProtectedRoutes, publicRoutes }
