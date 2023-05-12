import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Navbar } from "./index";
import { useSelector } from "react-redux";
import { fetchAll } from "../API/Contract.js";
import { Button, Dialog } from "@material-tailwind/react";

import { HiFilter, HiXCircle } from "react-icons/hi";
import { FaFileContract } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";

function Contrat() {
  const user = useSelector((state) => {
    return state.User;
  });
  const navigate = useNavigate();
  const [Contracts, setContracts] = useState([]);
  const [Branche, setBranche] = useState();
  useEffect(() => {
    async function F1() {
      const response = await fetchAll(); //"http://localhost:2500/getContracts

      setContracts(response.contracts);
      setBranche(response.b);
    }

    if (user.name != "") {
      F1();
    }
  }, []);
  return (
    <div className={"bg-blue-gray-50  h-screen "}>
      <Outlet />
      <Navbar />
      <div className="flex justify-center pt-10">
        <div className=" w-[90%]">
          <div className="flex justify-start w-[90%] mb-1">
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
              <tr className="bg-[#20c346] text-white font-bold border ">
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  N° Contrat
                </th>
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  type
                </th>
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  Date Debut
                </th>
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  date Fin
                </th>
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  Structer
                </th>
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  Branche
                </th>
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  validité
                </th>
                <th scope="col" className="px-6 py-4 border border-gray-400">
                  Avenant
                </th>
              </tr>
            </thead>
            <tbody>
              {Contracts.map((Contract, index) => (
                <tr
                  key={index}
                  className=" hover:bg-[#30ac32] border-y-[1px] border-gray-500 "
                >
                  <Link className=" font-medium table-cell  ">
                    {Contract.Ref_Contrar}
                  </Link>
                  <Link className="px-6 py-4 font-medium table-cell">
                    {Contract.type}
                  </Link>
                  <Link className="px-6 py-4 font-medium table-cell ">
                    {Contract.Date_Debut}
                  </Link>
                  <Link className="px-6 py-4 font-medium table-cell  ">
                    {Contract.Date_F}
                  </Link>
                  <Link className="px-6 py-4 font-medium table-cell  ">
                    {Contract.str}
                  </Link>
                  <Link className="px-6 py-4 font-medium table-cell  ">
                    {Branche}
                  </Link>
                  <td
                    className="px-6 py-4 font-medium  
                    flex justify-center
                   "
                  >
                    {Contract.validite ? (
                      <img
                        className="w-1 h-1 hover:bg-blue-gray-100"
                        src="/assets/valide.png"
                      ></img>
                    ) : (
                      <img
                        src="../assets/notvalide.png"
                        className="w-4 h-4 hover:bg-blue-gray-100"
                      ></img>
                    )}
                  </td>
                  <td className="px-6 py-1 font-medium  ">
                    {
                      <Button
                        variant="text"
                        color="red"
                        onClick={() => {
                          navigate(`/addavenant/${Contract.Id_Contrar}`);
                        }}
                      >
                        <MdModeEdit />
                      </Button>
                    }
                  </td>
                </tr>
              ))}
              <tr>
                <Link to="addcontract" className="table-cell  p-1 ">
                  <Button
                    color="green"
                    className="flex h-fit text-xs items-center p-2 my-1  gap-1 mx-auto"
                    variant="outlined"
                  >
                    <FaFileContract /> Add
                  </Button>
                </Link>
                <td />
                <td />
                <td />
                <td />

                <div className=" table-cell font-bold text-lg  col-span-2">
                  Total: <span className="font-body"> {Contracts.length}</span>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contrat;
