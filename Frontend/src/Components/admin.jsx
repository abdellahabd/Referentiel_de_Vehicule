import React, { useEffect, useState } from "react";
import { fetchall } from "../API/User.js";
import { fetchallStr } from "../API/Structer.js";
import { AddUse, Navbar } from "./index";
import {
  Button,
  Dialog,
  Card,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";
import { GrAdd } from "react-icons/gr";
function adminPage() {
  const [Users, setUsers] = useState([]);
  const [allStr, setallStr] = useState([]);
  const [open, setOpen] = useState(false);
  const [Branche, setBranche] = useState();
  useEffect(() => {
    async function name() {
      const response = await fetchall();
      response(response.b);
      setUsers(response.users);
      const strs = await fetchallStr();
      setallStr(strs);
    }

    name();
  }, [open]);
  const handleOpen = () => setOpen(!open);
  return (
    <div className={"bg-blue-gray-50  h-screen "}>
      <Navbar />
      <div className="flex justify-center pt-10">
        <div className=" w-[90%]">
          <table className="bg-white  border-collapse   text-center text-sm font-light w-[90%] shadow-sm shadow-gray-500  ">
            <thead>
              <tr className="bg-[#1089ff] text-white font-bold">
                <th scope="col" className="px-6 py-4">
                  Compte
                </th>
                <th scope="col" className="px-6 py-4">
                  name & prenome
                </th>
                <th scope="col" className="px-6 py-4">
                  Srtucter
                </th>

                <th scope="col" className="px-6 py-4">
                  branche
                </th>
              </tr>
            </thead>
            <tbody>
              {Users.length > 0 &&
                Users.map((user, index) => (
                  <tr
                    key={index}
                    className=" hover:bg-[#3061ac] border-y-[1px] border-gray-500 "
                  >
                    <td className="px-6 py-4 font-medium  ">{user.email}</td>
                    <td className="px-6 py-4 border-y-[1px] border-gray-500">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 border-y-[1px] border-gray-500">
                      {user.Structerid}
                    </td>
                    <td className="px-6 py-4 border-y-[1px] border-gray-500">
                      {user.branche}
                    </td>
                    {/* <td className="px-6 py-4">{user.Accesses[0].name}</td> */}
                  </tr>
                ))}
              <tr>
                <div className="px-3 p-1">
                  <Button
                    size="sm"
                    onClick={handleOpen}
                    className="mt-2 flex items-center  "
                  >
                    <GrAdd color="green" /> User
                  </Button>
                </div>
                <td />
                <td />

                <div className=" table-cell font-bold text-lg  col-span-2">
                  Total: <span className="font-body"> {Users.length}</span>
                </div>
              </tr>
            </tbody>
          </table>

          <Dialog size="xl" open={open} handler={handleOpen} className="">
            <AddUse allStr={allStr} handelDialog={setOpen} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default adminPage;
