import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOne } from "../API/Cars.js";
import { DataGrid, GridOverlay, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  Snackbar,
  Alert,
  CircularProgress,
  Box,
  Divider,
} from "@mui/material";
import { BiExit } from "react-icons/bi";
import Edit_document from "./subComponents/Edit_document.jsx";
const CustemBox = ({ children }) => {
  return (
    <div className="relative border grid grid-cols-2 gap-4 border-[#d8d8d8] rounded-md pl-52 py-4 pt-10 mb-8 mt-14   text-gray-800">
      {children}
    </div>
  );
};
const CustimLabel = ({ children }) => {
  return (
    <label className="absolute top-[-13px] left-[-1rem] text-lg font-semibold text-[#4b5563] bg-[#fff] translate-x-1/2">
      {children}
    </label>
  );
};
function Vehicule_info() {
  const { id } = useParams();
  const [car, setcar] = useState(null);
  const [rowindex, setrowindex] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const [docement, setdocement] = useState([]);
  const [doc, setdoc] = useState();
  const handleRowMouseEnter = (index) => {
    if (rowindex === index) {
      setrowindex(null);
    } else {
      setrowindex(index);
      setdoc(docement[index]);
    }
  };

  const handlereditingDoc = () => {
    setisEdit(!isEdit);
  };
  useEffect(() => {
    async function name() {
      const responce = await fetchOne(id);
      setcar(responce);
      setdocement(responce.Document_bords);
    }
    name();
  }, [isEdit]);

  if (car == null) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress size={60} />
      </div>
    );
  }

  return (
    <div className={`border-2 rounded-md p-4 px-12 h-screen`}>
      <h1 className="text-2xl text-slate-800  font-semibold  text-center">
        Veicule : " {car.Code_Viecule}"
      </h1>
      <CustemBox>
        <CustimLabel>Détails :</CustimLabel>

        <p className="border-collapse">
          <span className="font-bold">Code :</span> {car.Code_Viecule}
        </p>
        <p className=" ">
          <span className="font-bold"> Matricule : </span>
          {car.Matricule}
        </p>
        <p className=" border-collapse">
          {" "}
          <span className="font-bold">Etate :</span> {car.state}
        </p>
        <p className=" ">
          {" "}
          <span className="font-bold"> Cylindree :</span> {car.modele.Cylindree}
        </p>
        {/* <div className="absolute w-1 "></div> */}
        <p className=" border-collapse">
          <span className="font-bold"> Boite de vitesse marque:</span>{" "}
          {car.modele.BV_marque}
        </p>
        <p className=" border-collapse">
          <span className="font-bold">Moteur type : </span>{" "}
          {car.modele.moteur_type}
        </p>
        <p className=" border-collapse">
          <span className="font-bold"> Moteur Puossance:</span>{" "}
          {car.modele.moteur_Puossance}
        </p>
        <p className=" border-collapse ">
          <span className="font-bold">Genre: </span> {car.modele.genre.name}
        </p>
      </CustemBox>
      <Divider />
      <div className="relative border  gap-4 border-[#d8d8d8] rounded-md pl-5 py-4 pt-10 mb-8 mt-14   text-gray-800">
        <label className="absolute top-[-13px] left-[-3.5rem] text-[#4b5563] font-semibold  bg-[#fff] translate-x-1/2">
          Documents de bord :
        </label>
        <table className="bg-white  border-collapse    text-center text-sm font-light w-[88%] shadow-sm shadow-gray-500 mt-1 ml-2 ">
          <thead>
            <tr className=" text-zinc-700 font-semibold">
              <th
                scope="col"
                className="bg-[#1089ff]"
                // className="px-6 py-4 border border-solid text-slate-800 "
              >
                {/* Nome */}
              </th>
              <th scope="col" className="px-6 py-4  border border-solid ">
                Numero
              </th>
              <th scope="col" className="px-6 py-4  border border-solid">
                date d'experation
              </th>

              {/* <th className="px-6 py-4">validite </th> */}
            </tr>
          </thead>
          <tbody>
            {car === null ? (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              car.Document_bords.map((Document, index) => (
                <tr
                  onClick={() => handleRowMouseEnter(index)}
                  key={index}
                  className=" hover:bg-[#3061ac]   border-gray-500 hover:scale-[1.015]  duration-300 hover:text-white ease-in relative cursor-pointer  "
                >
                  <td className="px-6 py-4 font-medium bg-[#1089ff] text-white  border border-solid  row-span-2">
                    {Document.nom}
                  </td>
                  <td className="px-6 py- border border-solid hover:border-sky-800 ">
                    {Document.numero == null ? "/" : Document.numero}
                  </td>
                  <td
                    className={
                      `px-6 py-4  border border-solid hover:border-0  hover:border-sky-800 ` +
                      (Document.valid ? "bg-green-200" : "bg-red-200")
                    }
                  >
                    {Document.date_Expiration == null
                      ? "/"
                      : Document.date_Expiration}
                  </td>
                  {/* <td className="px-6 py-4">{Document.type}</td> */}
                  {/* <td className="px-6 py-4 flex justify-center">
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
              </td> */}
                  <div
                    className={`absolute  top-2 right-2  transition  h-10 w-40  " ${
                      index === rowindex
                        ? " flex items-center gap-1 delay-200  duration-500 ease-in translate-x-[11rem] "
                        : "opacity-0"
                    }  `}
                  >
                    <Button
                      onClick={handlereditingDoc}
                      variant="outlined"
                      className="p-1"
                      disabled={index === rowindex ? false : true}
                    >
                      edit
                    </Button>
                    {/* <span>
                      <Button
                        onClick={handlereditingDoc}
                        variant="outlined"
                        color="success"
                        disabled={index === rowindex ? false : true}
                      >
                        Valide
                      </Button>
                    </span> */}
                  </div>
                </tr>
              ))
            )}

            <Dialog open={isEdit} onClose={handlereditingDoc}>
              <Edit_document onClose={handlereditingDoc} Doc={doc} />
            </Dialog>
            {/* <tr>
            <Button
              onClick={handleraddingcars}
              variant="outlined"
              className="w-fit mt-1 flex gap-2 items-center p-2"
            >
              <IoMdAddCircle />
              Ajoute Vehicle
            </Button>

            <td /> */}

            {/* <div className=" table-cell font-bold text-lg  col-span-2">
              Total: <span className="font-body"> {cars.length}</span>
            </div>
          </tr> */}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <Button
          variant="outlined"
          sx={{ width: "7rem" }}
          onClick={() => {
            history.back();
          }}
        >
          {" "}
          <BiExit size={30} color="#1089ff" />
        </Button>
      </div>
    </div>
  );
}

export default Vehicule_info;
