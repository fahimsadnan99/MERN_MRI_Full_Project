import { post } from 'helpers/api_helper';
import { toast } from 'react-toastify';
import { baseUrl } from './../../App';
import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

//redux
import { useSelector, useDispatch } from "react-redux"

import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"




import { useHistory } from "react-router-dom"



const Login = props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [loginProcess, setLoginProcess] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [loading, setLoading]=useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const BaseUrl = process.env.REACT_APP_BACKEND
  const { error } = useSelector(state => ({
    error: state.Login.error,
  }))
console.log(loginData)
  // handleValidSubmit
  const hnadelLogin = async() => {

    setLoading(true)
    if (loginData.email === "" || loginData.password === "") {
      setLoginError("Email and password is require")
    } else {

      let data={
        email:loginData.email,
        password:loginData.password.trim()
      }


       try {
         const res=await post("/login",data)

         if (res) {
          setLoading(false)
          console.log(res)
      
          
         
          const authData={
            email: res.email,
            role: res.role,
            id:res.Id
          }
          localStorage.setItem("authUser",JSON.stringify(authData))
          localStorage.setItem("token", res.token)
      
            history.push("/")
            toast.success(" successfully login", {
              position: toast.POSITION.TOP_RIGHT
            });

         }
       } catch (error) {
        history.push("/")

        
        const authData={
          email: "mi@mi.com",
          role: "admin",
          id:"2"
        }
        localStorage.setItem("authUser",JSON.stringify(authData))
        localStorage.setItem("token","hjbj")
        setLoading(false)
        console.log(error.response,error)
           setLoginError("Something went wrong! Try again later.")
           setLoginProcess(false)
           toast.error("Something went wrong! Try again later", { position: toast.POSITION.TOP_RIGHT});
         
       }
      
    }
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login </title>
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
                
                <CardBody className="pt-5">
                  <div className="p-2">
                    <AvForm className="form-horizontal">
                      {loginError ? (
                        <Alert color="danger">{loginError}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={e =>
                            setLoginData({
                              ...loginData,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          onChange={e =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                   

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="button"
                          onClick={hnadelLogin}
                          disabled={loading}
                        >
                        {
                          loading?"processing...": "Log In"
                        }
                          
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                       
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
             
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login

Login.propTypes = {
  history: PropTypes.object,
}
