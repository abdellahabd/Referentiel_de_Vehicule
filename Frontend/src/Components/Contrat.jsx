import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./index";
import {} from "../API/Cars.js";

function Contrat() {
  const [cars, setcars] = useState([]);
  useEffect(() => {
    // fetchCars().then((cars) => {
    //   setcars(cars);
    // });
  }, []);
  return (
    <div className={"bg-white h-screen "}>
      <Navbar />
    </div>
  );
}

export default Contrat;
