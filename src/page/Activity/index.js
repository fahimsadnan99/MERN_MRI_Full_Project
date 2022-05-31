import Question from "components/Common/Question"
import { post } from "helpers/api_helper"
import Parameter from "page/Parameter"
import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import { Col, Container, FormGroup, Input, Label, Progress, Row } from "reactstrap"
import { setStoreActivity } from "./../../store/Activity/storeActivityData/actions"
import BodyPart from "./BodyPart"
import FinalSubmitBtn from "./FinalSubmitBtn"
import PopUpQuestion from "./PopUpQuestion"
import RightCheckBox from "./RightCheckBox"
import "./style.css"


const B_Dashboard = () => {
  const dispatch = useDispatch()

  const [radioVal, setRadio] = useState(null)
  const [radioQtype, setQType] = useState(null)
  const [optionCount, setOptionCount] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)
  const [saveActivityLoader, setSaveActivityLoader]=useState(false)
  const [uploadDocument,setUploadDocument]=useState({
    upload:false,
    remove:false
  })
  const [optionsQuestion, setOptionsQuestions] = useState([{ option: "" }])
  const [documentProgress, setDocumentProgress] = useState({
    percent: 0,
    totalSize: 0,
    loaded: 0,
    startUploading: false,
  })


  const [answer, setAnswer] = useState()
  const [activeCheckBok, setActiveCheckBox] = useState({
    learn: true,
    test: false,
    vendor: false,
  })

  const activityData = useSelector(state => state.storeActivityData)
  console.log(activityData.document,"documents")

  
  

   useEffect(()=>{
    dispatch(setStoreActivity({
      exercise_type : radioVal
    }))

   },[radioVal])


  useEffect(() => {
    dispatch(
      setStoreActivity({
        mode: activeCheckBok.learn
          ? "learn"
          : activeCheckBok.test
          ? "test"
          : "vendor",
      })
    )
  }, [activeCheckBok])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: ".pdf, .ppt, .pptx,.csv",
  })

  console.log(getInputProps)

  useEffect(()=>{
    setUploadDocument(acceptedFiles)

  },[acceptedFiles])

  const handleOptionChange = (i, e) => {
    const newValues = [...optionsQuestion]
    newValues[i][e.target.name] = e.target.value
    // abc[e.target.id] = e.target.value;
    setOptionsQuestions(newValues)
  }

  const handleQuestionInput = (id, e) => {
    const newValues = [...questions]
    newValues[id].question = e.target.value
    // abc[e.target.id] = e.target.value;
    setQuestions(newValues)
  }

  const removeOption = i => {
    const newValues = [...optionsQuestion]
    newValues.splice(i, 1)
    setOptionsQuestions(newValues)
  }

  const getQuestions = data => {

  }

  const handelUploadModesFile = async () => {
    console.log("click", "baseUrl", acceptedFiles[0])
    setDocumentProgress({ ...documentProgress, startUploading: true })

    let fromData = new FormData()
    fromData.append("file", acceptedFiles[0])

   

 

    const option = {
      onUploadProgress: progressEvent => {
        const { loaded, total } = progressEvent
        let percent = Math.floor((loaded * 100) / total)
        setDocumentProgress({
          ...documentProgress,
          loaded: loaded / 1024,
          percent: percent,
          totalSize: total / 1024,
        })
      },
    }

    try {
      const res = await post("/add-document", fromData, option)
      dispatch(setStoreActivity({
        document : res.file_link
      }))
     
      setDocumentProgress({
        ...documentProgress,
        percent: 0,
        totalSize: 0,
        startUploading: false,
        loaded: 0,
      })
      toast.success("Successfully upload your document ", {
        position: toast.POSITION.TOP_RIGHT,
      })
    } catch (err) {
     
      setDocumentProgress({
        ...documentProgress,
        percent: 0,
        totalSize: 0,
        startUploading: false,
        loaded: 0,
      })
      toast.error("Fail to upload try again ", {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  const removeDocument=()=>{

    dispatch(setStoreActivity({
      document :""
    }))
    toast.success("Successfully remove uploaded  document ", {
      position: toast.POSITION.TOP_RIGHT,
    })
    setUploadDocument({...uploadDocument,remove:true})
    
     
  }



  return (
    <>
      <Container className="backend_dashboard">
        <Row className="mt-5">
          <Col lg={6}>
            <Row className="p-3">
              <div className="col-12 my-2">
                <strong> Activity Title:</strong>
                <Input
                  onMouseOut={e =>
                    dispatch(
                      setStoreActivity({ activity_title: e.target.value })
                    )
                  }
                  className="input-title"
                  type="text"
                />
              </div>
              <div className="col-12 my-2">
                <strong> Title:</strong>
                <Input
                  onMouseOut={e =>
                    dispatch(setStoreActivity({ title: e.target.value }))
                  }
                  className="input-title"
                  type="text"
                />
              </div>
              <div className="col-12 my-2">
                <strong> Introduction:</strong> <br />
                <Input
                  onMouseOut={e =>
                    dispatch(setStoreActivity({ introduction: e.target.value }))
                  }
                  className="input-textarea"
                  type="textarea"
                />
              </div>
              <div className="col-12 my-2">
                <Row>
                  <div className="col-12">
                    <strong> Modes:</strong>{" "}
                  </div>

                  <div className="col-3 ">
                    <Input
                      name="modes"
                      className="modes-radio-button"
                      type="radio"
                      checked={activeCheckBok.learn}
                      onClick={() =>
                        setActiveCheckBox({
                          ...activeCheckBok,
                          learn: true,
                          test: false,
                          vendor: false,
                        })
                      }
                    />
                    <br />
                    <label> Learn </label>
                  </div>
                  <div className="col-3 ">
                    <Input
                      name="modes"
                      className="modes-radio-button"
                      type="radio"
                      checked={activeCheckBok.test}
                      onClick={() =>
                        setActiveCheckBox({
                          ...activeCheckBok,
                          learn: false,
                          test: true,
                          vendor: false,
                        })
                      }
                    />
                    <br />
                    <label> Test </label>
                  </div>
                  <div className="col-3">
                    <Input
                      name="modes"
                      className="modes-radio-button"
                      type="radio"
                      checked={activeCheckBok.vendor}
                      onClick={() =>
                        setActiveCheckBox({
                          ...activeCheckBok,
                          learn: false,
                          test: false,
                          vendor: true,
                        })
                      }
                    />
                    <br />
                    <label> Vendor </label>
                  </div>

                  <div className="col-5">
                    <div className="row">
                      <div {...getRootProps({ className: "col-12" })}>
                        {(activeCheckBok.learn || activeCheckBok.test) && (
                          <div className="learn_B_file_upload_container">
                            <form  style={{border:activityData.document ?"4px dashed green":"4px dashed black" }} action="" method="">
                              <input {...getInputProps()} />
                              {(acceptedFiles.length === 0 || uploadDocument.remove===true) ? (
                                <p className="text-center text-muted h5">
                                  Drag & drop your lessons here,
                                  <br /> or click to upload lesson
                                </p>
                              ) : (
                                <p>{acceptedFiles[0].name}</p>
                              )}
                            </form>
                          </div>
                        )}
                      </div>

                      {(activeCheckBok.learn || activeCheckBok.test) && (
                        <div className="col-12">
                          {documentProgress.totalSize > 0 ? (
                            <Progress animated value={documentProgress.percent}>
                              {documentProgress.percent + "%"}
                            </Progress>
                          ) : null}
                          {
                            activityData.document &&
                            <div style={{marginTop:"-35px"}} className="card  shadow-lg p-2 "> 
                           <p className="d-flex justify-content-between my-auto"> 
                              <span> {acceptedFiles[0]?.name?.length > 15 ? acceptedFiles[0]?.name?.slice( acceptedFiles[0]?.name?.length-16,  acceptedFiles[0].name.length)
                                : acceptedFiles[0]?.name} </span>  <span onClick={removeDocument} className="text-danger cursor"> X</span> </p>
                            </div> 
                          }

                          <button
                            className="btn btn-primary mt-2  w-100"
                            type="button"
                            onClick={handelUploadModesFile}
                            disabled={documentProgress.startUploading}
                          >
                            {documentProgress.percent > 0
                              ? `${
                                  documentProgress.loaded < 1024
                                    ? Math.floor(documentProgress.loaded) +
                                      " kb"
                                    : Math.floor(
                                        documentProgress.loaded / 1024
                                      ) + " MB"
                                }   of  ${
                                  documentProgress.totalSize > 1024
                                    ? Math.floor(
                                        documentProgress.totalSize / 1024
                                      ) + " MB"
                                    : Math.floor(documentProgress.totalSize) +
                                      " kb"
                                }`
                              : "Upload"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-5">
                    {activeCheckBok.vendor && (
                      <div className="row">
                        <div className="col-12">
                          <Input id="" name="select" type="select">
                            <option>RITE Advantage</option>
                            <option>GE</option>
                            <option>Siemens</option>
                            <option>Phillips</option>
                            <option>Toshiba</option>
                          </Input>
                        </div>
                        <div className="col-12 my-2">
                          <Input id="" name="select" type="select">
                            <option>RITE Advantage</option>
                            <option>GE</option>
                            <option>Siemens</option>
                            <option>Phillips</option>
                            <option>Toshiba</option>
                          </Input>
                        </div>
                        <div className="col-12">
                          <Input id="" name="select" type="select">
                            <option>RITE Advantage</option>
                            <option>GE</option>
                            <option>Siemens</option>
                            <option>Phillips</option>
                            <option>Toshiba</option>
                          </Input>
                        </div>
                        <div className="col-12 mt-3">
                          <button
                            style={{ width: "100%" }}
                            className="btn btn-primary"
                            type="button"
                            
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Row>
              </div>
            </Row>
          </Col>
          <Col lg={6}>
            <RightCheckBox />
          </Col>

          <div className="col-12">
            <Row>
              {" "}
              <BodyPart />{" "}
            </Row>
          </div>
          <div className="my-4 col-12">
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  onChange={() => setRadio("Question")}
                  checked={radioVal === "Question"}
                />
                <strong> Question Exercise</strong>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  onChange={() => setRadio("Parameter")}
                  checked={radioVal === "Parameter"}
                />
                <strong> Parameter Exercise</strong>
              </Label>
            </FormGroup>
            {radioVal === "Question" ? (
              <>
                <Question
                 
                />
              </>
            ) : (
              <></>
            )}
            {/* <Input className="input-textarea" type="textarea" /> */}

            {radioVal === "Parameter" ? <Parameter /> : null}
          </div>
        </Row>
        <Row> 


        <PopUpQuestion/>
        </Row> 

        <Row>
          <Col className="d-flex justify-content-lg-end my-5">
           <FinalSubmitBtn/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default B_Dashboard
