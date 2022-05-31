import React, { useState } from "react"
import ReactApexChart from "react-apexcharts"
import MetaTags from "react-meta-tags"
import { Link,useHistory } from "react-router-dom"

import { Col, Row, Card, CardBody, CardTitle, Container } from "reactstrap"
import { Button, CardFooter, UncontrolledTooltip } from "reactstrap"
import PieChart from "../pages/AllCharts/apex/PieChart"

const Dashboard = () => {
  const [drp_link, setdrp_link] = useState(false)
  const series = [76]
  const options = {
    chart: {
      height: 150,
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#556ee6"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
        },

        hollow: {
          size: "60%",
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "16px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    stroke: {
      dashArray: 3,
    },
    labels: ["Storage"],
  }
  const series1 = [{ name: "High - 2018", data: [26, 24, 32, 36, 33, 31, 33] }]
  const options1 = {
    chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
    colors: ["#556ee6", "#34c38f"],
    dataLabels: { enabled: !0 },
    stroke: { width: [3, 3], curve: "straight" },
    // title: { text: "Average High & Low Temperature", align: "left" },
    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#f1f1f1",
    },
    markers: { style: "inverted", size: 6 },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: { text: "Month" },
    },
    yaxis: { title: { text: "Number of Subscription" }, min: 5, max: 40 },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: !0,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
      },
    ],
  }
   const history =useHistory()
// redirect invoice route 
  const invoiceCreate=()=>{
     
     
   history.push("/invoices-detail")
      
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Row>
            <div className="button-items">
              <Button color="primary" className="btn-rounded w-lg">
               Title goes here
              </Button>
          
            </div>
          </Row>
       
          <Row className="mt-5">
           <Col sm="12" lg="4">
              <Card className="text-center " style={{ height: "20rem" }}>
                <CardBody>
                  <h5 className="font-size-15 mb-4">Total  User</h5>
                  <div>
                    <ReactApexChart
                      options={options}
                      series={series}
                      type="radialBar"
                      height={400}
                      className="apex-charts"
                    />
                    <p className="text-muted mt-4">
                      2234
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="text-center" style={{ height: "20rem" }}>
                <CardBody>
                  <h5 className="font-size-15 mb-4">Subscription</h5>
                  <div>
                    <ReactApexChart
                      options={options1}
                      series={series1}
                      type="line"
                      height={250}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" lg="4">
              <Card className="text-center " style={{ height: "20rem" }}>
                <CardBody>
                  <h5 className="font-size-15 mb-4">Total  User</h5>
                  <div>
                 
                  <PieChart />
            
                    <p className="text-muted mt-4">
                      2234
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
