import { setStoreActivity } from "./../../store/Activity/storeActivityData/actions"
import { useDispatch } from "react-redux"
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { Input, Table } from "reactstrap"
import { checkBoxData } from "./Data"
const RightCheckBox = () => {
  const dispatch = useDispatch()
  const [checkboxValue, setCheckBoxValue] = useState([])
  const [radioValue, setRadioValue] = useState(null)

  useEffect(() => {
    dispatch(setStoreActivity({ rf_coils: [...checkboxValue] }))
  }, [checkboxValue])
  useEffect(() => {
    dispatch(setStoreActivity({ field_strength: radioValue }))
  }, [radioValue])

  return (
    <div className="row">
      <div className="col-8 d-flex justify-content-between">
        <strong> Field Strength : </strong>

        <div className="">
          <Input name="Strength" onClick={()=>dispatch(setStoreActivity({ field_strength: "1.5T" }))} className="modes-radio-button" type="radio" />
          <br />
          <label>1.5T </label>
        </div>
        <div className="">
          <Input name="Strength" onClick={ ()=>dispatch(setStoreActivity({ field_strength: "3.0T" }))}  className="modes-radio-button" type="radio" />
          <br />
          <label> 3.0T </label>
        </div>
      </div>

      <div className="col-12 mt-3">
        <strong>Acceptable RF coils:</strong>
      </div>

      <div className="col-11 offset-md-1">
        <Table>
          <tbody>
            {checkBoxData.map((x, index) => {
              return (
                <tr key={x.id}>
                  <td className="text-center">
                    <Input
                      onClick={e =>
                        setCheckBoxValue(data => [...data, e.target.value])
                      }
                      style={{ marginTop: "10%" }}
                      type="checkbox"
                      name={x.label.split(" ").join("_")}
                      value={x.label}
                      id={x.label.split(" ").join("_")}
                    />
                  </td>
                  <td style={{ cursor: "pointer" }} scope="row">
                    <label htmlFor={x.label.split(" ").join("_")}>
                      {x.label}
                    </label>{" "}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default RightCheckBox
