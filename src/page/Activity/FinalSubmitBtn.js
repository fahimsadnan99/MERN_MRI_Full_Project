import { post } from "helpers/api_helper"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
const FinalSubmitBtn = () => {
  const [saveActivityLoader, setSaveActivityLoader] = useState(false)

  const activityData = useSelector(state => state.storeActivityData)
  const PopUpQuestion = useSelector(state => state.PopUpQuestion)
  const {
    RightSideData,
    leftSideData,
    activity_title,
    title,
    introduction,
    mode,
    exercise_type,
    field_strength,
    rf_coils,
    body_parts,

    questionData,
    image_contrast,
    pluse_sequence,
    parameter_images1,
    parameter_images2,
    parameter_images3,
    imagePosition,
  } = activityData

  const { question, option1, option2, option3, option4, correctAns } =
    PopUpQuestion

  console.log(PopUpQuestion)

  const handelActivityDataSaveToDatabase = async () => {
    setSaveActivityLoader(true)

    let data = {}
    //   setting default value that could be changed by exercise_type
    data.parameters = []
    data.questions = []
    data.parameter_images = []
    data.image_contrast = 0
    data.pluse_sequence = 0
    let margeData
    let error = false

    switch (true) {
      case !exercise_type:
        error = true
        toast.error("Please add question exercise or parameters exercise!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      case !activity_title || !activity_title.trim():
        error = true
        toast.error("Please add activity title!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      case !title || !title.trim():
        error = true
        toast.error("Please add  title!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      case !introduction || !introduction.trim():
        error = true
        toast.error("Please add  introduction!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      case !mode:
        error = true
        toast.error("Please select activity Modes!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      // case !activityData.document:
      //   error = true
      //   toast.error("Please upload document!", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   })
      //   break
      case !body_parts:
        error = true
        toast.error("Please select body parts!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      case !field_strength:
        error = true
        toast.error("Please select body field strength!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      case rf_coils.length === 0 || !rf_coils.length:
        error = true
        toast.error("Please select Acceptable RF coils!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break
      case !exercise_type:
        error = true
        toast.error("Please add question exercise or parameters exercise!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        break

      // case !question:
      //   error = true
      //   toast.error("Please add pop-out question", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   })

      //   break
      case question && (!option1 || !option2 || !option3 || !option4):
        error = true
        toast.error("Pop-out question's  option filed is required", {
          position: toast.POSITION.TOP_RIGHT,
        })

        break
      case question && !correctAns:
        error = true
        toast.error("Pop-out question correct answer  missing ", {
          position: toast.POSITION.TOP_RIGHT,
        })

        break
      case exercise_type === "Question":
        if (
          !questionData ||
          !questionData.length ||
          questionData.length === 0
        ) {
          error = true
          toast.error("please add question!", {
            position: toast.POSITION.TOP_RIGHT,
          })
        } else {
          error = false
          data.questions = questionData
        }

        break
      case exercise_type === "Parameter":
        switch (true) {
          case !parameter_images1 || !parameter_images2 || !parameter_images3:
            error = true
            toast.error("Please upload three parameter images", {
              position: toast.POSITION.TOP_RIGHT,
            })
            break
          case !image_contrast:
            error = true
            toast.error("Please select image contrast", {
              position: toast.POSITION.TOP_RIGHT,
            })

            break
          case !pluse_sequence:
            error = true
            toast.error("Please select pluse sequence", {
              position: toast.POSITION.TOP_RIGHT,
            })

            break

          default:
            const margeData = leftSideData.map((el, index) => {
              return {
                ...leftSideData[index],
                ...RightSideData[index],
              }
            })
            margeData.forEach((x, index) => {
              switch (true) {
                case x.isInput && !x.inputValue:
                  error = true
                  toast.error(
                    `${x.default_level_parameter} filed is required`,
                    {
                      position: toast.POSITION.TOP_RIGHT,
                    }
                  )

                  break
                case x.hl &&
                  (!x.high_level_parameter_max_value ||
                    !x.high_level_parameter_min_value):
                  error = true
                  toast.error(
                    `${x.high_level_parameter} filed's min and max value is required`,
                    {
                      position: toast.POSITION.TOP_RIGHT,
                    }
                  )

                  break

                default:
                  break
              }
            })

            break
        }
        break

      default:
        break
    }
    console.log(question, "correctAns")

    if (!error) {
      //   setting  global value  that couldn't be changed by conditions
      data.activity_title = activity_title
      data.title = title
      data.introduction = introduction
      data.mode = mode
      data.body_parts = body_parts

      data.exercise_type = exercise_type
      data.field_strength = field_strength
      data.rf_coils = rf_coils
      data.document = activityData.document || 0
      data.popup_question = question
      data.popupq_yesno = question?.trim() ? "yes" : "no"
      data.popup_ans1 = option1
      data.popup_ans2 = option2
      data.popup_ans3 = option3
      data.popup_ans4 = option4
      data.popup_correct_ans = correctAns
      data.p_width = "0"
      data.p_height = "0"
      data.p_x = "0"
      data.p_y = "0"
      data.p_angle = "0"

      if (exercise_type === "Parameter") {
        data.p_width = imagePosition?.width
        data.p_height = imagePosition?.height
        data.p_x = imagePosition?.x
        data.p_y = imagePosition?.y
        data.p_angle = imagePosition?.rotation

        data.parameter_images = [
          parameter_images1,
          parameter_images2,
          parameter_images3,
        ]
        data.image_contrast = image_contrast
        data.pluse_sequence = pluse_sequence

        const margeData = leftSideData.map((el, index) => {
          return {
            ...leftSideData[index],
            ...RightSideData[index],
          }
        })
        data.parameters = margeData.map((x, index) => {
          return {
            parameter_default_hide_value: x.parameter_default_hide_value
              ? 1
              : 0,
            default_level_parameter: x.default_level_parameter || "0",
            default_level_parameter_values: x.inputValue
              ? `${x.inputValue} ${x.default_level_parameter_value}`
              : "0",
            high_level_parameter: x.high_level_parameter
              ? x.high_level_parameter
              : "0",
            high_level_parameter_max_value: x.high_level_parameter_max_value
              ? `${x.high_level_parameter_max_value} ${x.sLabel}`
              : "0",
            high_level_parameter_min_value: x.high_level_parameter_min_value
              ? `${x.high_level_parameter_min_value} ${x.sLabel}`
              : "0",
            high_level_parameter_hide_value: x.high_level_parameter
              ? x.high_level_parameter_hide_value
                ? 1
                : 0
              : "0",
          }
        })
      }

      try {
        const res = await post("/add-activity", data)

        console.log(res, "res")

        if (res) {
          toast.success("Successfully save your activity ", {
            position: toast.POSITION.TOP_RIGHT,
          })
        }

        setSaveActivityLoader(false)
      } catch (err) {
        console.log(err)

        toast.error("Server Error Try again later ", {
          position: toast.POSITION.TOP_RIGHT,
        })
        setSaveActivityLoader(false)
      }
    } else {
      setSaveActivityLoader(false)
    }
  }

  return (
    <div>
      <button
        disabled={saveActivityLoader}
        onClick={handelActivityDataSaveToDatabase}
        className="btn btn-primary btn-lg"
      >
        {saveActivityLoader ? "Saving..." : "Save"}
      </button>
    </div>
  )
}

export default FinalSubmitBtn
