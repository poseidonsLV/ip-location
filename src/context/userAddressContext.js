import React, { useState, createContext } from "react";

export const UserAddressContext = createContext();

export const UseAddressProvider = (props) => {
  const [uIP, setUIP] = useState("");

  return (
    <UserAddressContext.Provider value={[uIP, setUIP]}>
      {props.children}
    </UserAddressContext.Provider>
  );
};
