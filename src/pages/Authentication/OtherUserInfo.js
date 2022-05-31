/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React from "react"

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

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



const OtherUserInfo = props => {


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
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                  
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={e => {
                        handleValidSubmit(e)
                      }}
                    >
                      

                      <div className="mb-3">
                        <AvField
                          name="firstName "
                          label="First Name "
                          value=""
                          className="form-control"
                          placeholder="Enter Your First Name "
                          type="text"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="secondName"
                          label="Second Name"
                          value=""
                          type="text"
                          required
                          placeholder="Enter Your Second name "
                        />
                      </div>

                   

                      <div className="mt-3 d-grid">
                        <button
                        onClick={()=>props.setGoNext(false)}
                          className="btn btn-secondary  mb-2"
                          type="button"
                        >
                         Previous 
                        </button>
                        <Link
                        to="/profile"
                        
                          className="btn btn-primary  mt-1"
                          type="submit"
                        >
                         Submit  
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

export default withRouter(OtherUserInfo)

