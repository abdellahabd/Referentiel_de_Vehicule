import React, { useEffect, useState } from "react";
import { fetchall, validate, removeuser } from "../API/User.js";
import { fetchallStr } from "../API/Structer.js";
import { AddUse, Navbar } from "./index";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  Badge,
  Alert,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { DataGrid, GridToolbar, GridOverlay } from "@mui/x-data-grid";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
function adminPage() {
  const [Users, setUsers] = useState([]);
  const [allStr, setallStr] = useState([]);
  const [open, setOpen] = useState(false);
  const [Branche, setBranche] = useState();
  const [isselect, setisselect] = useState({ id: "" });

  useEffect(() => {
    async function name() {
      const response = await fetchall();
      setBranche(response.b);
      setUsers(response.users);
      console.log(response.users);
      const strs = await fetchallStr();
      setallStr(strs);
    }

    name();
  }, [open]);

  return (
    <div className={"bg-blue-gray-50  h-screen "}>
      <Navbar />
      <div className={"flex  mt-7 "}>
        <div className="m-auto  w-[70em] lg:w-[95em]">
          <DataGrid
            className="w-full content-center"
            columns={[
              {
                field: "id",
                headerName: "Id",
                headerClassName: "table-th",
                width: "200",
                headerAlign: "center",
                align: "center",
              },
              {
                field: "name",
                headerName: "Nom",
                headerClassName: "table-th",
                width: "200",
                headerAlign: "center",
                align: "center",
              },
              {
                field: "prenom",
                headerName: "Prénom",
                headerClassName: "table-th",
                width: "200",
                headerAlign: "center",
                align: "center",
              },
              {
                field: "email",
                headerName: "Email",
                headerClassName: "table-th",
                width: "200",
                headerAlign: "center",
                align: "center",
              },

              {
                field: "Structer",
                headerName: "Structure",
                width: "200",
                flex: true,
                align: "center",
                headerAlign: "center",
                headerClassName: "table-th",
              },
              {
                field: "Branche",
                width: "200",
                flex: true,
                align: "center",
                headerAlign: "center",
                headerClassName: "table-th",
              },
              {
                field: "validite",
                headerName: "Validite",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                renderCell: (user) => {
                  if (user.row.valid) {
                    return (
                      <img
                        className="w-4 h-4 hover:bg-blue-gray-100"
                        src="/assets/valide.png"
                      ></img>
                    );
                  }
                  return (
                    <img
                      src="../assets/notvalide.png"
                      className="w-4 h-4 hover:bg-blue-gray-100"
                    ></img>
                  );
                },
              },
            ]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            slots={{
              // noResultsOverlay: CustomNoRowsOverlay,
              // noRowsOverlay: CustomNoRowsOverlay,
              toolbar: GridToolbar,
            }}
            onRowClick={(param) => {
              if (isselect.id === param.id) {
                setisselect({ id: "" });
              } else {
                setisselect(param.row);
              }
            }}
            rowSelectionModel={isselect.id != "" ? isselect.id : []}
            rowHeight={70}
            pageSizeOptions={[5, 10, 25]}
            rows={Users.map((user) => {
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                Structer: user.StructerCodeS,
                Branche: Branche,
                valid: user.validite,
                prenom: user.prenom,
              };
            })}
          />{" "}
          <div className="flex mt-1 gap-2 normal-case">
            <Link to="/admin/adduser">
              <Button
                sx={{ width: "fit-content", textTransform: "none" }}
                size="sm"
                variant="contained"
                // onClick={handleOpen}
                className="mt-2 flex items-center  "
              >
                {" "}
                <GrAdd color="green" /> User
              </Button>
            </Link>
            <span
              className={` flex gap-2` + (isselect.id === "" ? " hidden" : " ")}
            >
              <span
                className={
                  `flex gap-2` + (isselect.valid === true ? " hidden" : " ")
                }
              >
                <Button
                  sx={{ width: "fit-content", textTransform: "none" }}
                  // onClick={async () => {
                  //   setchanger(!changer);
                  //   const response = await validateCar(isselect.id);
                  //   if (response == "done") {
                  //     setisselect({ id: "" });
                  //     setopenSnackbarvalide(true);
                  //   }
                  // }}
                  variant="contained"
                  color="success"
                  className="w-fit mt-1 flex gap-2 items-center"
                  onClick={async () => {
                    await validate(isselect.id);
                    setOpen(!open);
                  }}
                  // sx={{ textTransform: "lowercase" }}
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Validé
                </Button>

                <Link to={`/admin/EditUser/${isselect.id}`}>
                  <Button
                    // onClick={handlereditingcars}
                    variant="contained"
                    color="inherit"
                    className="w-fit mt-1 flex gap-2 items-center"
                    // sx={{ display: isselect.id === "" ? "none" : "" }}
                  >
                    Modifiée
                  </Button>
                </Link>
                <Button
                  sx={{ width: "fit-content", textTransform: "none" }}
                  onClick={async () => {
                    await removeuser(isselect.id);
                    setOpen(!open);
                  }}
                  // onClick={async () => {
                  //   const responce = await removeCar(isselect.id);
                  //   setchanger(!changer);
                  //   if (responce == "done") {
                  //     setisselect({ id: "" });
                  //     setopenSnackbardelet(true);
                  //   }
                  // }}
                  color="error"
                  variant="contained"
                  className="w-fit mt-1 flex gap-2 items-center "
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Supprime
                </Button>
              </span>
              <span

              // className={`gap-2` + (isselect.valid != true ? " hidden" : " ")}
              ></span>
            </span>
          </div>
        </div>{" "}
      </div>
      {/* <Dialog maxWidth="xl" open={open} onClose={handleOpen} className="">
        <AddUse allStr={allStr} handelclose={handleOpen} />
      </Dialog> */}
      {/* <div className="flex justify-center pt-10">
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
                      {user.StructerCodeS}
                    </td>
                    <td className="px-6 py-4 border-y-[1px] border-gray-500">
                      {Branche}
                    </td>
                    
                  </tr>
             
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

        </div>
      </div> */}
      {/* <Dialog size="xl" open={open} handler={handleOpen} className="">
            <AddUse allStr={allStr} handelDialog={setOpen} />
          </Dialog> */}
    </div>
  );
}

export default adminPage;
