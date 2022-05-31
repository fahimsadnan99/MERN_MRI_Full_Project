/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchActivityResult } from "./../../store/Activity/getActivityResult/actions"
import { fetchAllActivity } from "./../../store/Activity/getAllActivity/actions"
import PerameterType from "./PerameterType"
import QuestionType from "./QuestionType"
import "./style.css"

const ActivityResult = () => {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllActivity())
  }, [])

  useEffect(() => {
    let studentId = 1
    if (selectedActivity) {
      dispatch(fetchActivityResult(selectedActivity.id, studentId))
    }
  }, [selectedActivity])

  const { activities, A_loading } = useSelector(state => {
    return {
      activities: state.allActivity.activities,
      A_loading: state.allActivity.loading,
    }
  })

  const { R_error, R_loading, activityResult } = useSelector(state => {
    return {
      R_error: state.ActivityResult.err,
      R_loading: state.ActivityResult.loading,
      activityResult: state.ActivityResult.activityResult,
    }
  })

  if (A_loading) {
    return (
      <div className="row" style={{ marginTop: "100px" }}>
        <div
          style={{ height: "70vh" }}
          className="col-12 d-flex justify-content-center align-items-center "
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="a" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-3">
            <h1 className="activity_result_heding text-center"> Activities</h1>
            <div className="activityListContainer">
              {activities.map((activity, index) => {
                return (
                  <p
                    onClick={() => {
                      setSelectedActivity(activity)
                    }}
                    className={
                      selectedActivity?.id === activity.id
                        ? "text-center my-2  active text-capitalize"
                        : "text-center my-2   text-capitalize"
                    }
                    key={index}
                  >
                    {" "}
                    <strong> {activity.activity_title}</strong>
                  </p>
                )
              })}
            </div>
          </div>

          {selectedActivity && (
            <div className="col-md-8 ">
              {R_loading ? (
                <div
                  style={{ height: "30vh" }}
                  className="col-md-8 d-flex justify-content-center align-items-center "
                >
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : selectedActivity.exercise_type === "Parameter" ? (
                <PerameterType
                  activityResult={activityResult}
                  selectedActivity={selectedActivity}
                  R_loading={R_loading}
                />
              ) : (
                <QuestionType
                  activityResult={activityResult}
                  selectedActivity={selectedActivity}
                  R_loading={R_loading}
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ActivityResult
