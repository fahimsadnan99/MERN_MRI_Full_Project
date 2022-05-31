import React, { useEffect, useRef, useState } from "react"
import { Layer, Stage } from "react-konva"
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { setStoreActivity } from "./../store/Activity/storeActivityData/actions"
import "./imagePosition.css"
import Rectangle from "./Rectangle"

const ImagePosition = ({ images1, images2, images3 }) => {
  const layerRef = useRef()
  const dispatch = useDispatch()

  const initialRectangles = [
    {
      x: 27,
      y: 159,
      width: 200,
      height: 200,

      stroke: "yellow",

      id: 1,
      rotation: 0,
    },
  ]
  const initialRectangles2 = [
    {
      x: 159,
      y: 27,
      width: 200,
      height: 200,

      stroke: "yellow",

      id: 2,
      rotation: 0,
    },
  ]
  const initialRectangles3 = [
    {
      x: 159,
      y: 27,
      width: 200,
      height: 200,

      stroke: "yellow",

      id: 2,
      rotation: 0,
    },
  ]
  const [rectangles, setRectangles] = useState(initialRectangles)
  const [selectedId, selectShape] = useState(null)
  const [secondBox, setSecondBox] = useState(initialRectangles2)
  const [thirdBox, setThirdBox] = useState(initialRectangles3)

  const checkDeselect = e => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage()
    if (clickedOnEmpty) {
      selectShape(null)
    }
  }

  useEffect(() => {
    console.log(rectangles, "rectangles")
    dispatch(setStoreActivity({ imagePosition: rectangles[0] }))
  }, [rectangles])
  console.log(rectangles, secondBox, "check 1 and 2nd calculation ")
  return (
    <React.Fragment>
      <div className="col-md-6 col-xl-4 justify-content-center">
        <div
          className="my-2 p_relative"
          style={{
            height: "300px",
            border: "1px solid black",
            borderRadius: "6px",
            maxWidth: "300px",
          }}
        >
          <strong className="p_absolute first_direction">H </strong>
          <strong className="p_absolute second_direction">P </strong>
          <strong className="p_absolute third_direction"> F</strong>
          <strong className="p_absolute fourth_direction"> A</strong>
          <div
            style={{
              backgroundImage: `url(${images1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
            }}
          >
            <Stage
              width={300}
              height={300}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer ref={layerRef}>
                {rectangles.map((rect, i) => {
                  return (
                    <Rectangle
                      key={i}
                      shapeProps={rect}
                      isSelected={rect.id === selectedId}
                      onSelect={() => {
                        selectShape(rect.id)
                      }}
                      onChange={newAttrs => {
                        const prev = rectangles[i]
                        const rects = rectangles.slice()
                        rects[i] = newAttrs
                        const xdev = rects[i].x - prev.x
                        const ydev = rects[i].y - prev.y
                        console.log("x :", xdev, "y: ", ydev)
                        var theta = Math.atan2(ydev, xdev) // range (-PI, PI]
                        theta *= 180 / Math.PI // rads to degs, range (-180, 180]
                        if (theta < 0) theta = 360 + theta
                        console.log(rects, "rects")
                        setRectangles(rects)
                        setThirdBox([
                          {
                            ...thirdBox[0],
                            width: rects[i].width,
                            height: rects[i].height,
                          },
                        ])

                        setSecondBox([
                          {
                            ...secondBox[0],
                            rotation: rects[i].rotation,
                            x: rects[i].y,
                            y: rects[i].x,
                            width: rects[i].height,
                            height: rects[i].width,
                          },
                        ])
                      }}
                      onMouseOut={e => {
                        // var transform = layerRef.current.getAbsoluteTransform().copy();
                        // // to detect relative position we need to invert transform
                        // transform.invert();
                        // // now we find relative point
                        // const pos = e.target.getStage().getPointerPosition();
                        // var position = transform.point(pos);
                        var position = e.target.getStage().getAngle()
                        console.log(position)
                      }}
                    />
                  )
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-4  justify-content-center">
        <div
          className="my-2 p_relative"
          style={{
            height: "300px",
            border: "1px solid black",
            borderRadius: "6px",
            maxWidth: "300px",
          }}
        >
          <strong className="p_absolute first_direction">A </strong>
          <strong className="p_absolute second_direction">L </strong>
          <strong className="p_absolute third_direction"> P</strong>
          <strong className="p_absolute fourth_direction"> R</strong>
          <div
            style={{
              backgroundImage: `url(${images2})`,
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
            }}
          >
            <Stage
              width={300}
              height={300}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer ref={layerRef}>
                {secondBox.map((rect, i) => {
                  return (
                    <Rectangle
                      key={i}
                      shapeProps={rect}
                      isSelected={rect.id === selectedId}
                      onSelect={() => {
                        selectShape(rect.id)
                      }}
                      onChange={newAttrs => {
                        console.log(rectangles)
                        const prev = rectangles[i]
                        const rects = rectangles.slice()
                        rects[i] = newAttrs
                        const xdev = rects[i].x - prev.x
                        const ydev = rects[i].y - prev.y
                        console.log("x :", xdev, "y: ", ydev)
                        var theta = Math.atan2(ydev, xdev) // range (-PI, PI]
                        theta *= 180 / Math.PI // rads to degs, range (-180, 180]
                        if (theta < 0) theta = 360 + theta
                        console.log(theta)
                        setRectangles([
                          {
                            ...rectangles[0],
                            x: rects[i].y,
                            rotation: rects[i].rotation,
                            y: rects[i].x,
                            width: rects[i].height,
                            height: rects[i].width,
                          },
                        ])
                        setSecondBox(rects)
                        setThirdBox([
                          {
                            ...thirdBox[0],
                            width: rects[i].height,
                            height: rects[i].width,
                          },
                        ])
                      }}
                      onMouseOut={e => {
                        // var transform = layerRef.current.getAbsoluteTransform().copy();
                        // // to detect relative position we need to invert transform
                        // transform.invert();
                        // // now we find relative point
                        // const pos = e.target.getStage().getPointerPosition();
                        // var position = transform.point(pos);
                        var position = e.target.getStage().getAngle()
                        console.log(position)
                      }}
                    />
                  )
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-xl-4 d-flex justify-content-center">
        <div
          className="my-2 p_relative"
          style={{
            height: "300px",
            border: "1px solid black",
            borderRadius: "6px",
            maxWidth: "300px",
          }}
        >
          <strong className="p_absolute first_direction">H </strong>
          <strong className="p_absolute second_direction">L </strong>
          <strong className="p_absolute third_direction"> F</strong>
          <strong className="p_absolute fourth_direction"> R</strong>
          <div
            style={{
              backgroundImage: `url(${images3})`,
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
            }}
          >
            <Stage
              width={300}
              height={300}
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
            >
              <Layer ref={layerRef}>
                {thirdBox.map((rect, i) => {
                  return (
                    <Rectangle
                      key={i}
                      shapeProps={rect}
                      isSelected={rect.id === selectedId}
                      onSelect={() => {
                        selectShape(rect.id)
                      }}
                      onChange={newAttrs => {
                        const prev = rectangles[i]
                        const rects = rectangles.slice()
                        rects[i] = newAttrs
                        const xdev = rects[i].x - prev.x
                        const ydev = rects[i].y - prev.y
                        console.log("x :", xdev, "y: ", ydev)
                        var theta = Math.atan2(ydev, xdev) // range (-PI, PI]
                        theta *= 180 / Math.PI // rads to degs, range (-180, 180]
                        if (theta < 0) theta = 360 + theta
                        console.log(rects, "rects")
                        setThirdBox(rects)
                      }}
                      onMouseOut={e => {
                        // var transform = layerRef.current.getAbsoluteTransform().copy();
                        // // to detect relative position we need to invert transform
                        // transform.invert();
                        // // now we find relative point
                        // const pos = e.target.getStage().getPointerPosition();
                        // var position = transform.point(pos);
                        var position = e.target.getStage().getAngle()
                        console.log(position)
                      }}
                    />
                  )
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ImagePosition
