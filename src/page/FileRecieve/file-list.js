// import React, { useEffect, useState } from "react"
// import MetaTags from "react-meta-tags"
// import { Link, withRouter,useHistory } from "react-router-dom"
// import { map } from "lodash"
// import { isEmpty } from "lodash"
// import * as moment from "moment"
// import {
//   Badge,
//   Col,
//   Container,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Row,
//   Table,
//   Button,
//   UncontrolledDropdown,
//   UncontrolledTooltip,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Spinner,
//   Input,
//   Card,
//   CardBody,
//   CardFooter,
// } from "reactstrap"
// import { AvForm, AvField } from "availity-reactstrap-validation"
// import img1 from "../../assets/images/users/avatar-1.jpg"

// //Import Breadcrumb
// import Breadcrumbs from "components/Common/Breadcrumb"

// //Import Image
// import images from "assets/images"
// import companies from "assets/images/companies"

// import {
//   getProjects as onGetProjects,

//   updateProject as onUpdateProject,
//   deleteProject as onDeleteProject,
// } from "store/actions"

// //redux
// import { useSelector, useDispatch } from "react-redux"

// const FileRecieve = props => {
//   const dispatch = useDispatch()

//   const { projects } = useSelector(state => ({
//     projects: state.projects.projects,
//   }))
//   const [modal, setModal] = useState(false)
//   const [isEdit, setIsEdit] = useState(false)
//   const [projectList, setProjectList] = useState([])
//   const [modal_center, setmodal_center] = useState(false)
//   const [confirm_otp, setconfirm_otp] = useState(false)
//   const [sent_otp, setsent_otp] = useState(false)

//   const toggle = () => {
//     setModal(!modal)
//   }

//   const onSubmitOtp = () => {
//     setTimeout(() => {
//       setconfirm_otp(!confirm_otp)
//     }, 2000)
//   }

//   const handleProjectClick = arg => {
//     const project = arg

//     setProjectList({
//       id: project.id,
//       img: project.img,
//       name: project.name,
//       description: project.description,
//       status: project.status,
//       color: project.color,
//       dueDate: project.dueDate,
//       team: project.team,
//     })

//     setIsEdit(true)

//     toggle()
//   }

//   const handleDeleteProject = project => {
//     dispatch(onDeleteProject(project))
//   }

//   /**
//    * Handling submit project on project form
//    */
//   const handleValidProjectSubmit = (e, values) => {
//     if (isEdit) {
//       const updateProject = {
//         id: projectList.id,
//         img: values.img,
//         name: values.name,
//         description: values.description,
//         status: values.status,
//         color: values.color,
//         dueDate: values.dueDate,
//         team: values.team,
//       }

//       // update project
     
//     } else {
//       const newProject = {
//         id: Math.floor(Math.random() * (30 - 20)) + 20,
//         name: values["name"],
//         description: values["description"],
//         status: values["status"],
//         color: values["color"],
//         dueDate: values["dueDate"],
//         team: values["team"],
//       }
//       // save new project
     
//     }
//     toggle()
//   }

//   useEffect(() => {
    
//   }, [dispatch])

//   useEffect(() => {
//     setProjectList(projects)
//   }, [projects])

//   useEffect(() => {
//     if (!isEmpty(projects)) {
//       setProjectList(projects)
//     }
//   }, [projects])

//   function removeBodyCss() {
//     document.body.classList.add("no_padding")
//   }
//   function tog_center() {
//     setmodal_center(!modal_center)
//     removeBodyCss()
//     setTimeout(() => {
//       setsent_otp(!sent_otp)
//       setconfirm_otp(false)
//     }, 2000)
//   }

//   const handleValidDate = date => {
//     const date1 = moment(new Date(date)).format("DD MMM Y")
//     return date1
//   }

//   // redirect to invoice page 
//   const history=useHistory()

//   const invoicePage=()=>{
//     history.push("/invoices-detail")
 
  

//   }


//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <MetaTags>
//           <title>File Recieve</title>
//         </MetaTags>
//         <Container fluid>
//           {/* Render Breadcrumbs */}
//           {/* <Breadcrumbs title="Projects" breadcrumbItem="Projects List" /> */}
//           <Row>
       
//        {
//          [1,2,3,4,5,6,6,6,6,6,1,1,1,1,].map((x,index)=>   <Col key={index} sm="12" lg="2">
//          <Card className="text-center" style={{ height: "auto" }}>
//            <CardBody>
//            <img src="https://image.freepik.com/free-vector/white-blurred-background_1034-249.jpg" alt="" className="img-fluid card-img-top">

//            </img>
//            <CardFooter>
//              <span>Date:20-12-21 </span>
//              <span>total :555 </span>
//              </CardFooter>
          
//            </CardBody>
        
//          </Card>
//        </Col>)
//        }
//           </Row>
         
         
//           <Row>
//             <Col xs="12">
//               <div className="text-center my-3">
//                 <Link to="#" className="text-success">
//                   <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
//                   Load more
//                 </Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   )
// }

// export default withRouter(FileRecieve)
