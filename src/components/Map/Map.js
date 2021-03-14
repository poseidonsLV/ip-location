import React, { useContext, useEffect, useState } from "react";
import "../../styles/Map/Map.css";
import GoogleMapReact from "google-map-react";
import { UserAddressContext } from "../../context/userAddressContext";
import Marker from "./Marker";

function Map() {
  const [uIP] = useContext(UserAddressContext);
  const [coords, setCoords] = useState({});
  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=acb01e9412df4184975b20b7b29b18f1&ip_address=${uIP}`
      )
        .then((res) => res.json())
        .then((res) => setCoords({ lat: res.latitude, lng: res.longitude }));
    }, 1000);
  }, [uIP]);

  return (
    <div style={{ height: "100%", width: "100%" }} className="Map">
      <GoogleMapReact center={coords || { lat: 60, lng: 50 }} zoom={18}>
        <Marker lat={coords.lat} lng={coords.lng} />
      </GoogleMapReact>
    </div>
  );
}
export default Map;
