import React, { useState } from "react";
import { Addcars } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { addcars, removecar, submitContrat } from "../../Store/index";
import {
  Input,
  Button,
  Card,
  Dialog,
  DialogFooter,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { postContart } from "../../API/Contract.js";

function AddContract() {
  const Dispatch = useDispatch();
  const Contract_cars = useSelector((state) => {
    return state.Contract_cars;
  });

  const [ContratDate, setContratDate] = useState({
    numero: "",
    type: "",
    Date_D: "",
    Date_F: "",
  });

  const [isAddCars, setisAddCars] = useState(false);

  const [car, setcar] = useState({
    Code_Viecule: "",
    Matricule: "",
    state: "",
  });

  ///

  ///.
  const handleraddingcars = () => {
    setisAddCars(!isAddCars);
  };

  const handelChangeValues = (e) => {
    setcar((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };
  const handelContratfromsubmit = () => {};

  const handelContratdatachange = (e) => {
    setContratDate((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className={
        "bg-[#f3f3fe] h-screen w-screen p-10 " +
        (isAddCars ? "opacity-[0.1] " : "")
      }
    >
      {/* form for add contract */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(ContratDate);
          // Dispatch(submitContrat);
          const response = await postContart(ContratDate, Contract_cars);
        }}
        className="bg-[#ffffff]  m-auto shadow-sm max-w-3xl shadow-gray-500 flex flex-col items-center gap-10 min-h-[50rem] w-full relative"
      >
        <div className="p-8 w-full border-b-[1px] border-gray-300 text-center ">
          <h2 className="text-2xl    font-semibold">ADD Contrat </h2>
        </div>

        <div className="w-2/6">
          <Input
            label="N°:"
            name="numero"
            type="number"
            onChange={handelContratdatachange}
          />
        </div>

        <div className="w-2/6 flex flex-col gap-2">
          <h6 className="text-[#607d8b]">type</h6>
          <select
            defaultValue="gree a gree"
            className="border-[#607d8b] border rounded-md  w-full h-5/6"
            name="type"
            onChange={handelContratdatachange}
          >
            <option value="gree a gree">gree a gree</option>
            <option value="consultation"> consulataton</option>
          </select>
        </div>

        <div className="w-2/6">
          <Input
            type="date"
            label="Date debut"
            name="Date_D"
            onChange={handelContratdatachange}
          />
        </div>
        <div className="w-2/6">
          <Input
            type="date"
            label="Date fin"
            name="Date_F"
            onChange={handelContratdatachange}
          />
        </div>
        {/* list of contract'cars */}
        <div className="w-11/12 border-[1px] border-gray-200 relative flex flex-col items-end gap-1 ">
          <table className="w-full m-auto text-left border-collapse   border-slate-500">
            <thead>
              <tr>
                <th>delete</th>
                <th>Edit</th>
                <th>Code Vehicule</th>
                <th>Matricule</th>
                <th>state</th>
              </tr>
            </thead>
            <tbody className="border-b-2">
              {Contract_cars.map((car) => (
                <tr
                  className="border-b-[1px]  border-gray-300"
                  key={car.Code_Viecule}
                >
                  <td>
                    <MdOutlineRemoveCircle
                      color="red"
                      className="cursor-pointer"
                      onClick={() => {
                        Dispatch(removecar(car.Code_Viecule));
                      }}
                    />
                  </td>
                  <td>
                    <GrEdit className="text-deep-orange-300" />
                  </td>
                  <td className="">{car.Code_Viecule}</td>
                  <td className="">{car.Matricule}</td>
                  <td className="">{car.state}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* popup for add car
           */}
          <Button
            size="sm"
            color="green"
            variant="outlined"
            className="text-[#16aa52]  p-1 normal-case  flex items-center gap-1"
            onClick={handleraddingcars}
          >
            Vehicule
            <MdAdd />
          </Button>
          <Dialog open={isAddCars} handler={handleraddingcars}>
            <div className="w-[30rem]">
              <Card className="">
                <form className="w-[60%] m-auto">
                  <Input
                    label="Code"
                    type="text"
                    name="Code_Viecule"
                    onChange={handelChangeValues}
                  />
                  <Input
                    label="Matricule"
                    type="text"
                    name="Matricule"
                    onChange={handelChangeValues}
                  />
                  <Input
                    label="state"
                    type="text"
                    name="state"
                    onChange={handelChangeValues}
                  />
                  <Button
                    onClick={() => {
                      Dispatch(addcars(car));
                      handleraddingcars();
                    }}
                  >
                    Ajoute
                  </Button>
                </form>
              </Card>
            </div>
          </Dialog>
        </div>

        <div className="mb-auto flex gap-3">
          <Link to="/contrats">
            <Button color="gray" variant="outlined" className="text-gray-700">
              Annule
            </Button>
          </Link>

          <Button color="light-green" className="bg-[#16aa52] " type="submit">
            Ajoute
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddContract;
