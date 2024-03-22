import React, { useEffect, useState } from "react";
import { Postadduser, validate } from "../../API/User.js";
import { fetchallStr } from "../../API/Structer.js";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  CardContent,
  Box,
} from "@mui/material";

const CustemBox = ({ children }) => {
  return (
    <div className="relative border border-[#d8d8d8] rounded-md pl-5 py-4 ml-5">
      {children}
    </div>
  );
};
const CustimLabel = ({ children }) => {
  return (
    <label className="absolute top-[-12px] left-[-1.5rem] text-[#4b5563] bg-[#fff] translate-x-1/2">
      {children}
    </label>
  );
};

function AddUse() {
  const navigator = useNavigate();

  const [allStr, setallStr] = useState([]);
  const [checked, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkeUser, setCheckeUser] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkeModele, setCheckeModele] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkeCotrat, setcheckeCotrat] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkeRelation, setcheckeRelation] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkeChf, setcheckeChf] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [selectvalue, setselectvalue] = useState();

  const handleChange1 = (event) => {
    switch (event.target.name) {
      case "User":
        setCheckeUser([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ]);
        break;
      case "Vehicules":
        setChecked([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ]);
        break;
      case "Modele":
        setCheckeModele([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ]);
        break;
      case "Contrat":
        setcheckeCotrat([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ]);
        break;
      case "chauffeur":
        setcheckeChf([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ]);
        break;
      case "Relation":
        setcheckeRelation([
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
          event.target.checked,
        ]);
        break;
    }
  };

  const handleChange2 = (event) => {
    switch (event.target.name) {
      case "user":
        setCheckeUser([
          event.target.checked,
          checkeUser[1],
          checkeUser[2],
          checkeUser[3],
          checkeUser[4],
        ]);
        break;
      case "Vehicules":
        setChecked([
          event.target.checked,
          checked[1],
          checked[2],
          checked[3],
          checked[4],
          checked[5],
        ]);
        break;
      case "Contrat":
        setcheckeCotrat([
          event.target.checked,
          checkeCotrat[1],
          checkeCotrat[2],
          checkeCotrat[3],
          checkeCotrat[4],
          checkeCotrat[5],
        ]);
        break;
      case "Modele":
        setCheckeModele([
          event.target.checked,
          checkeModele[1],
          checkeModele[2],
          checkeModele[3],
          checkeModele[4],
        ]);
        break;
      case "chauffeur":
        setcheckeChf([
          event.target.checked,
          checkeChf[1],
          checkeChf[2],
          checkeChf[3],
          checkeChf[4],
        ]);
        break;
      case "Relation":
        setcheckeRelation([
          event.target.checked,
          checkeRelation[1],
          checkeRelation[2],
          checkeRelation[3],
          checkeRelation[4],
        ]);
        break;
    }
  };

  const handleChange3 = (event) => {
    switch (event.target.name) {
      case "user":
        setCheckeUser([
          checkeUser[0],
          event.target.checked,
          checkeUser[2],
          checkeUser[3],
          checkeUser[4],
        ]);
        break;
      case "Vehicules":
        setChecked([
          checked[0],
          event.target.checked,
          checked[2],
          checked[3],
          checked[4],
          checked[5],
        ]);
        break;
      case "Contrat":
        setcheckeCotrat([
          checkeCotrat[0],
          event.target.checked,
          checkeCotrat[2],
          checkeCotrat[3],
          checkeCotrat[4],
          checkeCotrat[5],
        ]);
        break;
      case "Modele":
        setCheckeModele([
          checkeModele[0],
          event.target.checked,
          checkeModele[2],
          checkeModele[3],
          checkeModele[4],
        ]);
        break;
      case "chauffeur":
        setcheckeChf([
          checkeModele[0],
          event.target.checked,
          checkeModele[2],
          checkeModele[3],
          checkeModele[4],
        ]);
        break;

      case "Relation":
        setcheckeRelation([
          checkeRelation[0],
          event.target.checked,
          checkeRelation[2],
          checkeRelation[3],
          checkeRelation[4],
        ]);
        break;
    }
  };
  const handleChange4 = (event) => {
    switch (event.target.name) {
      case "user":
        setCheckeUser([
          checkeUser[0],
          checkeUser[1],
          event.target.checked,
          checkeUser[3],
          checkeUser[4],
        ]);
        break;
      case "Vehicules":
        setChecked([
          checked[0],
          checked[1],
          event.target.checked,
          checked[3],
          checked[4],
          checked[5],
        ]);
        break;
      case "Contrat":
        setcheckeCotrat([
          checkeCotrat[0],
          checkeCotrat[1],
          event.target.checked,
          checkeCotrat[3],
          checkeCotrat[4],
          checkeCotrat[5],
        ]);
        break;
      case "Modele":
        setCheckeModele([
          checkeModele[0],
          checkeModele[1],
          event.target.checked,
          checkeModele[3],
          checkeModele[4],
        ]);
        break;
      case "chauffeur":
        setcheckeChf([
          checkeChf[0],
          checkeChf[1],
          event.target.checked,
          checkeChf[3],
          checkeChf[4],
        ]);
        break;
      case "Relation":
        setcheckeRelation([
          checkeRelation[0],
          checkeRelation[1],
          event.target.checked,
          checkeRelation[3],
          checkeRelation[4],
        ]);
        break;
    }
  };
  const handleChange5 = (event) => {
    switch (event.target.name) {
      case "user":
        setCheckeUser([
          checkeUser[0],
          checkeUser[1],
          checkeUser[2],
          event.target.checked,
          checkeUser[4],
        ]);
        break;
      case "Vehicules":
        setChecked([
          checked[0],
          checked[1],
          checked[2],
          event.target.checked,
          checked[4],
          checked[5],
        ]);
        break;
      case "Contrat":
        setcheckeCotrat([
          checkeCotrat[0],
          checkeCotrat[1],
          checkeCotrat[2],
          event.target.checked,
          checkeCotrat[4],
          checkeCotrat[5],
        ]);
        break;
      case "Modele":
        setCheckeModele([
          checkeModele[0],
          checkeModele[1],
          checkeModele[2],
          event.target.checked,
          checkeModele[4],
        ]);
        break;
      case "chauffeur":
        setcheckeChf([
          checkeChf[0],
          checkeChf[1],
          checkeChf[2],
          event.target.checked,
          checkeChf[4],
        ]);
        break;
      case "Relation":
        setcheckeRelation([
          checkeRelation[0],
          checkeRelation[1],
          checkeRelation[2],
          event.target.checked,
          checkeRelation[4],
        ]);
        break;
    }
  };
  const handleChange6 = (event) => {
    switch (event.target.name) {
      case "user":
        setCheckeUser([
          checkeUser[0],
          checkeUser[1],
          checkeUser[2],
          checkeUser[3],
          event.target.checked,
        ]);
        break;
      case "Vehicules":
        setChecked([
          checked[0],
          checked[1],
          checked[2],
          checked[3],
          event.target.checked,
          checked[5],
        ]);
        break;
      case "Contrat":
        setcheckeCotrat([
          checkeCotrat[0],
          checkeCotrat[1],
          checkeCotrat[2],
          checkeCotrat[3],
          event.target.checked,
          checkeCotrat[5],
        ]);
        break;
      case "Modele":
        setCheckeModele([
          checkeModele[0],
          checkeModele[1],
          checkeModele[2],
          checkeModele[3],
          event.target.checked,
        ]);
        break;
      case "chauffeur":
        setcheckeChf([
          checkeChf[0],
          checkeChf[1],
          checkeChf[2],
          checkeChf[3],
          event.target.checked,
        ]);
        break;
      case "Relation":
        setcheckeRelation([
          checkeRelation[0],
          checkeRelation[1],
          checkeRelation[2],
          checkeRelation[3],
          event.target.checked,
        ]);
        break;
    }
  };
  const handleChange7 = (event) => {
    switch (event.target.name) {
      case "Vehicules":
        setChecked([
          checked[0],
          checked[1],
          checked[2],
          checked[3],
          checked[4],
          event.target.checked,
        ]);
        break;
      case "Contrat":
        setcheckeCotrat([
          checkeCotrat[0],
          checkeCotrat[1],
          checkeCotrat[2],
          checkeCotrat[3],
          checkeCotrat[4],
          event.target.checked,
        ]);
        break;
    }
  };
  const [user, setuser] = useState({
    email: "",
    password: "",
    name: "",
    prenom: "",
    StructerCodeS: "",
  });

  const handelChangeValues = (e) => {
    setuser((preUser) => ({
      ...preUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e) => {
    setselectvalue(e);
  };

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await Postadduser(user, {
        car: checked,
        Contrat: checkeCotrat,
        user: checkeUser,
        Modele: checkeModele,
        chf: checkeChf,
        relation: checkeRelation,
      });
      navigator("/utilisateur");
      if (response == "success") {
        // handelDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchallStr().then((strs) => {
      setallStr(strs);
    });
  }, []);

  return (
    <form
      onSubmit={handelFormSubmit}
      className="bg-[#fbf1f1] p-3  rounded-xl  w-full"
    >
      {" "}
      <Card className="bg-[#ffffff]  m-auto w-11/12  items-center flex flex-col">
        <CardContent className=" bg-[#ffffff] flex flex-col  ">
          <h1 className="text-3xl text-gray-800 m-auto">Ajouter Utilisatuer</h1>
          <div className="flex flex-col  m-auto gap-4 my-10 w-[26rem] ">
            <TextField
              onChange={handelChangeValues}
              name="email"
              required
              label="Compte"
              type="email"
            />
            <TextField
              required
              onChange={handelChangeValues}
              name="password"
              label="MOT DE PASSE"
            />
            <TextField
              required
              onChange={handelChangeValues}
              name="name"
              label="Nom"
            />
            <TextField
              required
              onChange={handelChangeValues}
              name="prenom"
              label="Prenome"
            />
            <Autocomplete
              name="str"
              // value={selectvalue}
              getOptionLabel={(param) => `${param.label} (${param.id})`}
              options={allStr.map((m) => {
                return { label: `${m.CodeS}`, id: m.abreviation };
              })}
              onSelect={(e) => {
                setuser({
                  ...user,
                  StructerCodeS: e.target.value.split("(")[0],
                });
              }}
              renderInput={(params) => (
                <TextField {...params} label="Structer" />
              )}
            />
          </div>

          <div className="relative border border-[#d8d8d8] rounded-sm pl-2 grid grid-cols-3 p-10  gap-10 mt-7">
            <label className="absolute top-[-12px] left-[-1rem] text-[#4b5563] bg-[#fff] translate-x-1/2 p-s">
              Droits D'accès :
            </label>

            {/* ////////////////////////////////////////////  CAR ///////////////////////////////////////////////// */}
            <CustemBox>
              <CustimLabel>Vehicules :</CustimLabel>

              <FormControlLabel
                className="text-xs"
                label="Tous"
                name="Vehicules"
                control={
                  <Checkbox
                    size="small"
                    checked={
                      checked[0] &&
                      checked[1] &&
                      checked[2] &&
                      checked[3] &&
                      checked[5] &&
                      checked[4]
                    }
                    indeterminate={
                      checked[0] !== checked[1] ||
                      checked[1] !== checked[2] ||
                      checked[2] !== checked[3] ||
                      checked[5] !== checked[1] ||
                      checked[4] !== checked[5]
                    }
                    onChange={handleChange1}
                  />
                }
              />
              <div className="flex flex-col ml-3">
                <FormControlLabel
                  name="Vehicules"
                  label="Consulte Vehicul"
                  control={
                    <Checkbox
                      size="small"
                      checked={checked[0]}
                      onChange={handleChange2}
                    />
                  }
                />
                <FormControlLabel
                  name="Vehicules"
                  label="Ajoute Vehicul"
                  control={
                    <Checkbox
                      size="small"
                      checked={checked[4]}
                      onChange={handleChange6}
                    />
                  }
                />
                <FormControlLabel
                  name="Vehicules"
                  label="Suprimer Vehicul"
                  control={
                    <Checkbox
                      size="small"
                      checked={checked[1]}
                      onChange={handleChange3}
                    />
                  }
                />
                <FormControlLabel
                  name="Vehicules"
                  label="Validé Vehicul"
                  control={
                    <Checkbox
                      size="small"
                      checked={checked[2]}
                      onChange={handleChange4}
                    />
                  }
                />
                <FormControlLabel
                  name="Vehicules"
                  label="Modifié Vehicul"
                  control={
                    <Checkbox
                      size="small"
                      checked={checked[3]}
                      onChange={handleChange5}
                    />
                  }
                />
                <FormControlLabel
                  name="Vehicules"
                  label="Affecté Vehicul"
                  control={
                    <Checkbox
                      size="small"
                      checked={checked[5]}
                      onChange={handleChange7}
                    />
                  }
                />
              </div>
            </CustemBox>

            {/* ///////////////////////////////////////      CONTRAT ////////////////////////////////////////////////////// */}
            <CustemBox>
              <CustimLabel>Contrat :</CustimLabel>
              <FormControlLabel
                label="Tous"
                name="Contrat"
                control={
                  <Checkbox
                    size="small"
                    checked={
                      checkeCotrat[0] &&
                      checkeCotrat[1] &&
                      checkeCotrat[2] &&
                      checkeCotrat[3] &&
                      checkeCotrat[5] &&
                      checkeCotrat[4]
                    }
                    indeterminate={
                      checkeCotrat[0] !== checkeCotrat[1] ||
                      checkeCotrat[1] !== checkeCotrat[2] ||
                      checkeCotrat[2] !== checkeCotrat[3] ||
                      checkeCotrat[5] !== checkeCotrat[1] ||
                      checkeCotrat[4] !== checkeCotrat[5]
                    }
                    onChange={handleChange1}
                  />
                }
              />
              <div className="flex flex-col ml-3">
                <FormControlLabel
                  name="Contrat"
                  label="Consulte Contrat"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeCotrat[0]}
                      onChange={handleChange2}
                    />
                  }
                />
                <FormControlLabel
                  name="Contrat"
                  label="Ajoute Contrat"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeCotrat[4]}
                      onChange={handleChange6}
                    />
                  }
                />
                <FormControlLabel
                  name="Contrat"
                  label="Suprimer Contrat"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeCotrat[1]}
                      onChange={handleChange3}
                    />
                  }
                />
                <FormControlLabel
                  name="Contrat"
                  label="Validé Contrat"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeCotrat[2]}
                      onChange={handleChange4}
                    />
                  }
                />
                <FormControlLabel
                  name="Contrat"
                  label="Modifié Contrat"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeCotrat[3]}
                      onChange={handleChange5}
                    />
                  }
                />
                <FormControlLabel
                  name="Contrat"
                  label="Avnenant"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeCotrat[5]}
                      onChange={handleChange7}
                    />
                  }
                />
              </div>
            </CustemBox>

            {/* ////////////////////////////////////////////    USER ///////////////////////////////////////////////// */}
            <CustemBox>
              <CustimLabel>User :</CustimLabel>
              <FormControlLabel
                label="Tous"
                name="User"
                control={
                  <Checkbox
                    size="small"
                    checked={
                      checkeUser[0] &&
                      checkeUser[1] &&
                      checkeUser[2] &&
                      checkeUser[4] &&
                      checkeUser[3]
                    }
                    indeterminate={
                      checkeUser[0] !== checkeUser[1] ||
                      checkeUser[1] !== checkeUser[2] ||
                      checkeUser[3] !== checkeUser[4] ||
                      checkeUser[2] !== checkeUser[3]
                    }
                    onChange={handleChange1}
                  />
                }
              />
              <div className="flex flex-col ml-3">
                <FormControlLabel
                  label="Consulte Users"
                  name="user"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeUser[0]}
                      onChange={handleChange2}
                    />
                  }
                />
                <FormControlLabel
                  label="Ajoute user"
                  name="user"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeUser[4]}
                      onChange={handleChange6}
                    />
                  }
                />
                <FormControlLabel
                  label="Suprimer user"
                  name="user"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeUser[1]}
                      onChange={handleChange3}
                    />
                  }
                />
                <FormControlLabel
                  label="Validé user"
                  name="user"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeUser[2]}
                      onChange={handleChange4}
                    />
                  }
                />

                <FormControlLabel
                  label="Modifié Vehicul"
                  name="user"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeUser[3]}
                      onChange={handleChange5}
                    />
                  }
                />
              </div>
            </CustemBox>

            {/* /////////////////////////////////////////MODELE //////////////////////////////////////////////////// */}
            <CustemBox>
              <CustimLabel> Modele:</CustimLabel>
              <FormControlLabel
                label="Tous"
                name="Modele"
                control={
                  <Checkbox
                    size="small"
                    checked={
                      checkeModele[0] &&
                      checkeModele[1] &&
                      checkeModele[2] &&
                      checkeModele[4] &&
                      checkeModele[3]
                    }
                    indeterminate={
                      checkeModele[0] !== checkeModele[1] ||
                      checkeModele[1] !== checkeModele[2] ||
                      checkeModele[3] !== checkeModele[4] ||
                      checkeModele[2] !== checkeModele[3]
                    }
                    onChange={handleChange1}
                  />
                }
              />
              <div className="flex flex-col ml-3">
                <FormControlLabel
                  label="Consulte Modeles"
                  name="Modele"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeModele[0]}
                      onChange={handleChange2}
                    />
                  }
                />
                <FormControlLabel
                  label="Ajoute Modele"
                  name="Modele"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeModele[4]}
                      onChange={handleChange6}
                    />
                  }
                />

                <FormControlLabel
                  label="Suprimer Modele"
                  name="Modele"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeModele[1]}
                      onChange={handleChange3}
                    />
                  }
                />
                <FormControlLabel
                  label="Validé Modele"
                  name="Modele"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeModele[2]}
                      onChange={handleChange4}
                    />
                  }
                />
                <FormControlLabel
                  label="Modifié Modele"
                  name="Modele"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeModele[3]}
                      onChange={handleChange5}
                    />
                  }
                />
              </div>
            </CustemBox>
            {/* ///////////////////////////////////////// chauffeur //////////////////////////////////////////////////// */}
            <CustemBox>
              <CustimLabel>Chauffeur :</CustimLabel>
              <FormControlLabel
                label="Tous"
                name="chauffeur"
                control={
                  <Checkbox
                    size="small"
                    checked={
                      checkeChf[0] &&
                      checkeChf[1] &&
                      checkeChf[2] &&
                      checkeChf[3] &&
                      checkeChf[4]
                    }
                    indeterminate={
                      checkeChf[0] !== checkeChf[1] ||
                      checkeChf[1] !== checkeChf[2] ||
                      checkeChf[2] !== checkeChf[3] ||
                      checkeChf[3] !== checkeChf[4]
                    }
                    onChange={handleChange1}
                  />
                }
              />
              <div className="flex flex-col ml-3">
                <FormControlLabel
                  label="Consulte chauffeurs"
                  name="chauffeur"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeChf[0]}
                      onChange={handleChange2}
                    />
                  }
                />
                <FormControlLabel
                  label="Ajoute chauffeur"
                  name="chauffeur"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeChf[4]}
                      onChange={handleChange6}
                    />
                  }
                />
                <FormControlLabel
                  label="Suprimer chauffeur"
                  name="chauffeur"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeChf[1]}
                      onChange={handleChange3}
                    />
                  }
                />
                <FormControlLabel
                  label="Validé chauffeur"
                  name="chauffeur"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeChf[2]}
                      onChange={handleChange4}
                    />
                  }
                />
                <FormControlLabel
                  label="Modifié chauffeur"
                  name="chauffeur"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeChf[3]}
                      onChange={handleChange5}
                    />
                  }
                />
              </div>
            </CustemBox>
            {/* /////////////////////////////////////////Relation //////////////////////////////////////////////////// */}
            <CustemBox>
              <CustimLabel>Relation :</CustimLabel>
              <FormControlLabel
                label="Tous"
                name="Relation"
                control={
                  <Checkbox
                    size="small"
                    checked={
                      checkeRelation[0] &&
                      checkeRelation[1] &&
                      checkeRelation[2] &&
                      checkeRelation[4] &&
                      checkeRelation[3]
                    }
                    indeterminate={
                      checkeRelation[0] !== checkeRelation[1] ||
                      checkeRelation[1] !== checkeRelation[2] ||
                      checkeRelation[2] !== checkeRelation[3] ||
                      checkeRelation[3] !== checkeRelation[4]
                    }
                    onChange={handleChange1}
                  />
                }
              />
              <div className="flex flex-col ml-3">
                <FormControlLabel
                  label="Consulte Relations"
                  name="Relation"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeRelation[0]}
                      onChange={handleChange2}
                    />
                  }
                />
                <FormControlLabel
                  label="Ajoute Relation"
                  name="Relation"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeRelation[4]}
                      onChange={handleChange6}
                    />
                  }
                />
                <FormControlLabel
                  label="Suprimer Relation"
                  name="Relation"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeRelation[1]}
                      onChange={handleChange3}
                    />
                  }
                />
                <FormControlLabel
                  label="Validé Relation"
                  name="Relation"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeRelation[2]}
                      onChange={handleChange4}
                    />
                  }
                />
                <FormControlLabel
                  label="Modifié Relation"
                  name="Relation"
                  control={
                    <Checkbox
                      size="small"
                      checked={checkeRelation[3]}
                      onChange={handleChange5}
                    />
                  }
                />
              </div>
            </CustemBox>
          </div>
        </CardContent>
        <div className="flex justify-center gap-7 mb-7">
          <Button
            //  onClick={handelclose}
            sx={{ width: "fit-content", textTransform: "none" }}
            onClick={() => {
              navigator("/utilisateur");
            }}
            variant="outlined"
          >
            Annule
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "fit-content", textTransform: "none" }}
          >
            add
          </Button>
        </div>
      </Card>
    </form>
  );
}

export default AddUse;
