import { setPopUpQuestion } from './../../../store/PopUpQuestion/action';
import { useState } from "react"
import { Input } from "reactstrap"
import React from "react"
import "./pupUpQuestion.css"
import { useDispatch, useSelector } from "react-redux"
const PopUpQuestion = () => {

    const dispatch=useDispatch()
  const [popUpquestion, setPopUpquestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAns: "",
  })
  return (
    <>
      <div className="col-md-12">
        <h4 className="text-center text-decoration-underline">
          {" "}
          Pop-out Question:
        </h4>
      </div>
      <div className="col-md-12  question_container">
        <p>
          <strong> Question :</strong>{" "}
          <input

            onChange={(e)=>dispatch(setPopUpQuestion({question:e.target.value}))}
            className="w-50 bg-transparent input-title form-control"
            type="text"
          />{" "}
        </p>
      </div>

      <div className="col-12">
        <div className="row">
          <div className="col-sm-2">
            <strong> Option :</strong>
          </div>
          <div className="col-sm-8">
            <div>
              {" "}
                          <input   onChange={(e)=>dispatch(setPopUpQuestion({correctAns:"option1"}))} type="radio" id="option1" name="popup" />
                          
                          <input
                              onChange={(e)=>dispatch(setPopUpQuestion({option1:e.target.value}))}
                placeholder="option1"
                className="w-sm-50 bg-transparent input-title form-control"
                type="text"
              />{" "}
            </div>
            <div>
              {" "}
              <input   onChange={(e)=>dispatch(setPopUpQuestion({correctAns:"option2"}))} type="radio" name="popup" />
                          <input
                              onChange={(e)=>dispatch(setPopUpQuestion({option2:e.target.value}))}
                placeholder="option2"
                className="w-sm-50 bg-transparent input-title form-control"
                type="text"
              />{" "}
            </div>
            <div>
              {" "}
              <input  onChange={(e)=>dispatch(setPopUpQuestion({correctAns:"option3"}))}  type="radio" name="popup" />
                          <input
                              
onChange={(e)=>dispatch(setPopUpQuestion({option3:e.target.value}))}
                placeholder="option3"
                className="w-sm-50bg-transparent input-title form-control"
                type="text"
              />{" "}
            </div>
            <div>
              {" "}
              <input  onChange={(e)=>dispatch(setPopUpQuestion({correctAns:"option4"}))}   type="radio" name="popup" />
              <input

onChange={(e)=>dispatch(setPopUpQuestion({option4:e.target.value}))}
                placeholder="option4"
                className="w-sm-50 bg-transparent input-title form-control"
                type="text"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUpQuestion
