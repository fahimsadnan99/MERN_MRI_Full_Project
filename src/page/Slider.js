/* eslint-disable react/prop-types */
import React from 'react';
import Slider2 from "react-slick";
import "./Parameter/style.css"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",width:"60px"}}
        onClick={onClick}
      />
    );
  }
const Slider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
      };
      const data=[1,2,3,4,5,6,7,8]
    return (
        <div className="a" style={{marginTop:"100px"}}>
             <div>
        <h2>Center Mode</h2>
        <Slider2  {...settings}>
            {
               data.map((x,index)=><>
               <div  style={{ height:"200px", marginRight:"10px", backgroundColor:"red"}} key={index}>
                    <h3>{x}</h3>
                  </div>
               
               
               </>)
            }
          
         
        </Slider2>
      </div>
        </div>
    );
};

export default Slider;