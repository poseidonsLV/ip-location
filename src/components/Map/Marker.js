import React from "react";
import Pin from "../../images/pin.png";

function Marker({ lat, lng, text }) {
  return (
    <div className="Marker">
      <img style={{ width: "50px" }} src={Pin} alt="Pin" />
    </div>
  );
}

export default Marker;
