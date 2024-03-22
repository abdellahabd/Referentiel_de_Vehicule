import { useState, useEffect } from "react";
import { getuser } from "./API/auth.js";
import { CircularProgress } from "@mui/material";
import { addUser, adddroit } from "./Store/index.js";
import {
  Login,
  // Signup,
  Home,
  Vehicule,
  Contrat,
  AddContract,
  RequireAuth,
  AdminPage,
  AddAvenant,
  Vehicule_info,
  Chauffeur,
  Clients,
  Relation,
  Modele,
  AddUse,
  EditUse,
  EditConract,
  Contrat_info,
  Profile,
  VehiculeRefor,
} from "./Components/index";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import "./globals.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [Droit, setDroit] = useState([]);
  const [isdata, setisdata] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getuser().then((data) => {
      console.log(data);
      if (data.user) {
        setisdata(true);
        setDroit(data.Accesses);
        dispatch(addUser(data.user));
        dispatch(adddroit(data.Accesses));
      } else {
        setisdata(false);
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
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route
            path="/Relation"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.relation.some((element) => element === true) ? (
                <Relation />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/utilisateur"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.user.some((element) => element === true) ? (
                <AdminPage />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/admin/adduser"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.user[4] ? (
                <AddUse />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/admin/EditUser/:id"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.user[3] ? (
                <EditUse />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/contrats"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.Contrat.some((element) => element === true) ? (
                <Contrat />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/contract/addcontract"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.Contrat[4] ? (
                <AddContract />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/contract/edit_Contrat/:id"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.Contrat[3] ? (
                <EditConract />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="/contrats/savoir_plus/:id" element={<Contrat_info />} />
          <Route
            path="/chauffeur"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.chf.some((element) => element === true) ? (
                <Chauffeur />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="/clients" element={<Clients />} />
          <Route
            path="/modele"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.Modele.some((element) => element === true) ? (
                <Modele />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/Vehicule/savoir_plus/:id" element={<Vehicule_info />} />
          <Route
            path="/vehicule"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.car.some((element) => element === true) ? (
                <Vehicule />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/vehicule/reforme"
            element={
              !isdata ? (
                <Navigate to="/home" />
              ) : Droit.car.some((element) => element === true) ? (
                <VehiculeRefor />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route path="/addavenant/:idcontract" element={<AddAvenant />} />
          {/*   <Route path="/singup" element={<Signup />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
