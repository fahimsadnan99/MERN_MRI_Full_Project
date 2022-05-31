import React from "react"
import { Alert } from "reactstrap"

const ResultError = () => {
  return (
    <div className="card p-3  shadow-lg">
      <Alert color="danger" className="my-5">
        {" "}
        <p>
          <strong className="perameterResultTitle pt-2">
            Something went wrong! try another activity
          </strong>{" "}
        </p>{" "}
      </Alert>
    </div>
  )
}

export default ResultError
