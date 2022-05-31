import React from "react"
import { Table, Label, Input } from "reactstrap"
import "./style.css"
import TopInput from "./TopInput"
import Elements from "./Elements"

const RiteAdvantage = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mt-5 pt-5">
        <TopInput />
      </div>
      <div className="row">
            <Elements/>
      </div>
    </div>
  )
}

export default RiteAdvantage
