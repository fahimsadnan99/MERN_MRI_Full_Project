import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"
import { FiKey } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"

import "./AdminLogin.css"

import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  InputGroup,
  InputGroupText,
  Input,
} from "reactstrap"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

//Social Media Imports
import { GoogleLogin } from "react-google-login"
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions"

// import images
import profile from "assets/images/profile-img.png"
import logo from "assets/images/logo.svg"

import OtherUserInfo from "./OtherUserInfo"

const AdminLogin = props => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const [goNext, setGoNext] = useState(false)

  const { error } = useSelector(state => ({
    error: state.Login.error,
  }))

  const handleValidSubmit = event => {}
  if (goNext) {
    return <OtherUserInfo setGoNext={setGoNext} />
  } else {
    return (
      <React.Fragment>
        <MetaTags>
          <title>Login</title>
        </MetaTags>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="fas fa-home h2" />
          </Link>
        </div>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center ">
              <Col className="p-5" md={8} lg={6} xl={5}>
                <Card className="overflow-hidden px-2 py-4">
                  <div className="">
                    <Row>
                      <Col xs={12}>
                        <div className="d-flex justify-content-center">
                          <img
                            className="login-logo "
                            src="http://shlomosamm145.sg-host.com/wp-content/uploads/2016/03/Rite-Advantage1.jpg"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-5 mt-3 ">
                    <div className="d-flex justify-content-between">
                      <h3 className="login-heading">Sign in</h3>

                      <Link>
                        <a className="login-brand-color text-bold">
                          {" "}
                          Create account{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="p-2">
                      <AvForm
                        className="form-horizontal"
                        onValidSubmit={e => {
                          handleValidSubmit(e)
                        }}
                      >
                        {error ? <Alert color="danger">{error}</Alert> : null}

                        <div className="mb-3">
                          <InputGroup>
                            <InputGroupText className="background-transparent">
                              <AiOutlineUser />
                            </InputGroupText>
                            <Input
                              className=" email-input  border-left-none"
                              type="email"
                              placeholder="Email"
                            />
                          </InputGroup>
                        </div>

                        <div className="mb-3">
                          <InputGroup>
                            <InputGroupText className="background-transparent">
                              <FiKey />
                            </InputGroupText>
                            <Input
                              className="input-placeHolder password-input border-right-none border-left-none"
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                            />
                            <InputGroupText
                              className="background-transparent password-eye"
                              style={{ cursor: "pointer" }}
                            >
                              <i
                                onClick={() => setShowPassword(!showPassword)}
                                className={
                                  showPassword
                                    ? "fas fa-eye"
                                    : "fa fa-eye-slash"
                                }
                                aria-hidden="false"
                              ></i>
                            </InputGroupText>
                          </InputGroup>
                        </div>

                        <div className="d-flex justify-content-between">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label text-bold"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>

                          <Link>
                            <a className="login-brand-color text-bold">
                              {" "}
                              Forgot Password?
                            </a>
                          </Link>
                        </div>

                        <div className="mt-3 d-grid">
                          <button
                            className="btn login-button btn-block"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>
                        <div className="mt-4 text-center">
                          <Link to="/" className="text-muted">
                            <span className="text-bold login-brand-color">
                              {" "}
                              Terms and Conditions{" "}
                            </span>

                            <span
                              className="text-bold"
                              style={{ color: "black" }}
                            >
                              {" "}
                              and{" "}
                            </span>

                            <span className="text-bold login-brand-color">
                              {" "}
                              Privacy
                            </span>
                          </Link>
                        </div>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(AdminLogin)
