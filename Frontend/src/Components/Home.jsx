import React, { useState, useEffect } from "react";
import { fetchCars } from "../API/Cars.js";
import { Button, Dialog } from "@material-tailwind/react";
import { IoMdAddCircle } from "react-icons/io";
import { Navbar, Addcars } from "./index.jsx";

function Home() {
  const [isAddCars, setisAddCars] = useState(false);
  const [cars, setcars] = useState([]);

  const handleraddingcars = () => {
    setisAddCars(!isAddCars);
  };

  useEffect(() => {
    fetchCars().then((cars) => {
      setcars(cars);
    });
  }, []);
  return (
    <div className={"bg-blue-gray-50 h-screen "}>
      <Navbar />

      {/* <div>
        <ul>
          {cars.map((item) => (
            <li key={Math.random()}>{item.Cod_Viecule}</li>
          ))}
        </ul>
      </div> */}

      <div className={"flex  mt-7   " + (isAddCars ? "opacity-30" : "")}>
        <div className="m-auto sm:min-w-[80%]">
          <table className="bg-white  border-collapse   text-center text-sm font-light w-[90%] shadow-sm shadow-gray-500  ">
            <thead>
              <tr className="bg-[#1089ff] text-white font-bold">
                <th scope="col" className="px-6 py-4">
                  Code
                </th>
                <th scope="col" className="px-6 py-4">
                  Matricule
                </th>
                <th scope="col" className="px-6 py-4">
                  state
                </th>
                {/* <th scope="col" className="px-6 py-4">
                  Handle
                </th> */}
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr
                  key={car.Code_Viecule}
                  className=" hover:bg-[#3061ac] border-y-[1px] border-gray-500 "
                >
                  <td className="px-6 py-4 font-medium  ">
                    {car.Code_Viecule}
                  </td>
                  <td className="px-6 py-4 border-y-[1px] border-gray-500">
                    {car.Matricule}
                  </td>
                  <td className="px-6 py-4">{car.state}</td>
                </tr>
              ))}
              {/* <tr className=" hover:bg-[#0E1B2E] ">
                <td className="px-6 py-4 font-medium">1</td>
                <td className="px-6 py-4">Mark</td>
                <td className="px-6 py-4">Otto</td>
                <td className="px-6 py-4">@mdo</td>
              </tr>
              <tr className=" hover:bg-[#0E1B2E]">
                <td className=" px-6 py-4 font-medium">2</td>
                <td className=" px-6 py-4">Jacob</td>
                <td className=" px-6 py-4">Thornton</td>
                <td className=" px-6 py-4">@fat</td>
              </tr>
              <tr className="hover:bg-[#0E1B2E]">
                <td className=" px-6 py-4 font-medium">3</td>
                <td className=" px-6 py-4">Larry</td>
                <td className=" px-6 py-4">Wild</td>
                <td className=" px-6 py-4">@twitter</td>
              </tr> */}
            </tbody>
          </table>

          <Button
            onClick={handleraddingcars}
            variant="outlined"
            className="w-fit mt-1 flex gap-2 items-center p-2"
          >
            <IoMdAddCircle />
            Ajoute Vehicle
          </Button>
          <Dialog open={isAddCars} handler={handleraddingcars}>
            <div className="w-[30rem]">
              <Addcars />
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Home;
