import React, { useState, useEffect } from "react";
import { fetchCars, validateCar, removeCar } from "../API/Cars.js";
import { Button, Dialog } from "@material-tailwind/react";
import { IoMdAddCircle } from "react-icons/io";
import { HiFilter } from "react-icons/hi";
import { Navbar, Addcars, Editcar } from "./index.jsx";
import ReactPaginate from "react-paginate";

function Home() {
  const [isAddCars, setisAddCars] = useState(false);
  const [iseditcar, setiseditcar] = useState(false);
  const [cars, setcars] = useState([]);
  const [editcar, seteditcar] = useState();
  const [rowindex, setrowindex] = useState(null);
  const [changer, setchanger] = useState(0);
  // for pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = cars.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cars.length / 10);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % cars.length;
    setItemOffset(newOffset);
  };

  /////////////////////
  const handleraddingcars = () => {
    setisAddCars(!isAddCars);
  };
  const handlereditingcars = () => {
    setiseditcar(!iseditcar);
  };

  const handleRowMouseEnter = (index) => {
    seteditcar(cars[index]);
    if (rowindex === index) {
      setrowindex(null);
    } else {
      setrowindex(index);
    }
  };

  const handelvalideClick = () => {};

  useEffect(() => {
    fetchCars().then((cars) => {
      setcars(cars);
    });
  }, [changer]);

  return (
    <div className={"bg-blue-gray-50  min-h-screen "}>
      <Navbar />

      <div className={"flex  mt-7 "}>
        <div className="m-auto sm:min-w-[80%]">
          <div className="flex justify-start w-[90%] mb-2 ">
            <Button
              className="flex items-center p-3"
              variant="outlined"
              color="gray"
            >
              <HiFilter /> Filter
            </Button>
          </div>
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
                <th scope="col" className="px-6 py-4">
                  type
                </th>
                <th className="px-6 py-4">validite </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((car, index) => (
                <tr
                  onClick={() => handleRowMouseEnter(index)}
                  key={car.Code_Viecule}
                  className=" hover:bg-[#3061ac] border-y-[1px] border-gray-500 hover:scale-[1.015]  duration-300 hover:text-white ease-in relative cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium  ">
                    {car.Code_Viecule}
                  </td>
                  <td className="px-6 py-4 border-y-[1px] border-gray-500">
                    {car.Matricule}
                  </td>
                  <td className="px-6 py-4">{car.state}</td>
                  <td className="px-6 py-4">{car.type}</td>
                  <td className="px-6 py-4 flex justify-center">
                    {car.validite ? (
                      <img
                        className="w-4 h-4 hover:bg-blue-gray-100"
                        src="/assets/valide.png"
                      ></img>
                    ) : (
                      <img
                        src="../assets/notvalide.png"
                        className="w-4 h-4 hover:bg-blue-gray-100"
                      ></img>
                    )}
                  </td>
                  <div
                    className={`absolute  top-2 right-2  transition  h-10 w-40  " ${
                      index === rowindex
                        ? " flex items-center gap-1 delay-200  duration-500 ease-in translate-x-[11rem] "
                        : "opacity-0"
                    }  `}
                  >
                    <Button
                      onClick={async () => {
                        setchanger(!changer);
                        const response = await validateCar(car.Code_Viecule);
                        console.log(response);
                      }}
                      size="sm"
                      color="light-green"
                      variant="outlined"
                      className="p-1 "
                      disabled={index === rowindex ? false : true}
                    >
                      Validé
                    </Button>
                    <Button
                      onClick={handlereditingcars}
                      variant="outlined"
                      size="sm"
                      color="indigo"
                      className="p-1 "
                      disabled={index === rowindex ? false : true}
                    >
                      edit
                    </Button>

                    <Button
                      onClick={async () => {
                        setchanger(!changer);
                        const response = await removeCar(car.Code_Viecule);
                        console.log(response);
                      }}
                      size="sm"
                      color="red"
                      variant="outlined"
                      className="p-1 "
                      disabled={index === rowindex ? false : true}
                    >
                      Remove
                    </Button>
                  </div>
                </tr>
              ))}
              <tr>
                <Button
                  onClick={handleraddingcars}
                  variant="outlined"
                  className="w-fit mt-1 flex gap-2 items-center p-2"
                >
                  <IoMdAddCircle />
                  Ajoute Vehicle
                </Button>

                <td />

                <div className=" table-cell font-bold text-lg  col-span-2">
                  Total: <span className="font-body"> {cars.length}</span>
                </div>
              </tr>
            </tbody>
          </table>

          <ReactPaginate
            className="flex gap-20 justify-center"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
          <Dialog open={iseditcar} handler={handlereditingcars}>
            <Editcar c={editcar} handler={handlereditingcars} />
          </Dialog>

          <Dialog open={isAddCars} handler={handleraddingcars}>
            <Addcars type="propre" handelclose={handleraddingcars} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Home;
