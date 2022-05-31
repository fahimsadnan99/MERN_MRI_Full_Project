import React, { useState,useEffect } from "react"
import { Table, Label, Input } from "reactstrap"
import { rightData } from "./data"
import { useDispatch, useSelector } from "react-redux"
import { setStoreActivity } from "./../../store/Activity/storeActivityData/actions"
const RightParameter = () => {
  const [data, setData] = useState([...rightData])

  const [selected, setSelected] = useState([])
   const dispatch = useDispatch()
    const activityData = useSelector(state => state.storeActivityData)

  const sethigh_level_parameter_max_value = (e, x) => {
    const index = data.indexOf(x)
    x.high_level_parameter_max_value = e.target.value
    if (x.high_level_parameter_max_value !== "") {
      data[index] = x
      setData([...data])
    }
  }

  const sethigh_level_parameter_min_value = (e, x) => {
    const index = data.indexOf(x)
    x.high_level_parameter_min_value = e.target.value
    if (x.high_level_parameter_min_value !== "") {
      data[index] = x
      setData([...data])
    }
  }

  const selectedInfo = x => {
    const index = data.indexOf(x)

    if (index !== -1) {
      x. high_level_parameter_hide_value = !x. high_level_parameter_hide_value
      data[index] = x
      setData([...data])
    }

    data.forEach(item => {
      if (item. high_level_parameter_hide_value) {
        let index = selected.indexOf(item)

        if (index === -1) {
          setSelected([...selected, item])
        }
      } else {
        let index = selected.indexOf(item)
        if (index !== -1) {
          let findIndex = selected.indexOf(item)
          selected.splice(findIndex, 1)
          setSelected([...selected])
        }
      }
    })
  }
useEffect(()=>{
 
    dispatch(setStoreActivity({
      RightSideData : [...data]
     
    }))

  },[data])
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Heigh-Level Parameters</th>
            <th colSpan='2' style={{paddingLeft: '84px'}}>Limits</th>
            <th>Hide and Don&apos;t grade</th>
          </tr>
          <tr>
            <th></th>
            <th className="w-25">Max</th>
            <th className="w-25">Min</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => {
            return (
              <tr key={x.id}>
                <td scope="row">{x. high_level_parameter}</td>

                <td>
                  {x.isInputMax && (
                    <Input
                      id="input-filed-custom-style-min-max"
                      type="text"
                      onChange={e => sethigh_level_parameter_max_value(e, x)}
                    />
                  )}
                  {x.sLabel && x.sLabel}
                </td>

                <td>
                  {x.isInputMin && (
                    <Input
                      id="input-filed-custom-style-min-max"
                      type="text"
                      onChange={e => sethigh_level_parameter_min_value(e, x)}
                    />
                  )}
                  {x.sLabel && x.sLabel}
                </td>

                <td className="text-center">
                  <Input
                    onClick={() => {selectedInfo(x)
                    console.log(x)
                    
                     }}
                    style={{ marginTop: "10%" }}
                    type="checkbox"
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default RightParameter
