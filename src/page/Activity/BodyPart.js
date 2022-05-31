import { Table ,Input} from 'reactstrap';
import { useDispatch } from 'react-redux';
import React,{useState,useEffect} from 'react';
import { radioData } from './Data';
import { setStoreActivity } from './../../store/Activity/storeActivityData/actions';

const BodyPart = () => {
  const [radioValue,setRadioValue]=useState()
  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(setStoreActivity({body_parts:radioValue}))
     
  },[radioValue])
    return (
        <>
             
        <strong>Body Part:</strong>
    

       <div className="col-sm-3 col-6">
       <Table>
         
         <tbody>
           {radioData.slice(0,6).map((x, index) => {
             return (
               <tr key={x.id}>
                    <td className="text-center">
                   <Input
                     onClick={e => setRadioValue(e.target.value)}
                     style={{ marginTop: "10%" }}
                     type="radio"
                     name="radio_body_Part"
                     value={x.label}
                   />
                 </td>
                 <td scope="row">{x.label}</td>

                
               </tr>
             )
           })}
         </tbody>
       </Table>

       </div>
       <div className="col-sm-3 col-6">

       <Table>
         
         <tbody>
           {radioData.slice(6,11).map((x, index) => {
             return (
               <tr key={x.id}>
                    <td className="text-center">
                   <Input
                     onClick={e => setRadioValue(e.target.value)}
                     style={{ marginTop: "10%" }}
                     type="radio"
                     name="radio_body_Part"
                     value={x.label}
                   />
                 </td>
                 <td scope="row">{x.label}</td>

                
               </tr>
             )
           })}
         </tbody>
       </Table>

       </div>
       <div className="col-sm-3 col-6">
       <Table>
         
         <tbody>
           {radioData.slice(11,16).map((x, index) => {
             return (
               <tr key={x.id}>
                    <td className="text-center">
                   <Input
                     onClick={e => setRadioValue(e.target.value)}
                     style={{ marginTop: "10%" }}
                     type="radio"
                     name="radio_body_Part"
                     value={x.label}
                   />
                 </td>
                 <td scope="row">{x.label}</td>

                
               </tr>
             )
           })}
         </tbody>
       </Table>

       </div>
       <div className="col-sm-3 col-6">

       <Table>
         
         <tbody>
           {radioData.slice(16,21).map((x, index) => {
             return (
               <tr key={x.id}>
                    <td className="text-center">
                   <Input
                     onClick={e => setRadioValue(e.target.value)}
                     style={{ marginTop: "10%" }}
                     type="radio"
                     name="radio_body_Part"
                     value={x.label}
                   />
                 </td>
                 <td scope="row">{x.label}</td>

                
               </tr>
             )
           })}
         </tbody>
       </Table>

       </div>
            
        </>
    );
};

export default BodyPart;