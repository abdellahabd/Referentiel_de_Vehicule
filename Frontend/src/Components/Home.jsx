import React, { useState, useEffect } from "react";
import { Navbar } from "./index";
import contrat from "/assets/contrat.png";
import modele from "/assets/voiture.png";
import chauffeur from "/assets/chauffeur.png";
import alarme from "/assets/alarme.png";
import user from "/assets/avatar.png";
import relstion from "/assets/distance.png";
import camion from "/assets/cars.png";
import { Snackbar, Alert, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../API/auth.js";
import { addUser, adddroit } from "../Store/index.js";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSnackbar, setopenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [Droit, setDroit] = useState({});

  useEffect(() => {
    getuser().then((data) => {
      if (data.user) {
        setDroit(data.Accesses);
        dispatch(addUser(data.user));
        dispatch(adddroit(data.Accesses));
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress size={60} />
      </div>
    );
  }
  return (
    <div className={"bg-blue-gray-50   h-screen "}>
      <Navbar />{" "}
      <div className="grid grid-cols-3 gap-4 p-3 h-[90vh]">
        <Button
          onClick={() => {
            if (Droit.Contrat.some((element) => element === true)) {
              navigate("/contrats");
            } else {
              if (!openSnackbar) {
                setopenSnackbar(true);
              }
            }
          }}
          className="bg-[#ececec] flex flex-col justify-center items-center"
          sx={{ bgcolor: "#ececec" }}
        >
          <img src={contrat} alt="alarme" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Contrats
          </p>
        </Button>

        <Button
          onClick={() => {
            if (Droit.car.some((element) => element === true)) {
              navigate("/vehicule");
            } else {
              if (!openSnackbar) {
                setopenSnackbar(true);
              }
            }
          }}
          className="bg-[#ececec] flex flex-col justify-center items-center"
          sx={{ bgcolor: "#ececec" }}
        >
          <img src={camion} alt="alarme" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Véhicules
          </p>
        </Button>
        <Button
          onClick={() => {
            if (Droit.chf.some((element) => element === true)) {
              navigate("/chauffeur");
            } else {
              if (!openSnackbar) {
                setopenSnackbar(true);
              }
            }
          }}
          className="bg-[#ececec] flex flex-col justify-center items-center"
          sx={{ bgcolor: "#ececec" }}
        >
          <img src={chauffeur} alt="alarme" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Chauffeurs
          </p>
        </Button>
        <Button
          onClick={() => {
            if (Droit.relation.some((element) => element === true)) {
              navigate("/Relation");
            } else {
              if (!openSnackbar) {
                setopenSnackbar(true);
              }
            }
          }}
          className="bg-[#ececec] flex flex-col justify-center items-center"
          sx={{ bgcolor: "#ececec" }}
        >
          <img src={relstion} alt="alarme" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Relations
          </p>
        </Button>

        <Button
          onClick={() => {
            if (Droit.Modele.some((element) => element === true)) {
              navigate("/modele");
            } else {
              if (!openSnackbar) {
                setopenSnackbar(true);
              }
            }
          }}
          className="bg-[#ececec] flex flex-col justify-center items-center"
          sx={{ bgcolor: "#ececec" }}
        >
          <img src={modele} alt="alarme" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Modeles
          </p>
        </Button>
        {/* <Button
          onClick={() => {
            navigate("");
          }}
          className="bg-[#ececec] flex flex-col justify-center items-center"
          sx={{ bgcolor: "#ececec" }}
        >
          <img src={alarme} alt="alarme" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Alertes
          </p>
        </Button> */}
        <Button
          onClick={() => {
            if (Droit.user.some((element) => element === true)) {
              navigate("/utilisateur");
            } else {
              if (!openSnackbar) {
                setopenSnackbar(true);
              }
            }
          }}
          className="bg-[#ececec] flex flex-col justify-center items-center"
          sx={{ bgcolor: "#ececec" }}
        >
          <img src={user} alt="alarme" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Utilisateurs
          </p>
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={800}
          onClose={() => setopenSnackbar(false)}
        >
          <Alert
            onClose={() => setopenSnackbar(false)}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Vous n’y avez pas accès.
          </Alert>
        </Snackbar>
        {/* <div className="bg-[#ececec] flex flex-col justify-center items-center ">
          <img src={contrat} alt="" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Contrats
          </p>
        </div>
        <div className="bg-[#ececec] flex flex-col justify-center items-center ">
          <img src={camion} alt="" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Véhicules
          </p>
        </div> */}
        {/* <div className="bg-[#ececec] flex flex-col justify-center items-center ">
          <img src={modele} alt="" className="filter  w-24" />
          <p className="bg-[#4a4a4a] px-3 text-slate-100 mt-1 rounded-xl">
            Modeles
          </p>
        </div> */}
        {/* <div className="bg-[#ececec] flex flex-col justify-center items-center "></div>
        <div className="bg-[#ececec] flex flex-col justify-center items-center "></div> */}
        {/* <div className="bg-[#ececec] flex flex-col justify-center items-center ">
          <FcTemplate />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
