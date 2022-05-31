import React from 'react';
import { Table, Label, Input } from "reactstrap"
const TopInput = () => {
    return (
        <>
         <div className="col-md-3">
          <div className="first-wrapper">
            <p>
              <strong> SAR: </strong>

              <Input className="input-filed-custom-style" type="text" />
              <strong> W/Kg </strong>
            </p>
            <p>
              <strong> SED: </strong>
              <Input className="input-filed-custom-style" type="text" />
              <strong> J/Kg</strong>
            </p>
            <p>
              <strong> B1+rms: </strong>

              <Input className="input-filed-custom-style" type="text" />
              <strong> &mu;T</strong>
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="second-wrapper">
            <p>
              <strong> Scan Time: </strong>

              <Input className="input-filed-custom-style" type="text" />
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <p>
            <strong> Resolution: </strong>

            <Input
              className="input-filed-custom-style Resolution"
              type="text"
            />
            <strong>x </strong>
            <Input
              className="input-filed-custom-style Resolution"
              type="text"
            />
            <strong> x</strong>
            <Input
              className="Resolution input-filed-custom-style"
              type="text"
            />
          </p>
        </div>
        <div className="col-md-3">
          <strong> SNR</strong>
          <Input className=" input-filed-custom-style" type="text" />
        </div>
            
        </>
    );
};

export default TopInput;