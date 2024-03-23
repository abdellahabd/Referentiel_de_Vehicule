import React, { useState, useEffect } from "react";
import { fetchCarsParc, validateCar, removeCar } from "../API/Cars.js";
import { fetchallStr } from "../API/Structer.js";
import {
  Button,
  Dialog,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridOverlay, GridToolbar } from "@mui/x-data-grid";
import { IoMdAddCircle } from "react-icons/io";
import { HiFilter } from "react-icons/hi";
import { Navbar, Add_Editcars, AfficatarionCar } from "./index.jsx";
import { Link } from "react-router-dom";
import { Badge } from "@mui/base";
import { useSelector } from "react-redux";
function Home() {
  const [isAddCars, setisAddCars] = useState(false);
  const [iswarning, setiswarning] = useState(true);
  const { Droit } = useSelector((state) => {
    return state;
  });
  const [iseditcar, setiseditcar] = useState(false);
  const [isaffictaion, setisaffictaion] = useState(false);
  const [cars, setcars] = useState([]);
  const fakecars = [
    {
      id: 1,
      Code: "",
      type: "",
      state: "",
      Matricule: "",
      valid: "",
    },
    {
      id: 2,
      Code: "",
      type: "",
      state: "",
      Matricule: "",
      valid: "",
    },
  ];
  const [allStr, setallStr] = useState([]);

  const [rowindex, setrowindex] = useState(null);
  const [changer, setchanger] = useState(0);
  const [isselect, setisselect] = useState({ id: "" });
  ////alert
  const [openSnackbaradd, setopenSnackbaradd] = useState(false);
  const [openSnackbardelet, setopenSnackbardelet] = useState(false);
  const [openSnackbarupdate, setopenSnackbarupdate] = useState(false);
  const [openSnackbarvalide, setopenSnackbarvalide] = useState(false);

  /////////////////////
  const handleraddingcars = () => {
    setchanger(!changer);
    setisAddCars(!isAddCars);
  };
  const handlereditingcars = () => {
    setchanger(!changer);
    setiseditcar(!iseditcar);
  };
  const handleraffictioncar = () => {
    setchanger(!changer);
    setisaffictaion(!isaffictaion);
  };

  useEffect(() => {
    console.log(Droit);
    fetchCarsParc().then((cars) => {
      console.log(cars);
      setcars(cars);
    });
    fetchallStr().then((strs) => {
      setallStr(strs);
    });
  }, [changer]);

  if (cars.length == 0) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress size={60} />
      </div>
    );
  }
  return (
    <div className={"bg-blue-gray-50  min-h-screen "}>
      <Navbar />

      <div className={"flex  mt-7 "}>
        <div className="m-auto sm:min-w-[80%]">
          <div className="w-[70em] lg:w-[95em] ">
            <DataGrid
              className="w-full content-center"
              columns={[
                {
                  field: "Code",
                  width: "170",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                  renderCell: (modele) => {
                    return (
                      <Link
                        className="font-semibold w-full text-center"
                        to={`savoir_plus/${modele.row.id}`}
                      >
                        {modele.row.Code}
                      </Link>
                    );
                  },
                },
                {
                  field: "Genre",
                  width: "170",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                },

                {
                  field: "Matricule",
                  width: "170",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                },
                {
                  field: "numero_chassis",
                  headerName: "Numéro de châssis",
                  width: "200",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                },

                {
                  field: "modele",
                  headerName: "Modele",
                  width: "130",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                },
                {
                  field: "state",
                  headerName: "Etat",
                  width: "170",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                },
                {
                  field: "type",
                  headerName: "Type Transporteur",
                  width: "170",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                },
                {
                  field: "structure",
                  headerName: "Structure",
                  width: "130",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  cellClassName: "table-td",
                  disableColumnMenu: true,
                },

                {
                  field: "validite",
                  headerName: "Validite",
                  width: "90",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",

                  disableColumnMenu: true,
                  renderCell: (car) => {
                    if (car.row.valid) {
                      return (
                        <img
                          className="w-4 h-4 hover:bg-blue-gray-100"
                          src="/assets/valide.png"
                        ></img>
                      );
                    } else {
                      return (
                        <img
                          src="../assets/notvalide.png"
                          className="w-4 h-4 hover:bg-blue-gray-100"
                        ></img>
                      );
                    }
                  },
                },
                {
                  field: "valid_D",
                  headerName: "Validite documanets",
                  width: "170",
                  align: "center",
                  flex: true,
                  headerAlign: "center",
                  headerClassName: "table-th",
                  disableColumnMenu: true,
                  renderCell: (car) => {
                    if (car.row.valid_D) {
                      return (
                        <img
                          className="w-4 h-4 hover:bg-blue-gray-100"
                          src="/assets/valide.png"
                        ></img>
                      );
                    } else {
                      return (
                        <img
                          src="../assets/notvalide.png"
                          className="w-4 h-4 hover:bg-blue-gray-100"
                        ></img>
                      );
                    }
                  },
                },
              ]}
              slots={{
                toolbar: GridToolbar,
              }}
              initialState={{
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              onRowClick={(param) => {
                if (isselect.id === param.id) {
                  setisselect({ id: "" });
                } else {
                  setisselect(param.row);
                }
              }}
              pageSizeOptions={[10, 25]}
              rows={
                cars.length === 0
                  ? fakecars
                  : cars.map((car) => {
                      // console.log(car.modele);
                      return {
                        id: car.id,
                        Code: car.Code_Viecule,
                        type: car.type,
                        structure:
                          car.StructerCodeS == null ? "/" : car.StructerCodeS,
                        Genre: car.modele.genre.name,
                        modele: car.modeleIdM,
                        state: car.state,
                        strname:
                          car.StructerCodeS == null
                            ? "/"
                            : car.Structer.abreviation,
                        numero_chassis: car.numero_chassis,
                        Matricule: car.Matricule,
                        valid: car.validite,
                        valid_D: car.validite_d,
                      };
                    })
              }
              loading={cars.length == 0 ? true : false}
              rowSelectionModel={isselect.id != "" ? isselect.id : []}
            />
          </div>
          <div className="flex mt-1 gap-2 ">
            {Droit.car[4] && (
              <Button
                sx={{ width: "fit-content", textTransform: "none" }}
                onClick={handleraddingcars}
                variant="outlined"
                className="w-fit mt-1 flex gap-2 items-center"
              >
                <IoMdAddCircle />
                Ajouter Vehicle
              </Button>
            )}
            <span
              className={` flex gap-2` + (isselect.id === "" ? " hidden" : " ")}
            >
              <span
                className={
                  `flex gap-2` + (isselect.valid === true ? " hidden" : " ")
                }
              >
                {Droit.car[2] && (
                  <Button
                    sx={{ width: "fit-content", textTransform: "none" }}
                    onClick={async () => {
                      setchanger(!changer);
                      const response = await validateCar(isselect.id);
                      if (response == "done") {
                        setisselect({ id: "" });
                        setopenSnackbarvalide(true);
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
                )}
                {Droit.car[3] && (
                  <Button
                    onClick={handlereditingcars}
                    variant="contained"
                    color="inherit"
                    className="w-fit mt-1 flex gap-2 items-center"
                    // sx={{ display: isselect.id === "" ? "none" : "" }}
                  >
                    Modifier
                  </Button>
                )}
              </span>
              <span
                className={`gap-2` + (isselect.valid != true ? " hidden" : " ")}
              >
                {Droit.car[5] && (
                  <Button
                    sx={{ width: "fit-content", textTransform: "none" }}
                    onClick={handleraffictioncar}
                    variant="contained"
                    color="inherit"
                    className="w-fit mt-1 flex gap-2 items-center"
                    // sx={{ display: isselect.id === "" ? "none" : "" }}
                  >
                    Affecter
                  </Button>
                )}
              </span>
              {Droit.car[1] && (
                <Button
                  sx={{ width: "fit-content", textTransform: "none" }}
                  onClick={async () => {
                    const responce = await removeCar(isselect.id);
                    setchanger(!changer);
                    if (responce == "done") {
                      setisselect({ id: "" });
                      setopenSnackbardelet(true);
                    }
                  }}
                  color="error"
                  variant="contained"
                  className="w-fit mt-1 flex gap-2 items-center "
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Supprimer
                </Button>
              )}
            </span>
          </div>
          {/* ///////////////////////////// */}
          <Dialog open={iseditcar} onClose={handlereditingcars}>
            <Add_Editcars
              type="edit"
              handelclose={handlereditingcars}
              veh={isselect}
            />
          </Dialog>

          <Dialog open={isAddCars} onClose={handleraddingcars} maxWidth="lg">
            <Add_Editcars type="add" handelclose={handleraddingcars} veh={{}} />
          </Dialog>

          <Dialog
            open={isaffictaion}
            onClose={handleraffictioncar}
            maxWidth="lg"
          >
            <AfficatarionCar handelclose={handleraffictioncar} veh={isselect} />
          </Dialog>
          {/* ///////////////////////////// */}
          <Snackbar
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
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Home;
