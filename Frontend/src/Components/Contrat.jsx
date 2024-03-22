import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Navbar } from "./index";
import { useSelector } from "react-redux";
import { fetchAll, validateContract, removeContract } from "../API/Contract.js";
import {
  Button,
  Dialog,
  Badge,
  Alert,
  Box,
  Menu,
  MenuItem,
  Snackbar,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { FaFileContract } from "react-icons/fa";

import { MdModeEdit } from "react-icons/md";

function Contrat() {
  const user = useSelector((state) => {
    return state.User;
  });
  const [isselect, setisselect] = useState({ id: "" });
  const navigate = useNavigate();
  const [Contracts, setContracts] = useState([]);
  const fakecontract = [
    {
      id: 1,
      Ref_Contrar: "",
      type: "",
      Dated: "",
      datef: "",
      Structer: "",
      Branche: "",
      valid: "",
    },
    {
      id: 2,
      Ref_Contrar: "",
      type: "",
      Dated: "",
      datef: "",
      Structer: "",
      Branche: "",
      valid: "",
    },
  ];
  const [Branche, setBranche] = useState();
  const [openSnackbar, setopenSnackbar] = useState(false);
  const [change, setchange] = useState(false);
  ////////////////////////fro Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  /////////////////////////////fro warning
  const [filter, setfilter] = useState([false, false, false]);
  const [expired, setexpired] = useState([]);
  const [expire10, setexpire10] = useState([]);
  const [expire45, setexpire45] = useState([]);
  const [iswarning, setiswarning] = useState(true);
  const currentDate = new Date();
  useEffect(() => {
    async function F1() {
      const response = await fetchAll(); //"http://localhost:2500/getContracts

      setContracts(response.contracts);

      setBranche(response.b);
      setexpired(response.exp);
      setexpire10(response.exp10);
      setexpire45(response.exp45);
      ///////////////for counte warning
    }

    if (user.name != "") {
      F1();
    }
  }, [change]);
  return (
    <div className={"bg-blue-gray-50  h-screen "}>
      <Outlet />
      <Navbar />

      <div className={"flex  mt-7 relative"}>
        <div className="left-0 absolute top-0"></div>
        <div className="m-auto sm:min-w-[80%]">
          <Badge
            badgeContent={
              open ? 0 : expired.length + expire10.length + expire45.length
            }
            color="error"
          >
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              color="warning"
              sx={{ width: "9rem", marginY: "0.2rem" }}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <img
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-aria-expanded={open ? "true" : undefined}
                // onClick={(e) => {
                //   setAnchorEl(e.currentTarget);
                // }}
                className="w-6 h-6 hover:bg-blue-gray-100 cursor-pointer"
                src="/assets/warning.png"
              ></img>
            </Button>
          </Badge>
          {iswarning && (
            <>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                  setAnchorEl(null);
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setfilter([false, false, false]);
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Tout
                </MenuItem>
                <MenuItem
                  sx={{
                    // width: {20},
                    bgcolor: "#dfdd5f",
                    display: "flex",
                    color: "#4b5563",
                    justifyContent: "space-between",
                  }}
                  onClick={() => {
                    setfilter([true, false, false]);
                  }}
                >
                  expirer dans 45 jours{" "}
                  <span className="bg-[#32373c] rounded-full w-4 text-xs h-5 flex justify-center items-center text-white">
                    {expire45.length}
                  </span>
                </MenuItem>
                <MenuItem
                  sx={{
                    bgcolor: "#f1c235",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#4b5563",
                  }}
                  onClick={() => {
                    setfilter([false, true, false]);
                  }}
                >
                  expirer dans 10 jours{" "}
                  <span className="bg-[#32373c] rounded-full w-4 text-xs h-5 flex justify-center items-center text-white">
                    {expire10.length}
                  </span>
                </MenuItem>
                <MenuItem
                  sx={{
                    bgcolor: "#ff6c65",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#4b5563",
                  }}
                  onClick={() => {
                    setfilter([false, false, true]);
                  }}
                >
                  expiré{" "}
                  <span className="bg-[#32373c] rounded-full w-4 text-xs h-5 flex justify-center items-center text-white">
                    {expired.length}
                  </span>
                </MenuItem>
              </Menu>
            </>
          )}
          <div className="w-[90em] max-w-[85em] ">
            <DataGrid
              className=" content-center "
              columns={[
                {
                  field: "Ref_Contrar",
                  headerName: "N° Contrat",
                  headerClassName: "table-th",
                  width: "180",
                  headerAlign: "center",
                  align: "center",
                  disableColumnMenu: true,
                  renderCell: (modele) => {
                    return (
                      <Link
                        className="font-semibold w-full text-center"
                        to={`savoir_plus/${modele.row.Ref_Contrar}`}
                      >
                        {modele.row.Ref_Contrar}
                      </Link>
                    );
                  },
                },
                {
                  field: "type",
                  headerName: "Type",
                  width: "180",
                  align: "center",
                  headerAlign: "center",
                  headerClassName: "table-th",
                  disableColumnMenu: true,
                },
                {
                  field: "Dated",
                  headerName: " Date Debut",
                  width: "180",
                  headerClassName: "table-th",
                  headerAlign: "center",
                  align: "center",
                  disableColumnMenu: true,
                },
                {
                  field: "datef",
                  headerName: " Date Fin",
                  headerClassName: "table-th",
                  headerAlign: "center",
                  align: "center",
                  width: "180",
                  disableColumnMenu: true,
                  cellClassName: (params) => {
                    const targetDate = new Date(params.value);
                    if (targetDate < currentDate) {
                      return "expired";
                    }
                    const daysDifference = Math.round(
                      (currentDate - targetDate) / (1000 * 60 * 60 * 24)
                    );
                    if (daysDifference <= 10) {
                      return "expire10";
                    }
                    if (daysDifference <= 45) {
                      return "expire20";
                    }
                    return "";
                  },
                },
                {
                  field: "Structer",
                  headerName: "Structure",
                  width: "169",
                  // flex: true,
                  align: "center",
                  headerAlign: "center",
                  headerClassName: "table-th",
                  disableColumnMenu: true,
                },
                {
                  field: "Branche",
                  width: "169",
                  // flex: true,
                  align: "center",
                  headerAlign: "center",
                  headerClassName: "table-th",
                  disableColumnMenu: true,
                },
                {
                  field: "validite",
                  headerName: "Validite",
                  width: "150",
                  align: "center",
                  // flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  disableColumnMenu: true,
                  renderCell: (contrat) => {
                    if (contrat.row.valid) {
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
                {
                  field: "avnenat",
                  headerName: "Avnenat",
                  width: "150",
                  align: "center",
                  // flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  disableColumnMenu: true,
                  renderCell: (pama) => {
                    return (
                      <Button
                        variant="text"
                        onClick={() => {
                          console.log();
                          if (!pama.row.valid) {
                            setopenSnackbar(true);
                          } else {
                            navigate(`/addavenant/${pama.row.Ref_Contrar}`);
                          }
                        }}
                      >
                        <MdModeEdit />
                      </Button>
                    );
                  },
                },
              ]}
              slots={{
                toolbar: GridToolbar,
              }}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              scrollbarSize={0}
              pageSizeOptions={[5, 10, 25]}
              onRowClick={(param) => {
                // console.log(param.row);
                if (isselect.id === param.id) {
                  setisselect({ id: "" });
                } else {
                  setisselect(param.row);
                }
              }}
              loading={Contracts.length == 0 ? true : false}
              rows={
                Contracts.length === 0
                  ? fakecontract
                  : (filter[2]
                      ? expired
                      : filter[1]
                      ? expire10
                      : filter[0]
                      ? expire45
                      : Contracts
                    ).map((contract) => {
                      return {
                        id: contract.Ref_Contrar,
                        Ref_Contrar: contract.Ref_Contrar,
                        type: contract.type,
                        Dated: contract.Date_Debut,
                        datef: contract.Date_F,
                        Structer: contract.StructerCodeS,
                        Branche: Branche,
                        valid: contract.validite,
                      };
                    })
              }
              rowSelectionModel={isselect.id != "" ? isselect.id : []}
            />
          </div>
          <div className="flex mt-1 gap-2 ">
            <Link to="/contract/addcontract">
              <Button
                sx={{
                  width: "fit-content",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
                variant="contained"
              >
                <FaFileContract /> Ajouter
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
                  onClick={async () => {
                    setchange(!change);
                    const response = await validateContract(isselect.id);
                    console.log(response);
                    if (response == "done") {
                      // setisselect({ id: "" });
                      // setopenSnackbarvalide(true);
                    }
                  }}
                  variant="contained"
                  color="success"
                  className="w-fit mt-1 flex gap-2 items-center"
                  // sx={{ textTransform: "lowercase" }}
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Valider
                </Button>
                <Button
                  // onClick={handlereditingcars}
                  onClick={() => {
                    navigate(`/contract/edit_Contrat/${isselect.id}`);
                  }}
                  variant="contained"
                  color="inherit"
                  className="w-fit mt-1 flex gap-2 items-center"
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                  sx={{ width: "fit-content", textTransform: "none" }}
                >
                  Modifier
                </Button>
              </span>
              <span
                className={`gap-2` + (isselect.valid != true ? " hidden" : " ")}
              >
                <Button
                  sx={{ width: "fit-content", textTransform: "none" }}
                  // onClick={handleraffictioncar}
                  variant="contained"
                  color="inherit"
                  className="w-fit mt-1 flex gap-2 items-center"
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Affecter
                </Button>
              </span>
              <Button
                sx={{ width: "fit-content", textTransform: "none" }}
                onClick={async () => {
                  const responce = await removeContract(isselect.id);
                  setchange(!change);
                  if (responce == "done") {
                    setisselect({ id: "" });
                    // setopenSnackbardelet(true);
                  }
                }}
                color="error"
                variant="contained"
                className="w-fit mt-1 flex gap-2 items-center "

                // sx={{ display: isselect.id === "" ? "none" : "" }}
              >
                Supprimer
              </Button>
            </span>
          </div>{" "}
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={() => setopenSnackbar(false)}
          >
            <Alert
              onClose={() => setopenSnackbar(false)}
              severity="warning"
              sx={{ width: "100%" }}
            >
              Le contrat doit être valide
            </Alert>
          </Snackbar>
          {/* <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={openSnackbar}
            onClose={() => setopenSnackbar(false)}
            message="Le contrat doit être valide"
          /> */}
          {/* <div className=" w-[90%]">
          <div className="flex justify-start w-[90%] mb-1">
            <Button
              className="flex items-center p-3"
              variant="outlined"
              
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
                    {Contract.StructerCodeS}
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
                  Total: <span className="bg-red-600 rounded-full w-4 text-xs h-5 flex justify-center items-center text-gray-900left-0" className="font-body"> {Contracts.length}</span>
                </div>
              </tr>
            </tbody>
          </table>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contrat;

////////////////////////////////////akhdem b getrow getcellclasname
