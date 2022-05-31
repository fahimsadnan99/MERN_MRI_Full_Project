import { post } from "helpers/api_helper"
import ImagePosition from "page/ImagePosition"
import React, { useEffect, useState } from "react"
import Dropzone, { useDropzone } from "react-dropzone"
import { BsInfoCircle } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import ReactTooltip from "react-tooltip"
import { Input, Progress, Table } from "reactstrap"
import { setStoreActivity } from "./../../store/Activity/storeActivityData/actions"
import { ImageContrastData, parameterData, pluseSequenceData } from "./data"
import RightParameter from "./RightParameter"
import RightRadioContent from "./RightRadioContent"
import "./style.css"

const Parameter = () => {
  const [data, setData] = useState([...parameterData])
  const [selected, setSelected] = useState([])
  const [imageContrast, setImageContrast] = useState("")
  const [pluseSequence, setPluseSequence] = useState("")
  const [firstImage, setFirstImage] = useState([])
  const [secondImage, setSecondImage] = useState([])
  const [thirdImage, setThirdImage] = useState([])
  const [documentProgress, setDocumentProgress] = useState({
    percent: 0,
    totalSize: 0,
    loaded: 0,
    startUploading: false,
    fileNumber: "",
  })
  const dispatch = useDispatch()
  const activityData = useSelector(state => state.storeActivityData)
  //  const {RightSideData} = activityData
  // console.log(RightSideData);

  const setInputValue = (e, x) => {
    const index = data.indexOf(x)
    x.inputValue = e.target.value
    if (x.inputValue !== "") {
      data[index] = x
      setData([...data])
    }
  }

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: "image/*",
  })

  const selectedInfo = x => {
    const index = data.indexOf(x)

    if (index !== -1) {
      x.parameter_default_hide_value = !x.parameter_default_hide_value
      data[index] = x
      setData([...data])
    }
    data.forEach(item => {
      if (item.parameter_default_hide_value) {
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
  const handelImage = async (file, number) => {
    let checkFileSize = file.size / 1024
    let err = false

    if (checkFileSize > 1024 * 2) {
      err = true
      toast.error("image size is too large 2MB required!", {
        position: toast.POSITION.TOP_RIGHT,
      })

      switch (true) {
        case number === "1":
          setFirstImage([])
          break
        case number === "2":
          setSecondImage([])
          break
        case number === "3":
          setThirdImage([])
          break

        default:
          break
      }
    }

    if (!err) {
      let fromData = new FormData()
      fromData.append("file", file)

      const option = {
        onUploadProgress: progressEvent => {
          const { loaded, total } = progressEvent
          let percent = Math.floor((loaded * 100) / total)
          setDocumentProgress({
            ...documentProgress,
            loaded: loaded / 1024,
            percent: percent,
            totalSize: total / 1024,
            fileNumber: number,
          })
        },
      }

      try {
        const res = await post("/add-parameter-pics", fromData, option)

        if (res) {
          setDocumentProgress({
            ...documentProgress,
            percent: 0,
            totalSize: 0,
            startUploading: false,
            loaded: 0,
            fileNumber: number,
          })
          switch (true) {
            case number === "1":
              dispatch(setStoreActivity({ parameter_images1: res.file_link }))

              toast.success("Successfully save your first image ", {
                position: toast.POSITION.TOP_RIGHT,
              })
              break
            case number === "2":
              dispatch(setStoreActivity({ parameter_images2: res.file_link }))
              toast.success("Successfully save your second image ", {
                position: toast.POSITION.TOP_RIGHT,
              })
              break
            case number === "3":
              dispatch(setStoreActivity({ parameter_images3: res.file_link }))
              toast.success("Successfully save your third image ", {
                position: toast.POSITION.TOP_RIGHT,
              })
              break

            default:
              break
          }
        }
      } catch (err) {
        toast.error("fail to upload try again!", {
          position: toast.POSITION.TOP_RIGHT,
        })
        switch (true) {
          case number === "1":
            setFirstImage([])
            break
          case number === "2":
            setSecondImage([])
            break
          case number === "3":
            setThirdImage([])
            break

          default:
            break
        }
      }
    }
  }

  useEffect(() => {
    dispatch(setStoreActivity({ image_contrast: imageContrast }))
  }, [imageContrast])
  useEffect(() => {
    dispatch(setStoreActivity({ pluse_sequence: pluseSequence }))
  }, [pluseSequence])

  useEffect(() => {
    dispatch(
      setStoreActivity({
        leftSideData: [...data],
      })
    )
  }, [data])

  return (
    <>
      <div className="row mt-2 mb-3 justify-content-center align-items-center">
        <div className="col-md-4">
          <Dropzone
            onDrop={acceptedFiles => {
              setFirstImage(acceptedFiles[0])
              handelImage(acceptedFiles[0], "1")
            }}
            name="firstImage"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps({
                  className:
                    "dropzone col-xs-12 col-md-4 d-flex align-items-center justify-content-center",
                })}
                style={{
                  height: "150px",
                  width: "100%",
                  border: "1px solid black",
                }}
              >
                <input {...getInputProps()} />
                {firstImage.length === 0 ? (
                  <p className="text-center text-muted h5">
                    Drag & drop the images here,
                    <br /> or click to upload image
                  </p>
                ) : firstImage ? (
                  <img
                    src={URL.createObjectURL(firstImage)}
                    alt="Image"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <p>No Media</p>
                )}
              </div>
            )}
          </Dropzone>
          <div className="mt-2">
            {documentProgress.totalSize > 0 &&
            documentProgress.fileNumber === "1" ? (
              <Progress animated value={documentProgress.percent}>
                {documentProgress.percent + "%"}
              </Progress>
            ) : null}
          </div>
        </div>
        <div className="col-md-4">
          <Dropzone
            onDrop={acceptedFiles => {
              setSecondImage(acceptedFiles[0])
              handelImage(acceptedFiles[0], "2")
            }}
            name="secondImage"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps({
                  className:
                    "dropzone col-xs-12 col-md-4 d-flex align-items-center justify-content-center",
                })}
                style={{
                  height: "150px",
                  width: "100%",
                  border: "1px solid black",
                }}
              >
                <input {...getInputProps()} />
                {secondImage.length === 0 ? (
                  <p className="text-center text-muted h5">
                    Drag & drop the images here,
                    <br /> or click to upload image
                  </p>
                ) : secondImage ? (
                  <img
                    src={URL.createObjectURL(secondImage)}
                    alt="Image"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <p>No Media</p>
                )}
              </div>
            )}
          </Dropzone>
          <div className="mt-2">
            {documentProgress.totalSize > 0 &&
            documentProgress.fileNumber === "2" ? (
              <Progress animated value={documentProgress.percent}>
                {documentProgress.percent + "%"}
              </Progress>
            ) : null}
          </div>
        </div>
        <div className="col-md-4">
          <Dropzone
            onDrop={acceptedFiles => {
              setThirdImage(acceptedFiles[0])
              handelImage(acceptedFiles[0], "3")
            }}
            name="thirdImage"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps({
                  className:
                    "dropzone col-xs-12 col-md-4 d-flex align-items-center justify-content-center",
                })}
                style={{
                  height: "150px",
                  width: "100%",
                  border: "1px solid black",
                }}
              >
                <input {...getInputProps()} />
                {thirdImage.length === 0 ? (
                  <p className="text-center text-muted h5">
                    Drag & drop the images here,
                    <br /> or click to upload image
                  </p>
                ) : thirdImage ? (
                  <img
                    src={URL.createObjectURL(thirdImage)}
                    alt="Image"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <p>No Media</p>
                )}
              </div>
            )}
          </Dropzone>
          <div className="mt-2">
            {documentProgress.totalSize > 0 &&
            documentProgress.fileNumber === "3" ? (
              <Progress animated value={documentProgress.percent}>
                {documentProgress.percent + "%"}
              </Progress>
            ) : null}
          </div>
        </div>
      </div>

      {activityData?.parameter_images1 &&
      activityData?.parameter_images2 &&
      activityData?.parameter_images3 ? (
        <div className="row d-flex justify-content-center">
          <ImagePosition
            images1={activityData?.parameter_images1}
            images2={activityData?.parameter_images2}
            images3={activityData?.parameter_images3}
          />
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-5 offset-md-1 ">
          <Table>
            <thead>
              <tr>
                <th style={{ width: "20px" }}>Hide</th>
                <th>Parameter: Default Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x, index) => {
                return (
                  <tr key={x.id}>
                    <th scope="row">
                      <Input
                        onClick={() => selectedInfo(x)}
                        style={{ marginTop: "10%" }}
                        type="checkbox"
                      />
                    </th>
                    <td>
                      {x.default_level_parameter}
                      <a data-tip data-for={`${x.id}reactTooltrip`}>
                        <BsInfoCircle
                          style={{
                            position: "relative",
                            top: "-7px",
                            left: "5px",
                          }}
                        />
                      </a>
                      <ReactTooltip id={`${x.id}reactTooltrip`} effect="solid">
                        <div
                          style={{
                            width: "400px",
                            fontSize: "12px",
                            padding: "10px",
                            textAlign: "justify",
                            zIndex: "999",
                          }}
                        >
                          {x.des ? x.des : "this is tool trip data"}{" "}
                        </div>
                      </ReactTooltip>
                      {x.isInput && (
                        <Input
                          className="input-filed-custom-style"
                          type="text"
                          onChange={e => setInputValue(e, x)}
                        />
                      )}
                      {x.default_level_parameter_value &&
                        x.default_level_parameter_value}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
        <div className="col-md-6">
          <RightParameter />
          <RightRadioContent
            title="Image Contrast"
            checkBoxData={ImageContrastData}
            setAction={setImageContrast}
          />
          <RightRadioContent
            title="Pluse Sequence"
            checkBoxData={pluseSequenceData}
            setAction={setPluseSequence}
          />
        </div>
      </div>
    </>
  )
}

export default Parameter
