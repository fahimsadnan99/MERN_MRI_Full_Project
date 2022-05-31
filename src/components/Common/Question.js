import PropTypes from "prop-types"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { Button, Form, Input } from "reactstrap"
import { setStoreActivity } from "./../../store/Activity/storeActivityData/actions"

const options = [
  { name: "MCQ", value: "1" },
  { name: "Short Answer", value: "2" },
]

const Question = () => {
  const dispatch = useDispatch()
  const [questions, setQuestions] = useState([
    {
      question: "",
      type: "",
      question_short_ans: "",
      options: [
        {
          option: "",
          answer: false,
        },
      ],
    },
  ])
  const [submitedQuestionData, setSubmitedQuestionData] = useState({
    loading: false,
    data: [],
  })

  // const [error,setError]=useState(false)

  const handleSelect = (idx, e) => {
    const old = [...questions]
    old[idx].type = e.target.value
    setQuestions(old)
  }

  const addOption = idx => {
    const old = [...questions]
    old[idx].options.push({
      option: "",
      answer: false,
    })
    setQuestions(old)
  }
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        type: "",
        question_short_ans: "",
        options: [
          {
            option: "",
            answer: false,
          },
        ],
      },
    ])
  }

  const handleSubmit = e => {
    e.preventDefault()

    let error = false

    setSubmitedQuestionData({ ...submitedQuestionData, loading: true })

    const questionsData = questions.map((x, index) => {
      let questionsFinnalData = {}

      questionsFinnalData.question_title = x.question
      questionsFinnalData.question_type = x.type
      questionsFinnalData.question_short_ans = x.question_short_ans

      if (x.type === "1") {
        questionsFinnalData.question_ans1 = x.options[0]
          ? x.options[0].option
          : ""
        questionsFinnalData.question_ans2 = x.options[1]
          ? x.options[1].option
          : ""
        questionsFinnalData.question_ans3 = x.options[2]
          ? x.options[2].option
          : ""
        questionsFinnalData.question_ans4 = x.options[3]
          ? x.options[3].option
          : ""
        const options = x.options.map((y, index) => {
          if (y.answer === true) {
            questionsFinnalData.question_correct = `${index + 1}`
          }
        })
      } else {
        questionsFinnalData.question_ans1 = ""
        questionsFinnalData.question_ans2 = ""
        questionsFinnalData.question_ans3 = ""
        questionsFinnalData.question_ans4 = ""
        questionsFinnalData.question_correct = ""
      }

      return questionsFinnalData
    })

    questionsData.forEach((x, index) => {
      if (!x.question_title || !x.question_title.trim()) {
        setSubmitedQuestionData({ ...submitedQuestionData, loading: false })
        error = true
        return toast.error("Question won't be empty", {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
      if (x.question_type === "1") {
        if (!x.question_correct) {
          setSubmitedQuestionData({ ...submitedQuestionData, loading: false })
          error = true
          toast.error("MCQ correct answer is missing! ", {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      }
      if (x.question_type === "2") {
        if (!x.question_short_ans.trim()) {
          error = true
          setSubmitedQuestionData({ ...submitedQuestionData, loading: false })
          toast.error("Short answer is missing! ", {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      }
      if (!x.question_type) {
        error = true
        setSubmitedQuestionData({ ...submitedQuestionData, loading: false })
        return toast.error("Please select one question type!", {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    })

    if (!error) {
      dispatch(
        setStoreActivity({
          questionData: [...questionsData],
        })
      )

      setSubmitedQuestionData({
        ...submitedQuestionData,
        data: questionsData,
        loading: false,
      })

      toast.success("all questions added successfully", {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  const handleOptionChange = (mainIndex, subIndex, e) => {
    const old = [...questions]
    const data = [...old[mainIndex].options]
    data[subIndex].option = e.target.value
    setQuestions(old)
  }
  const setAnswer = (mainIndex, subIndex, e) => {
    const old = [...questions]
    const data = [...old[mainIndex].options]
    data.forEach((dt, idx) => {
      if (idx === subIndex) {
        dt.answer = true
      } else {
        dt.answer = false
      }
    })
    setQuestions(old)
  }
  const removeOption = (idx, subIndex) => {
    const old = [...questions]
    old[idx].options.splice(subIndex, 1)
    setQuestions(old)
  }
  const handleQuestionInput = (idx, e) => {
    const old = [...questions]
    old[idx].question = e.target.value
    setQuestions(old)
  }
  return (
    <>
      <div className="bg-white mt-3 px-2">
        <h3 className="text-center text-decoration-underline pt-3">
          Questions
        </h3>
        <Form onSubmit={handleSubmit}>
          {questions.map((question, idx) => (
            <div
              className="d-flex justify-content-center flex-column border border-dark p-2 mb-3 rounded-lg"
              key={idx}
            >
              <div className="my-3 row align-items-center">
                <div className="col-12">
                  <strong>Question {idx + 1}</strong>
                  <Input
                    className="ml-2 w-50 bg-transparent input-title"
                    name="question"
                    type="text"
                    value={question.question || " "}
                    required
                    onChange={e => handleQuestionInput(idx, e)}
                  />
                </div>
              </div>
              <div className="my-3 pt-2 row align-items-center">
                <p className="col-4 mb-0">
                  <strong>Question Type</strong>
                </p>
                <div className="col-8 d-flex">
                  {options.map((data, idx2) => (
                    <div key={idx2}>
                      <Input
                        type="radio"
                        name={data.value + idx}
                        value={data.value}
                        onChange={e => handleSelect(idx, e)}
                        checked={question.type === data.value}
                      />
                      <span className="ms-2 me-3">{data.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {question.type === "1" ? (
                <div>
                  <div className="row">
                    <div className="col-2">
                      <strong>Options</strong>
                    </div>
                    <div className="col-10">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className="d-flex align-items-center mt-1"
                        >
                          <div className="col-10">
                            <Input
                              className="col-3"
                              type="radio"
                              name={"qAnswer" + idx + index}
                              value={index}
                              checked={option.answer === true}
                              onChange={e => setAnswer(idx, index, e)}
                            />
                            <Input
                              className="w-50 col-9 input-title"
                              name="option"
                              value={option.option || ""}
                              type="text"
                              placeholder={`Option ${index + 1}`}
                              onChange={e => handleOptionChange(idx, index, e)}
                              required
                            />
                          </div>
                          {index !== 0 ? (
                            <div className="col-2">
                              <i
                                className="mdi mdi-minus-circle-outline fs-2"
                                onClick={() => removeOption(idx, index)}
                              />
                            </div>
                          ) : null}
                        </div>
                      ))}
                      {question.options.length >= 4 ? null : (
                        <div className="col-12 d-flex align-items-center justify-content-center mt-2">
                          <i
                            className="mdi mdi-plus-circle-outline fs-2 me-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => addOption(idx)}
                          />
                          Add another option
                        </div>
                      )}

                      {/* { [...Array(optionCount)].map((_, i) => <OptionComponent key={i} />) } */}
                    </div>
                  </div>
                </div>
              ) : question.type === "2" ? (
                <Input
                  className="input-textarea"
                  placeholder="Short-Answer"
                  onChange={e => (question.question_short_ans = e.target.value)}
                  type="textarea"
                />
              ) : null}
            </div>
          ))}

          {/*  */}
          <div
            className="col-12 d-flex align-items-center justify-content-center mt-2"
            style={{ cursor: "pointer" }}
          >
            <i
              className="mdi mdi-plus-circle-outline fs-2 me-2"
              onClick={() => addQuestion()}
            />
            Add another Question
          </div>

          <div className="text-center mt-4 pb-4">
            <Button
              disabled={submitedQuestionData.loading}
              type="submit"
              color="primary"
            >
              {submitedQuestionData.data.length > 0 ? "Update" : "Save"}{" "}
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

Question.propTypes = {
  questions: PropTypes.array,
  setQuestions: PropTypes.func,
  getQuestions: PropTypes.func,
}

export default Question
