/* eslint-disable react/prop-types */
import React from "react"
import { Alert } from "reactstrap"

const ResultNotFound = ({ selectedActivity, activityResult }) => {
  return (
    <div className="card p-3 shadow-lg">
      <div>
        <strong className="perameterResultTitle">Simulation Name:</strong>
        <span> {selectedActivity?.activity_title} </span>{" "}
      </div>

      <Alert color="danger" className="my-5">
        <p>
          <strong className="perameterResultTitle">
            {activityResult?.message}
          </strong>{" "}
        </p>
      </Alert>
    </div>
  )
}

export default ResultNotFound
