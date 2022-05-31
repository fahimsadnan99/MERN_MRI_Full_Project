/* eslint-disable react/prop-types */
import React from "react"
import { Row } from "reactstrap"
import ResultError from "./ResultError"
import ResultNotFound from "./ResultNotFound"

const QuestionType = ({ selectedActivity, activityResult }) => {
  if (activityResult?.status == 0) {
    return (
      <ResultNotFound
        selectedActivity={selectedActivity}
        activityResult={activityResult}
      />
    )
  }
  if (activityResult) {
    return (
      <Row className="d-flex justify-content-center">
        <div className="col-md-10 offset-md-1">
          {activityResult.length > 0 &&
            activityResult.map((x, index) => (
              <>
                <h3 className="question_title text-capitalize my-3">
                  {index + 1}. {x?.Questiondetails[0]?.question_title}{" "}
                </h3>

                {x.question_type === "2" ? (
                  <p className="sortAns ml-3">
                    {x?.Questiondetails[0]?.question_short_ans}
                  </p>
                ) : (
                  <div className="mb-3">
                    <li
                      className={
                        x.answer === "1" &&
                        x.Questiondetails[0].question_correct === "1"
                          ? "answerOption my-2 shadow  right_ans_bg"
                          : "answerOption my-2 shadow"
                      }
                    >
                      <input
                        type="radio"
                        className="radioCustomButton"
                        name="radioGroup"
                      />
                      <label
                        className={
                          x.answer === "1" &&
                          x.Questiondetails[0].question_correct === "1"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : x.answer === "1" &&
                              x.Questiondetails[0].question_correct !== "1"
                            ? "radioCustomLabel radioCustomLabelWrongAns"
                            : x.Questiondetails[0].question_correct === "1" &&
                              x.answer !== "1"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : "radioCustomLabel"
                        }
                      >
                        {x?.Questiondetails[0]?.question_ans1}
                      </label>
                    </li>

                    <li
                      className={
                        x.answer === "2" &&
                        x.Questiondetails[0].question_correct === "2"
                          ? "answerOption my-2 shadow  right_ans_bg"
                          : "answerOption my-2 shadow"
                      }
                    >
                      <input
                        type="radio"
                        className="radioCustomButton"
                        name="radioGroup"
                      />
                      <label
                        className={
                          x.answer === "2" &&
                          x.Questiondetails[0].question_correct === "2"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : x.answer === "2" &&
                              x.Questiondetails[0].question_correct !== "2"
                            ? "radioCustomLabel radioCustomLabelWrongAns"
                            : x.Questiondetails[0].question_correct === "2" &&
                              x.answer !== "2"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : "radioCustomLabel"
                        }
                      >
                        {x?.Questiondetails[0]?.question_ans2}
                      </label>
                    </li>
                    <li
                      className={
                        x.answer === "3" &&
                        x.Questiondetails[0].question_correct === "3"
                          ? "answerOption my-2 shadow  right_ans_bg"
                          : "answerOption my-2 shadow"
                      }
                    >
                      <input
                        type="radio"
                        className="radioCustomButton"
                        name="radioGroup"
                      />
                      <label
                        className={
                          x.answer === "3" &&
                          x.Questiondetails[0].question_correct === "3"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : x.answer === "3" &&
                              x.Questiondetails[0].question_correct !== "3"
                            ? "radioCustomLabel radioCustomLabelWrongAns"
                            : x.Questiondetails[0].question_correct === "3" &&
                              x.answer !== "3"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : "radioCustomLabel"
                        }
                      >
                        {x?.Questiondetails[0]?.question_ans3}
                      </label>
                    </li>

                    <li
                      className={
                        x.answer === "4" &&
                        x.Questiondetails[0].question_correct === "4"
                          ? "answerOption my-2 shadow  right_ans_bg"
                          : "answerOption my-2 shadow"
                      }
                    >
                      <input
                        type="radio"
                        className="radioCustomButton"
                        name="radioGroup"
                      />
                      <label
                        className={
                          x.answer === "4" &&
                          x.Questiondetails[0].question_correct === "4"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : x.answer === "4" &&
                              x.Questiondetails[0].question_correct !== "4"
                            ? "radioCustomLabel radioCustomLabelWrongAns"
                            : x.Questiondetails[0].question_correct === "4" &&
                              x.answer !== "4"
                            ? "radioCustomLabel radioCustomLabelRightAns"
                            : "radioCustomLabel"
                        }
                      >
                        {x?.Questiondetails[0]?.question_ans4}
                      </label>
                    </li>
                  </div>
                )}
              </>
            ))}
        </div>
      </Row>
    )
  } else {
    return <ResultError />
  }
}

export default QuestionType
