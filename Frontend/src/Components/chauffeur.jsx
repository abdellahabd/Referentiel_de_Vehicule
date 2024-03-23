import React, { useState, useEffect } from "react";
import {
  fetchChauffeurs,
  validateChauffeurr,
  removeChauffeurr,
} from "../API/chauffeur.js";
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
import {
  Navbar,
  Add_Editcars,
  Add_Chauffeur,
  AffictationChf,
} from "./index.jsx";

function chauffeur() {
  const [isAddChf, setisAddChf] = useState(false);
  const [iseditcar, setiseditcar] = useState(false);
  const [isaffictaion, setisaffictaion] = useState(false);
  const [Chauffeur, setChauffeur] = useState([]);
  const fakeChauffeur = [
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

  const [editcar, seteditcar] = useState();

  const [changer, setchanger] = useState(0);
  const [isselect, setisselect] = useState({ id: "" });
  ////alert
  const [openSnackbardelet, setopenSnackbardelet] = useState(false);
  const [openSnackbarupdate, setopenSnackbarupdate] = useState(false);
  const [openSnackbarvalide, setopenSnackbarvalide] = useState(false);
  const [openSnackbarAdd, setopenSnackbarAdd] = useState(false);
  const [openSnackbarAffecte, setopenSnackbarAffecte] = useState(false);

  const handleraddingcars = () => {
    setisAddChf(!isAddChf);
    setchanger(!changer);
  };
  const handlereditingcars = () => {
    setiseditcar(!iseditcar);
    setchanger(!changer);
  };
  const handleraffictioncar = () => {
    setchanger(!changer);
    setisaffictaion(!isaffictaion);
  };

  useEffect(() => {
    fetchChauffeurs().then((Chauffeur) => {
      setChauffeur(Chauffeur);
      console.log(Chauffeur);
    });
  }, [changer, iseditcar]);

  if (Chauffeur.length == 0) {
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
        <div className="m-auto  w-[70em] lg:w-[95em]">
          <DataGrid
            className="w-full content-center"
            columns={[
              {
                field: "nom",
                headerName: "Nom",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "prenome",
                headerName: "Prenome",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },

              {
                field: "Matricule",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "type",
                headerName: "Transporteur",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "age",
                headerName: "Age",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "numero",
                headerName: "Numero",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "Structer",
                headerName: "Structure",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "etat",
                headerName: "Etat",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "type_p",
                headerName: "Type permis",
                width: "200",
                align: "center",
                flex: true,
                headerAlign: "center",
                headerClassName: "table-th",
                disableColumnMenu: true,
              },
              {
                field: "valid",
                headerName: "Validite",
                width: "200",
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
            ]}
            // disableRowSelectionOnClick
            slots={{
              toolbar: GridToolbar,
            }}
            initialState={{
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
              Chauffeur.length === 0
                ? fakeChauffeur
                : Chauffeur.map((Chauffeur) => {
                    return {
                      id: Chauffeur.id_chf,
                      nom: Chauffeur.nom,
                      numero: Chauffeur.numero,
                      prenome: Chauffeur.prenome,
                      age: Chauffeur.age,
                      type: Chauffeur.type,
                      Matricule: Chauffeur.Matricule,
                      type_p: Chauffeur.type_p,
                      etat: Chauffeur.etat,
                      Structer: Chauffeur.StructerCodeS,
                      // strAbr: Structer.abreviation,
                      strname:
                        Chauffeur.StructerCodeS == null
                          ? "/"
                          : Chauffeur.Structer.abreviation,
                      valid: Chauffeur.validite,
                    };
                  })
            }
            loading={Chauffeur.length == 0 ? true : false}
            rowSelectionModel={isselect.id != "" ? isselect.id : []}
          />
          {/* ////////////////////////////////////////////////////////////////////// */}
          <div className="flex mt-1 gap-2 normal-case">
            <Button
              onClick={handleraddingcars}
              variant="outlined"
              className="w-fit mt-1 flex gap-2 items-center"
              sx={{ width: "fit-content", textTransform: "none" }}
            >
              <IoMdAddCircle />
              Ajouter Chauffeur
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
                  onClick={async () => {
                    setchanger(!changer);
                    const response = await validateChauffeurr(isselect.id);
                    if (response == "done") {
                      setisselect({ id: "" });
                      setopenSnackbarvalide(true);
                      setTimeout(() => {
                        setisselect({ id: "" });
                      }, 2100);
                    }
                  }}
                  variant="contained"
                  color="success"
                  className="w-fit mt-1 flex gap-2 items-center"
                  sx={{ width: "fit-content", textTransform: "none" }}
                >
                  Valider
                </Button>
                <Button
                  onClick={handlereditingcars}
                  variant="contained"
                  color="inherit"
                  className="w-fit mt-1 flex gap-2 items-center"
                  sx={{ width: "fit-content", textTransform: "none" }}
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Modifier
                </Button>
              </span>
              <span
                className={`gap-2` + (isselect.valid != true ? " hidden" : " ")}
              >
                <Button
                  onClick={handleraffictioncar}
                  variant="contained"
                  color="inherit"
                  sx={{ width: "fit-content", textTransform: "none" }}
                  className="w-fit mt-1 flex gap-2 items-center"
                  // sx={{ display: isselect.id === "" ? "none" : "" }}
                >
                  Affecter
                </Button>
              </span>
              <Button
                onClick={async () => {
                  const responce = await removeChauffeurr(isselect.id);
                  setchanger(!changer);
                  if (responce == "done") {
                    setopenSnackbardelet(true);
                    setTimeout(() => {
                      setisselect({ id: "" });
                    }, 2100);
                  }
                }}
                sx={{ width: "fit-content", textTransform: "none" }}
                color="error"
                variant="contained"
                className="w-fit mt-1 flex gap-2 items-center "
                // sx={{ display: isselect.id === "" ? "none" : "" }}
              >
                Supprimer
              </Button>
            </span>
          </div>
          {/* ///////////////////////////// */}
          <Dialog open={iseditcar} onClose={handlereditingcars}>
            <Add_Chauffeur
              mood="edit"
              handelclose={handlereditingcars}
              chff={isselect}
              onclose={setopenSnackbarupdate}
            />
          </Dialog>

          <Dialog open={isAddChf} onClose={handleraddingcars} maxWidth="lg">
            <Add_Chauffeur
              mood="add"
              handelclose={handleraddingcars}
              chff={{}}
              onclose={setopenSnackbarAdd}
            />
          </Dialog>

          <Dialog
            open={isaffictaion}
            onClose={handleraffictioncar}
            maxWidth="lg"
          >
            <AffictationChf
              handelclose={handleraffictioncar}
              veh={isselect}
              onclose={setopenSnackbarAffecte}
            />
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
              Chauffeur {isselect.id} a été supprimé
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
              Chauffeur {isselect.id} a été modifié
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
              Chauffeur {isselect.id} a été validée
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
              Un chauffeur a été ajouté
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={openSnackbarAffecte}
            autoHideDuration={2000}
            onClose={() => setopenSnackbarAffecte(false)}
          >
            <Alert
              onClose={() => setopenSnackbarAffecte(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Chauffeur {isselect.id} a été affecte
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default chauffeur;
