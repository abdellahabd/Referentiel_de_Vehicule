import React, { useEffect, useState } from "react";
import { Navbar, Addrelation } from "./index";
import { Getrelations } from "../API/relation.js";
import { fetchallStr } from "../API/Structer.js";
import {
  Button,
  Dialog,
  Snackbar,
  Alert,
  Autocomplete,
  TextField,
} from "@mui/material";

import { DataGrid, GridOverlay, GridToolbar } from "@mui/x-data-grid";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
function Relation() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);
  const [selected, setselected] = useState({ id: "" });
  const Listid = [];
  const fakeinfo = [
    { id: 1, source: "", info: [] },
    { id: 2, source: "", info: [] },
  ];

  const [relations, setrelations] = useState([]);

  const [Source, setSource] = useState([]);
  const [newS, setnewS] = useState("");
  const [isopen, setisopen] = useState(false);
  const [openAddSourc, setopenAddSourc] = useState(false);
  const [success, setsuccess] = useState(false);

  const handeladd = () => {
    setisopen(!isopen);
  };
  const handelsuccess = () => {
    setsuccess(!success);
  };

  const handeladdSourc = () => {
    setopenAddSourc(!openAddSourc);
  };
  useEffect(() => {
    async function name() {
      const responce = await fetchallStr();
      setSource(responce);

      const response = await Getrelations();
      // console.log(response);
      const k = Object.values(
        response.reduce((grouped, obj) => {
          const key = obj.sourcid;
          Listid.push(key);
          if (!grouped[key]) {
            grouped[key] = [];
          }
          grouped[key].push(obj);
          return grouped;
        }, {})
      );

      setrelations(k);
    }
    name();
  }, [isopen]);

  return (
    <div className={"bg-blue-gray-50  min-h-screen "}>
      <Navbar />

      <div className={"flex  mt-7 "}>
        <div className="m-auto sm:min-w-[80%]">
          {/* <div className="ag-theme-alpine">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
            ></AgGridReact>
          </div> */}
          {/* <div className="flex justify-start w-[90%] mb-2 ">
          <Button
            className="flex items-center p-3"
            variant="outlined"
            // color="gray"
          >
            <HiFilter /> Filter
          </Button>
        </div> */}

          <DataGrid
            className="w-full content-center"
            columns={[
              {
                field: "source",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },

              {
                field: "info",
                headerName: "information",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th ",
                cellClassName: "cell",
                disableColumnMenu: true,
                renderCell: (relation) => {
                  const row = relation.row.info;
                  return (
                    <table className="w-full h-20">
                      <thead>
                        <th className=" border border-solid ">destination</th>
                        <th className=" border border-solid ">P.U</th>
                        <th className=" border border-solid ">Km</th>
                      </thead>
                      {row.map((one, index) => (
                        <tr className="w-full" key={index}>
                          <td className="text-center border border-solid ">
                            {one.DiIdStr}
                          </td>
                          <td className="text-center border border-solid">
                            {one.Pu}
                          </td>
                          <td className="text-center border border-solid">
                            {one.km}
                          </td>
                        </tr>
                      ))}
                    </table>
                  );
                },
              },
            ]}
            rowHeight={relations.length === 0 ? 60 : relations[0].length * 50}
            // disableRowSelectionOnClick
            slots={{
              toolbar: GridToolbar,
            }}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            // onRowClick={(param) => {
            //   console.log(param.row);
            //   if (isselect.id === param.id) {
            //     setisselect({ id: "" });
            //   } else {
            //     setisselect(param.row);
            //   }
            // }}
            pageSizeOptions={[10, 25]}
            rows={
              relations.length === 0
                ? fakeinfo
                : relations.map((r, index) => {
                    return { id: r[0].sourcid, source: r[0].sourcid, info: r };
                  })
            }
            onRowClick={(param) => {
              // console.log(Listid);
              if (selected.id === param.id) {
                setselected({ id: "" });
              } else {
                setselected(param.row);
              }
            }}
            rowSelectionModel={selected.id != "" ? selected.id : []}
          />
          <div className=" flex gap-4 mt-2">
            <Button
              onClick={handeladdSourc}
              sx={{ width: "fit-content", textTransform: "none" }}
              className="flex h-fit text-xs justify-center p-2 my-2 gap-1 mx-auto w-20"
              variant="outlined"
            >
              Ajouter Source
            </Button>
            <div className={`` + (selected.id === "" ? " hidden" : " ")}>
              <Button
                onClick={handeladd}
                sx={{ width: "fit-content", textTransform: "none" }}
                className="flex h-fit text-xs justify-center p-2 my-2 gap-1 mx-auto w-20"
                variant="outlined"
              >
                Ajouter Destination
                {/* Destination */}
              </Button>
            </div>
          </div>
          {/* ///////////////////////////// */}
          <Dialog
            open={isopen}
            onClose={handeladd}
            maxWidth="sm"
            fullWidth={true}
          >
            <Addrelation
              handelclose={handeladd}
              sourc={selected.id}
              handelsuccess={handelsuccess}
            />
          </Dialog>
          <Dialog
            open={openAddSourc}
            onClose={handeladdSourc}
            maxWidth="sm"
            fullWidth={true}
          >
            <form className="flex flex-col items-center justify-evenly m-auto h-56">
              <h2 className="text-center font-semibold ">Ajouter Soure</h2>
              <Autocomplete
                onSelect={(e) => {
                  console.log(e.target.value);
                  setnewS(e.target.value);
                }}
                className="w-80"
                options={Source.map((s) => {
                  return { label: s.CodeS, name: s.Designation };
                })}
                getOptionLabel={(param) => `${param.label}`}
                renderInput={(params) => (
                  <TextField {...params} label="Soucrs" />
                )}
              />
              <div className="flex justify-center gap-3">
                {" "}
                <Button
                  onClick={handeladdSourc}
                  variant="outlined"
                  sx={{ width: "fit-content", textTransform: "none" }}
                >
                  Annuler
                </Button>
                <Button
                  sx={{ width: "fit-content", textTransform: "none" }}
                  variant="contained"
                  onClick={() => {
                    console.log(newS);
                    handeladdSourc();
                    relations.push([{ sourcid: +newS }]);
                  }}
                >
                  Ajouter
                </Button>{" "}
              </div>
            </form>
          </Dialog>
          {/* ///////////////////////////// */}
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={success}
            autoHideDuration={2000}
            onClose={() => setsuccess(false)}
          >
            <Alert
              onClose={() => setsuccess(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              relation Ajoute avec success
            </Alert>
          </Snackbar>
          {/* ///////////////////////////// */}
          {/* <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbardelet}
          autoHideDuration={2000}
          onClose={() => setopenSnackbardelet(false)}
        >
          <Alert
            onClose={() => setopenSnackbardelet(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            1 vecihcules delete
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbarvalide}
          autoHideDuration={2000}
          onClose={() => setopenSnackbarvalide(false)}
        >
          <Alert
            onClose={() => setopenSnackbarvalide(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            vecihcule validé avec success
          </Alert>
        </Snackbar> */}

          {/* {currentItems.map((m, index) => (
                <tr
                  key={index}
                  className=" hover:bg-[#3061ac] border-y-[1px] border-gray-500 "
                >
                  <td className="px-6 py-4">{m.id_M}</td>
                  <td className="px-6 py-4">{m.moteur_Puossance}</td>
                  <td className="px-6 py-4">{m.moteur_type}</td>
                  <td className="px-6 py-4">{m.Cylindree}</td>
                  <td className="px-6 py-4">{m.BV_type}</td>
                  <td className="px-6 py-4">{m.BV_marque}</td>
                  <td className="px-6 py-4 flex justify-center">
                    {m.validite ? (
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
                </tr>
              ))} */}
        </div>
      </div>
    </div>
  );
}

export default Relation;
