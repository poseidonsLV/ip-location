import React, { useContext, useEffect, useState } from "react";
import { UserAddressContext } from "../../context/userAddressContext";
import "../../styles/Header/header.css";
function Header() {
  const [uIP, setUIP] = useContext(UserAddressContext);
  const [inputIP, setInputIP] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=acb01e9412df4184975b20b7b29b18f1&ip_address=${uIP}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [uIP]);

  return (
    <div className="header">
      <div className="header-title">
        <h1>IP Address Tracker</h1>
      </div>
      <div className="header-address-form">
        <input
          onChange={(e) => setInputIP(e.target.value)}
          type="text"
          name="ip"
          placeholder="Search for any IP address"
        />
        <button onClick={() => setUIP(inputIP)}></button>
      </div>
      <div className="aboutAddress">
        <div className="aboutAddress-ip">
          <p>IP ADDRESS</p>
          <h2>{data.ip_address || "Not Found"}</h2>
        </div>
        <div className="aboutAddress-country">
          <p>Location</p>
          <h2>{data.country || "Not Found"}</h2>
        </div>
        <div className="aboutAddress-timezone">
          <p>Timezone</p>
          <h2>
            {(data.timezone &&
              data.timezone.abbreviation + "+" + data.timezone.gmt_offset) ||
              "Not Found"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
