import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getbyid } from "../API/Contract.js";
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
    <div className="relative border  border-[#d8d8d8] rounded-md  pt-10 mb-8 mt-14   text-gray-800">
      {children}
    </div>
  );
};
const CustimLabel = ({ children }) => {
  return (
    <label className="absolute top-[-13px] left-[-3rem] text-lg font-semibold text-[#4b5563] bg-[#fff] translate-x-1/2">
      {children}
    </label>
  );
};

function Contrat_info() {
  const navogate = useNavigate();
  const { id } = useParams();
  const [contract, setcontract] = useState([]);
  const [Contrat_v, setContrat_v] = useState([]);
  const [Contrat_CHF, setContrat_CHF] = useState([]);
  const [Contrat_R, setContrat_R] = useState([]);
  useEffect(() => {
    async function name() {
      const responce = await getbyid(id);
      console.log(responce);
      setcontract(responce);
      setContrat_R(responce.Relation_S_Ds);
      setContrat_CHF(responce.chauffeurs);
      setContrat_v(responce.vehicules);
    }
    name();
  }, []);

  if (contract.length == 0) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress size={60} />
      </div>
    );
  }

  return (
    <div className={`border-2 rounded-md p-4 px-12 min-h-screen h-fit`}>
      <h1 className="text-2xl text-slate-800  font-semibold  text-center">
        Contrat : " {contract.Ref_Contrar}"
      </h1>
      <CustemBox>
        <CustimLabel>Détails Contrat :</CustimLabel>
        <Divider>
          <p className="text-lg text-slate-800">Contrat</p>
        </Divider>
        <div
          className="grid grid-cols-2 gap-4
pl-52 py-4"
        >
          <p className="border-collapse">
            <span className="font-bold">N° Cintrat :</span>{" "}
            {contract.Ref_Contrar}
          </p>
          <p className=" ">
            <span className="font-bold"> Type : </span>
            {contract.type}
          </p>
          <p className=" border-collapse">
            {" "}
            <span className="font-bold">Date de Début:</span>{" "}
            {contract.Date_Debut}
          </p>
          <p className=" ">
            {" "}
            <span className="font-bold"> date de Fin :</span> {contract.Date_F}
          </p>

          <p className=" border-collapse">
            <span className="font-bold">Structures :</span>{" "}
            {contract.StructerCodeS}
          </p>
        </div>
        <Divider>
          <p className="text-lg text-slate-800">Transporteur</p>
        </Divider>
        <div className="grid grid-cols-2 gap-4 pl-52 py-4">
          <p className="border-collapse">
            <span className="font-bold">N° Cintrat :</span>{" "}
            {contract.transporteur.name}
          </p>
          <p className=" ">
            <span className="font-bold"> Type : </span>
            {contract.transporteur.Adress}
          </p>
          <p className=" ">
            <span className="font-bold"> Type : </span>
            {contract.transporteur.telephone}
          </p>
        </div>
      </CustemBox>
      {/* 
      <CustemBox>
        <CustimLabel>Transporteur : </CustimLabel>

 
      </CustemBox> */}
      <div className="relative border  gap-4 border-[#d8d8d8] rounded-md pl-5 py-4 pt-10 mb-8 mt-14   text-gray-800">
        <label className="absolute top-[-13px] left-[-3.5rem] text-[#4b5563] font-semibold  bg-[#fff] translate-x-1/2">
          List de Vehicules ( {Contrat_v.length} ):
        </label>
        {Contrat_v.length == 0 && (
          <p className="text-center font-semibold text-lg">
            Aucun véhicule n’est associé à ce contrat
          </p>
        )}
        {!(Contrat_v.length == 0) && (
          <ul>
            {Contrat_v.map((car) => (
              <li
                onClick={() => {
                  navogate(`/Vehicule/savoir_plus/${car.id}`);
                }}
                className="text-center bg-gradient-to-r w-8/12 m-auto rounded-lg my-3 text-lg py-1  text-gray-200 from-[#1089ff] via-[#3d85cc] to-[#193561]  cursor-pointer hover:scale-105 duration-150 ease-in"
                key={car.id}
              >
                {car.Code_Viecule}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative border  gap-4 border-[#d8d8d8] rounded-md pl-5 py-4 pt-10 mb-8 mt-14   text-gray-800">
        <label className="absolute top-[-13px] left-[-3.5rem] text-[#4b5563] font-semibold  bg-[#fff] translate-x-1/2">
          List de Chauffeur ( {Contrat_CHF.length} ):
        </label>
        {Contrat_CHF.length == 0 && (
          <p className="text-center font-semibold text-lg">
            Aucun Chauffeur n’est associé à ce contrat
          </p>
        )}
        {!(Contrat_CHF.length == 0) && (
          <ul>
            {Contrat_v.map((chf) => (
              <li
                // onClick={() => {
                //   navogate(`/Vehicule/savoir_plus/${car.id}`);
                // }}
                className="text-center bg-gradient-to-r w-8/12 m-auto rounded-lg my-3 text-lg py-1  text-gray-200 from-[#1089ff] via-[#3d85cc] to-[#193561]  cursor-pointer hover:scale-105 duration-150 ease-in"
                key={chf.id_chf}
              >
                {chf.Matricule}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative border  gap-4 border-[#d8d8d8] rounded-md pl-5 py-4 pt-10 mb-8 mt-14   text-gray-800">
        <label className="absolute top-[-13px] left-[-3.5rem] text-[#4b5563] font-semibold  bg-[#fff] translate-x-1/2">
          List de Relations ( {Contrat_R.length} ):
        </label>
        {Contrat_R.length == 0 && (
          <p className="text-center font-semibold text-lg">
            Aucun Relations n’est associé à ce contrat
          </p>
        )}
        {!(Contrat_CHF.length == 0) && (
          <ul>
            {Contrat_R.map((relation) => (
              <li
                // onClick={() => {
                //   navogate(`/Vehicule/savoir_plus/${car.id}`);
                // }}
                className="text-center bg-gradient-to-r w-8/12 m-auto rounded-lg my-3 text-lg py-1  text-gray-200 from-[#1089ff] via-[#3d85cc] to-[#193561]  cursor-pointer hover:scale-105 duration-150 ease-in"
                key={relation.id}
              >
                {relation.id}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <table className="bg-white  border-collapse    text-center text-sm font-light w-[88%] shadow-sm shadow-gray-500 mt-1 ml-2 ">
      <thead>
        <tr className=" text-zinc-700 font-semibold">
          <th
            scope="col"
            className="bg-[#1089ff]"
    
          >
       
          </th>
          <th scope="col" className="px-6 py-4  border border-solid ">
            Numero
          </th>
          <th scope="col" className="px-6 py-4  border border-solid">
            date d'experation
          </th>

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
                  (Document.valid ? "bg-green-500" : "text-red-600")
                }
              >
                {Document.date_Expiration == null
                  ? "/"
                  : Document.date_Expiration}
              </td>
    
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
                <span>
                  <Button
                    onClick={handlereditingDoc}
                    variant="outlined"
                    color="success"
                    disabled={index === rowindex ? false : true}
                  >
                    Valide
                  </Button>
                </span>
              </div>
            </tr>
          ))
        )}

      </tbody>
    </table> */}

      <Link to="/contrats" className="flex justify-center mb-10">
        <Button variant="outlined" sx={{ width: "7rem" }}>
          {" "}
          <BiExit size={30} color="#1089ff" />
        </Button>
      </Link>
    </div>
  );
}

export default Contrat_info;

//   const { id } = useParams();
//   const [car, setcar] = useState(null);
//   const [rowindex, setrowindex] = useState(null);
//   const [isEdit, setisEdit] = useState(false);
//   const [docement, setdocement] = useState([]);
//   const [doc, setdoc] = useState();
