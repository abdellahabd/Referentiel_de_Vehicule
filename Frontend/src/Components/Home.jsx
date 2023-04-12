import React, { useState, useEffect } from "react";
import { fetchCars } from "../API/Cars.js";
function Home() {
  const [cars, setcars] = useState([]);
  useEffect(() => {
    fetchCars().then((cars) => {
      //   console.log(cars);
      setcars(cars);
    });
  }, []);
  return (

    <>
    {/* <Navbar/> */}
      <h1>My Data</h1>
      <ul>
        {cars.map((item) => (
          <li key={Math.random()}>{item.Cod_Viecule}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
