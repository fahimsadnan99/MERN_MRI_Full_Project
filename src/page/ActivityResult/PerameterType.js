/* eslint-disable react/prop-types */
import React from "react"
import { Row } from "reactstrap"
import ResultError from "./ResultError"
import ResultNotFound from "./ResultNotFound"

const PerameterType = ({ selectedActivity, activityResult }) => {
  if (activityResult?.status == 0) {
    return (
      <ResultNotFound
        selectedActivity={selectedActivity}
        activityResult={activityResult}
      />
    )
  } else if (activityResult?.status == 1) {
    return (
      <Row className="card p-3">
        <div className="col-12 d-flex justify-content-around">
          <div>
            {" "}
            <strong className="perameterResultTitle">
              {" "}
              Simulation Name:{" "}
            </strong>{" "}
            <span> {selectedActivity?.activity_title} </span>{" "}
          </div>
          <div>
            {" "}
            <strong className="perameterResultTitle">
              {" "}
              Total Score:{" "}
            </strong>{" "}
            <span> 80 </span>{" "}
          </div>
        </div>

        <div className="col-12 py-3">
          <div className="row">
            <div className="col-md-7">
              <div className="my-2">
                <p>
                  <strong className="perameterResultTitle"> SNR: </strong>{" "}
                  {activityResult?.result?.SNR}{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">CNR: </strong>{" "}
                  {activityResult?.result?.CNR}{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">Resolution: </strong>{" "}
                  {activityResult?.result?.Resolution}{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">Scan Time: </strong>{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">
                    Temporal Resolution:{" "}
                  </strong>{" "}
                  {activityResult?.result?.TemporalResolution}{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">
                    Image Contrast:
                  </strong>{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">SAR : </strong>{" "}
                  {activityResult?.result?.SAR}{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">SED : </strong>{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">B1+rms : </strong>{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">PNS : </strong>{" "}
                </p>
                <p>
                  <strong className="perameterResultTitle">Artifacts : </strong>{" "}
                </p>
              </div>
            </div>

            <div
              style={{ height: "300px", float: "left" }}
              className="col-md-5 border border-primary"
            ></div>
          </div>
        </div>

        <div className="col-12 ">
          <p className="perameterResultTitle text-center"> Comments </p>

          <textarea className="w-100 form-control shadow" rows="5">
            {" "}
          </textarea>
        </div>
      </Row>
    )
  } else {
    return <ResultError />
  }
}

export default PerameterType
