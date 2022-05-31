import React from "react"
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  Label,
  Button,
  Form,
  Input,
  InputGroup,
} from "reactstrap"
import { Editor } from "react-draft-wysiwyg"
import MetaTags from "react-meta-tags"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

export const companyPreference = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Company Preference</title>
        </MetaTags>
        <Container fluid>
          <Form>
            <Row>
              <Col sm="12" lg="2" className="h-100">
                <Card className="w-100 " style={{ height: "10rem" }}>
                  <CardBody
                    className="text-center h-100 bg-primary d-flex text-white font-weight-bold"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    Logo
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" lg="5">
                <Card>
                  <CardBody>
                    <CardTitle>Company Name</CardTitle>
                    <div className="mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                        placeholder="Company Name on Invoice"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" lg="5">
                <Card>
                  <CardBody>
                    <CardTitle>Address</CardTitle>
                    <Input
                      type="textarea"
                      id="formmessage"
                      className="form-control"
                      placeholder="Address on Invoice"
                      rows="4"
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm="12" lg="6">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Contact Number</CardTitle>
                    <div className="mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                        placeholder="Additional Contact Number"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" lg="6">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Tax Information</CardTitle>
                    <div className="mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                        placeholder="Tax Information ID Name"
                      />
                    </div>
                    <div className="mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                        placeholder="Tax Information ID Number"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle>Terms and Conditions</CardTitle>
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <div className="w-100 d-flex" style={{ justifyContent: "end" }}>
              <Button type="submit" color="primary" className="w-lg">
                Preview Invoice
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </React.Fragment>
  )
}
