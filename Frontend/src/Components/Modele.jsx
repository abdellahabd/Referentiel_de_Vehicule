import React, { useEffect, useState } from "react";
import { Navbar, Addmodele } from "./index";
import { GetModeles, validatemodele, removemodele } from "../API/Modele.js";
import { HiFilter } from "react-icons/hi";
import { Button, Dialog, Snackbar, Alert } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

function Modele() {
  const [modeles, setmodeles] = useState([]);
  const [isopen, setisopen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [changer, setchanger] = useState(0);
  const [isselect, setisselect] = useState({ id: "" });
  ////alert
  const [openSnackbardelet, setopenSnackbardelet] = useState(false);
  const [openSnackbarvalide, setopenSnackbarvalide] = useState(false);
  const [openSnackbarupdate, setopenSnackbarupdate] = useState(false);
  const [openSnackbarAdd, setopenSnackbarAdd] = useState(false);
  const fakeModele = [
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

  const handeledit = () => {
    setisEdit(!isEdit);
  };
  const handeladd = () => {
    setisopen(!isopen);
  };
  useEffect(() => {
    async function name() {
      const response = await GetModeles();

      setmodeles(response);
    }
    name();
  }, [isopen, changer, isEdit]);

  return (
    <div className={"bg-blue-gray-50  min-h-screen "}>
      <Navbar />

      <div className={"flex flex-col  mt-7 "}>
        <div className="m-auto w-[70em] lg:w-[95em] ">
          <DataGrid
            className="w-full content-center"
            columns={[
              {
                field: "Code",
                headerName: "Code Model",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
                hidden: true,
              },

              {
                field: "genre",
                headerName: "Genre",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "moteur_Puossance",
                headerName: "Moteur Puossance",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "moteur_type",
                headerName: "Moteur type",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "Cylindree",
                headerName: "Cylindre",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "BV_type",
                headerName: "BV type",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "BV_marque2",
                headerName: "BV marque",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "BV_marque3",
                headerName: "BV marque",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "BV_marque4",
                headerName: "BV marqu4e",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "BV_marque5",
                headerName: "BV marque5",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "validite",
                headerName: "Validite",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",

                disableColumnMenu: true,
                renderCell: (modele) => {
                  if (modele.row.valid) {
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
              toolbar: () => {
                return (
                  <GridToolbarContainer>
                    <GridToolbarColumnsButton></GridToolbarColumnsButton>
                    <GridToolbarFilterButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                  </GridToolbarContainer>
                );
              },
            }}
            initialState={{
              columns: {
                columnVisibilityModel: {
                  id: false,
                  BV_marque2: false,
                  BV_marque3: false,
                  BV_marque4: false,
                  BV_marque5: false,
                },
              },
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            onRowClick={(param) => {
              // console.log(param.row);
              if (isselect.id === param.id) {
                setisselect({ id: "" });
              } else {
                setisselect(param.row);
              }
            }}
            pageSizeOptions={[10, 25]}
            rows={
              modeles.length === 0
                ? fakeModele
                : modeles.map((modele) => {
                    return {
                      id: modele.id_M,
                      Code: modele.id_M,
                      moteur_Puossance: modele.moteur_Puossance,
                      moteur_type: modele.moteur_type,
                      Cylindree: modele.Cylindree,
                      genre: modele.genre.name,
                      genreIdG: modele.genre.id_G,
                      BV_marque: modele.BV_marque,
                      BV_type: modele.BV_type,
                      valid: modele.validite,
                    };
                  })
            }
            loading={modeles.length == 0 ? true : false}
            rowSelectionModel={isselect.id != "" ? isselect.id : []}
          />
          <div className="flex mt-1 gap-2 ">
            {" "}
            <Button
              onClick={handeladd}
              variant="contained"
              sx={{ width: "fit-content", textTransform: "none" }}
            >
              Ajouter Modele
            </Button>
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
                    setchanger(!changer);
                    const response = await validatemodele(isselect.id);
                    if (response == "done") {
                      setopenSnackbarvalide(true);
                      setTimeout(() => {
                        setisselect({ id: "" });
                      }, 2100);
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
                  sx={{ width: "fit-content", textTransform: "none" }}
                  onClick={handeledit}
                  variant="contained"
                  color="inherit"
                  className="w-fit mt-1 flex gap-2 items-center"
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Modifier
                </Button>
              </span>

              <Button
                sx={{ width: "fit-content", textTransform: "none" }}
                onClick={async () => {
                  const responce = await removemodele(isselect.id);
                  setchanger(!changer);
                  if (responce == "done") {
                    setopenSnackbardelet(true);
                    setTimeout(() => {
                      setisselect({ id: "" });
                    }, 2100);
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
          </div>
        </div>
      </div>
      <Dialog open={isopen} onClose={handeladd} maxWidth="lg">
        <Addmodele
          mood="add"
          handeladd={handeladd}
          m={{}}
          onclose={setopenSnackbarAdd}
        />
      </Dialog>
      <Dialog open={isEdit} onClose={handeledit} maxWidth="lg">
        <Addmodele
          mood="edit"
          handeladd={handeledit}
          m={isselect}
          onclose={setopenSnackbarupdate}
        />
      </Dialog>
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
          Modèle {isselect.id} a été supprimé
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbarupdate}
        autoHideDuration={2000}
        onClose={() => setopenSnackbarupdate(false)}
      >
        <Alert
          onClose={() => setopenSnackbarupdate(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Modèle {isselect.id} a été modifié
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
          Modèle {isselect.id} a été validée
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbarAdd}
        autoHideDuration={2000}
        onClose={() => setopenSnackbarAdd(false)}
      >
        <Alert
          onClose={() => setopenSnackbarAdd(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Un modèle {isselect.id} a été ajouté
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Modele;
