import { setStoreActivity } from './../../store/Activity/storeActivityData/actions';
import { useDispatch } from 'react-redux';
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from "react"
import { Table, Label, Input } from "reactstrap"

const RightRadioContent = ({ checkBoxData, setAction, title }) => {

 



  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <Table>
          <thead>
            <tr>
              <th colSpan="2">{title}</th>
            </tr>
          </thead>
          <tbody>
            {checkBoxData.map((x, index) => {
              return (
                <tr key={x.id}>
                  <td scope="row">{x.label}</td>

                  <td className="text-center">
                    <Input
                      onClick={e => setAction(x.label)}
                      style={{ marginTop: "10%" }}
                      type="radio"
                      name={title.split(" ").join("_")}
                      value={x.label}
                    />
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

export default RightRadioContent
