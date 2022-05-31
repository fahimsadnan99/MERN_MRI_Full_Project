import React, { useState } from "react"
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  Collapse,
  Input,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap"
// import { Accordion,AccordionItem ,  AccordionHeader} from 'reactstrap';
import classnames from "classnames"
const Elements = () => {
  const [btnprimary1, setBtnprimary1] = useState(false)
  const [contrast, setContrast] = useState(true)
  const [advanced, setAdvanced] = useState(false)
  const [resolution, setResolution] = useState(true)
  const [mics, setMics] = useState(false)

  const t_contrast = () => {
    setContrast(!contrast)
    setAdvanced(false)
  }

  const t_advanced = () => {
    setAdvanced(!advanced)
    setContrast(false)
  }

  const t_resolution = () => {
    setResolution(!resolution)
    setMics(false)
  }

  const t_mics = () => {
    setMics(!mics)
    setResolution(false)
  }

  return (
    <>
      <div className="col-lg-2">
        <div className="row">
          <div className="col-12 protocol-wrapper">
            <h5 className=" text-center border-color-rate-advantage">
              Protocol
            </h5>
            <ul>
              <li> Protocol 1</li>
              <li> Protocol 2</li>
              <li> Protocol 3</li>
              <li>Question 1</li>
              <li> Protocol 4</li>
            </ul>
          </div>
          <div className="col-12 protocol-wrapper-display mt-2 d-flex justify-content-center align-items-center">
            <h5 className="text-center">( Lesson Area)</h5>

          </div>

        <div className="col-12 mt-2 p-2">
           <button style={{width:"100%",background:"green"}} className="btn btn-secondary"> Scan</button>
           </div>
        </div>
      </div>

  
      <Col lg={10}>
      <Row>  
      <div className="col-lg-6">
        <div className="accordion accordion-flush" id="firstAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFlushOne">
              <button
                className={classnames(
                  "accordion-button",
                  "fw-medium",
                  "text-center",
                  "border-color-rate-advantage",
                  {
                    collapsed: !contrast,
                  }
                )}
                type="button"
                onClick={t_contrast}
                style={{ cursor: "pointer" }}
              >
                Contrast
              </button>
            </h2>

            <Collapse isOpen={contrast} className="accordion-collapse">
              <div
                style={{ border: "1px solid #4d63cf", borderTop: "none" }}
                className="accordion-body"
              >
                <div className="row">
                  <div className="col-6">
                    <strong> SAR: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> ms</strong>
                  </div>
                  <div className="col-3">
                    <Input
                      className="input-filed-custom-style-min-max"
                      type="text"
                    />{" "}
                    <br />
                    <strong className="d-block text-center ml-auto mr-auto">
                      {" "}
                      Min{" "}
                    </strong>
                  </div>
                  <div className="col-3">
                    <Input
                      className="input-filed-custom-style-min-max"
                      type="text"
                    />{" "}
                    <br />
                    <strong className="d-block text-center ml-auto mr-auto">
                      {" "}
                      Max{" "}
                    </strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <strong> TE: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> ms</strong>
                  </div>
                  <div className="col-3">
                    <Input
                      className="input-filed-custom-style-min-max"
                      type="text"
                    />{" "}
                    <br />
                    <strong className="d-block text-center ml-auto mr-auto">
                      {" "}
                      Min{" "}
                    </strong>
                  </div>
                  <div className="col-3">
                    <Input
                      className="input-filed-custom-style-min-max"
                      type="text"
                    />{" "}
                    <br />
                    <strong className="d-block text-center ml-auto mr-auto">
                      {" "}
                      Max{" "}
                    </strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <strong> Flip Angle </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> ms</strong>
                  </div>
                  <div className="col-12 mt-2">
                    <Row>
                      <div className="col-4 mt-2">
                        <strong>Saturation:</strong>
                      </div>
                      <div className="col-4">
                        <Input id="" name="select" type="select">
                          <option>Fat</option>
                          <option>Water</option>
                        </Input>
                      </div>
                    </Row>
                  </div>
                  <div className="col-12 mt-2">
                    <Row>
                      <div className="col-4 mt-2">
                        <strong>Inverse Time:</strong>
                      </div>
                      <div className="col-4">
                        <Input id="exampleSelect" name="select" type="select">
                          <option>160</option>
                          <option>2500</option>
                        </Input>
                      </div>
                    </Row>
                  </div>
                  <div className="col-12">
                    <strong> Echo Train length</strong>

                    <Input className="input-filed-custom-style" type="text" />
                  </div>
                  <div className="col-12">
                    <strong> Regin Long. Mag.</strong>

                    <Input className="ms-3" type="checkbox" />
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFlushTwo">
              <button
                className={classnames(
                  "accordion-button",
                  "fw-medium",
                  "border-color-rate-advantage",
                  {
                    collapsed: !advanced,
                  }
                )}
                type="button"
                onClick={t_advanced}
                style={{ cursor: "pointer" }}
              >
                Advance
              </button>
            </h2>

            <Collapse isOpen={advanced} className="accordion-collapse">
              <div
                style={{ border: "1px solid #4d63cf", borderTop: "none" }}
                className="accordion-body"
              >
                <Row>
                  <div className="col-6 mt-2">
                    <strong>Phase Encoding Direction: </strong>
                  </div>
                  <div className="col-4">
                    <Input id="" name="select" type="select">
                      <option>A-P</option>
                      <option>L-R</option>
                    </Input>
                  </div>
                </Row>

                <div className="row">
                  <div className="col-12">
                    <strong> Oversampling: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> %</strong>
                  </div>
                  <div className="col-12">
                    <strong> Number Averages: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                  </div>

                  <div className="col-12">
                    <strong> Receiving Bandwidth: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> Hz/px</strong>
                  </div>
                  <div className="col-12">
                    <strong> Parallel Imaging:</strong>

                    <Input className="ms-3" type="checkbox" />
                  </div>

                  <div className="col-12 mt-2">
                    <Row>
                      <div className="col-4 mt-2">
                        <strong>Half Fourier</strong>
                      </div>
                      <div className="col-4">
                        <Input id="" name="select" type="select">
                          <option>100%</option>
                          <option>87%</option>
                        </Input>
                      </div>
                    </Row>
                  </div>
                  <div className="col-12 mt-2">
                    <Row>
                      <div className="col-4 mt-2">
                        <strong>RectFOV</strong>
                      </div>
                      <div className="col-4">
                        <Input id="exampleSelect" name="select" type="select">
                          <option>100%</option>
                          <option>90%</option>
                        </Input>
                      </div>
                    </Row>
                  </div>

                  <div className="col-12">
                    <strong>Confirm Frequency:</strong>

                    <Input className="ms-3" type="checkbox" />
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="accordion accordion-flush" id="secondAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFlushTwo">
              <button
                className={classnames(
                  "accordion-button",
                  "fw-medium",
                  "border-color-rate-advantage",
                  "text-center",
                  {
                    collapsed: !resolution,
                  }
                )}
                type="button"
                onClick={t_resolution}
                style={{ cursor: "pointer" }}
              >
                Resolution
              </button>
            </h2>

            <Collapse isOpen={resolution} className="accordion-collapse">
              <div  style={{ border: "1px solid #4d63cf", borderTop: "none" }} className="accordion-body">
                <div className="row">
                  <div className="col-12">
                    <strong> # of Slices: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                  </div>
                  <div className="col-12">
                    <strong> Slice Thickness: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> mm</strong>
                  </div>
                  <div className="col-12">
                    <strong> Slice Gap: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> mm</strong>
                  </div>
                  <div className="col-12">
                    <strong> FOV: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> mm</strong>
                  </div>
                  <div className="col-12 mt-2">
                    <strong style={{ textDecoration: "underline" }}>
                      {" "}
                      Image Matrix{" "}
                    </strong>
                  </div>

                  <div className="col-12">
                    <Row>
                      <div className="col-6 mt-2">
                        <strong>Frequency Encoding</strong>
                      </div>
                      <div className="col-4">
                        <Input id="" name="select" type="select">
                          <option>512</option>
                          <option>488...</option>
                        </Input>
                      </div>
                    </Row>
                  </div>
                  <div className="col-12 my-2">
                    <Row>
                      <div className="col-6 mt-2">
                        <strong>Phase Encoding</strong>
                      </div>
                      <div className="col-4">
                        <Input id="" name="select" type="select">
                          <option>512</option>
                          <option>488...</option>
                        </Input>
                      </div>
                    </Row>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFlushTwo">
              <button
                className={classnames(
                  "accordion-button",
                  "fw-medium",
                  "border-color-rate-advantage",
                  {
                    collapsed: !mics,
                  }
                )}
                type="button"
                onClick={t_mics}
                style={{ cursor: "pointer" }}
              >
                Mics
              </button>
            </h2>

            <Collapse isOpen={mics} className="accordion-collapse">
              <div  style={{ border: "1px solid #4d63cf", borderTop: "none" }} className="accordion-body">
                <div className="row">
                  <div className="col-12">
                    <strong> Echo Spacing: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                    <strong> ms</strong>
                  </div>

                  <div className="col-12  mt-2">
                    <Row>
                      <div className="col-4">
                        <strong>RF Mode:</strong>
                      </div>
                      <div className="col-4">
                        <Input id="" name="select" type="select">
                          <option>Fast</option>
                          <option>Normal</option>
                          <option>Low SAR</option>
                        </Input>
                      </div>
                    </Row>
                  </div>
                  <div className="col-12 my-2">
                    <Row>
                      <div className="col-4 mt-2">
                        <strong>Gradient Mode:</strong>
                      </div>
                      <div className="col-4">
                        <Input id="" name="select" type="select">
                          <option>Fast</option>
                          <option>Normal</option>
                        </Input>
                      </div>
                    </Row>
                  </div>
                  <div className="col-12">
                    <Row>
                      <div className="col-6">
                        <strong> Normal Mode</strong>

                        <Input className="ms-3" type="radio" name="micsMode" />
                      </div>
                      <div className="col-6">
                        <strong> First Level</strong>

                        <Input className="ms-3" type="radio" name="micsMode" />
                      </div>
                    </Row>
                  </div>
                  <div className="col-12">
                    <strong> MARS</strong>

                    <Input className="ms-3" type="checkbox" />
                  </div>
                  <div className="col-12">
                    <strong> Measurement: </strong>

                    <Input className="input-filed-custom-style" type="text" />
                  </div>
                  <div className="col-12">
                    <strong> Temporal Resolution </strong>

                    <Input className="input-filed-custom-style" type="text" />
                  </div>
                  <div className="col-12 mt-2">
                    <strong> Breath Holds</strong>

                    <Input className="ms-3" type="checkbox" />
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <div className="col-lg-12 p-3 mt-2">
           <button style={{width:"100%"}} type="button" className="btn btn-primary">Cardiac</button>
      </div>
      </Row>   
     </Col>

    

     
    </>
  )
}

export default Elements
