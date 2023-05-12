import { useState, useEffect, createContext } from "react";
import { getuser } from "./API/auth.js";

import { addUser } from "./Store/index.js";
import {
  Login,
  Signup,
  Home,
  Contrat,
  AddContract,
  RequireAuth,
  AdminPage,
  AddAvenant,
  Relation,
  Modele,
} from "./Components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getuser().then((data) => {
      if (data.user) {
        dispatch(addUser(data.user));
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/contrats" element={<Contrat />}>
            <Route path="addcontract" element={<AddContract />} />
          </Route>
          <Route path="/Relation" element={<Relation />} />
          <Route path="/modele" element={<Modele />} />
          <Route path="/addavenant/:idcontract" element={<AddAvenant />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/vehicule" element={<Vehicule />} /> */}
          {/* <Route path="/vehicule" element={< />} /> */}
          <Route path="/singup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
