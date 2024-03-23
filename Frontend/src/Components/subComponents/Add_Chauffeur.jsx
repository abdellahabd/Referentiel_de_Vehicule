import React, { useEffect, useState, useCallback } from "react";
import { postChauffeur, updateChauffeur } from "../../API/chauffeur.js";
import { fetchallStr } from "../../API/Structer.js";
import { GetModeles } from "../../API/Modele.js";
import { addcars } from "../../Store/index.js";
import {
  Button,
  TextField,
  Select,
  Autocomplete,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

function AddChauffeur({ mood, handelclose, chff, onclose }) {
  const dispatch = useDispatch();

  const [chf, setchf] = useState({
    nom: mood == "edit" ? chff.nom : "",
    prenome: mood == "edit" ? chff.prenome : "",
    Matricule: mood == "edit" ? chff.Matricule : "",
    age: mood == "edit" ? chff.age : "",
    type: mood == "edit" ? chff.type : "",
    numero: mood == "edit" ? chff.numero : "",
    etat: mood == "edit" ? chff.etat : "",
    type_p: mood == "edit" ? chff.type_p : "",
    StructerCodeS: mood == "edit" ? chff.Structer : "",
  });
  const str_v = {
    label: mood == "edit" ? chff.Structer : "",
    id: mood == "edit" ? chff.strname : "",
  };
  const [strs, setstrs] = useState([]);
  const handelChangeValues = (e) => {
    setchf((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();
      let responce;
      if (mood == "edit") {
        //console.log(chf);
        responce = await updateChauffeur(chf, chff.id);
      } else {
        responce = await postChauffeur(chf);
      }
      console.log(responce);
      if (responce == "done") {
        handelclose();
        onclose(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function name() {
      const allstrs = await fetchallStr();
      console.log(chff);
      setstrs(allstrs);
    }
    name();
  }, []);

  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <h2 className="text-center font-bold mt-4">
          {" "}
          Ajoute Chauffeur
          {/* {type == "edit" ? `Modifier "${veh.Code}"` : "Ajoute Vehecules"} */}
        </h2>
        <div className="w-[30em] m-auto p-5 flex flex-col gap-3 mt-2 px-24">
          {/* <Select label="Gerne" onChange={handelselectchanGerne}>
            {Gerne.map((f) => (
              <Option key={f.id_G} value={f.name}>
                {f.name}
              </Option>
            ))}
          </Select>*/}

          {/* <Autocomplete
            onSelect={(e) => {
              setcar({ ...car, genre: e.target.value[0] });
            }}
            options={Gerne.map((f) => {
              return { label: f.name, id: f.id_G };
            })}
            defaultValue={type == "edit" ? gerne_v : null}
            getOptionLabel={(param) => `${param.id} (${param.label})`}
            renderInput={(params) => <TextField {...params} label="Gerne" />}
          /> */}
          <Autocomplete
            noOptionsText={"slect"}
            onSelect={(e) => {
              setchf({
                ...chf,
                StructerCodeS: e.target.value.split(" ", 1)[0],
              });
            }}
            className="w-50"
            defaultValue={mood == "edit" ? str_v : null}
            getOptionLabel={(param) => `${param.label} (${param.id})`}
            options={strs.map((m) => {
              return { label: `${m.CodeS}`, id: m.abreviation };
            })}
            renderInput={(params) => <TextField {...params} label="Structer" />}
          />
          <TextField
            label="nom"
            type="text"
            name="nom"
            defaultValue={chf.nom}
            onChange={handelChangeValues}
          />
          <TextField
            label="péenom"
            type="text"
            name="prenome"
            defaultValue={chf.prenome}
            onChange={handelChangeValues}
          />
          <TextField
            label="Matricule"
            type="text"
            name="Matricule"
            defaultValue={chf.Matricule}
            onChange={handelChangeValues}
          />
          <TextField
            label="Age"
            type="number"
            name="age"
            defaultValue={chf.age}
            onChange={handelChangeValues}
          />
          <TextField
            label="Telephone"
            type="number"
            name="numero"
            defaultValue={chf.numero}
            onChange={handelChangeValues}
          />
          {/* <Autocomplete
            noOptionsText={"slect"}
            onSelect={(e) => {
              setcar({ ...car, Modele: e.target.value });
            }}
            className="w-50"
            options={Modele.map((m) => {
              return { label: `${m.id_M}`, id: m.id_M };
            })}
            renderInput={(params) => <TextField {...params} label="Structer" />}
          /> */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Transporteur</InputLabel>
            <Select
              label="Transporteur"
              onChange={handelChangeValues}
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              defaultValue={chf.type}
              name="type"
            >
              <MenuItem key={1} value="Naftal">
                Naftal
              </MenuItem>
              <MenuItem key={2} value="tiers">
                tiers
              </MenuItem>
            </Select>
          </FormControl>
          {/* <Autocomplete
            noOptionsText={"slect"}
            onSelect={(e) => {
              setcar({ ...car, Modele: e.target.value });
            }}
            className="w-50"
            options={Modele.map((m) => {
              return { label: `${m.id_M}`, id: m.id_M };
            })}
            renderInput={(params) => (
              <TextField {...params} label="Type permis" />
            )}
          /> */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Type permis</InputLabel>
            <Select
              label="Type permis"
              onChange={handelChangeValues}
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              defaultValue={chf.type_p}
              name="type_p"
            >
              <MenuItem key={1} value="Vl">
                Vl
              </MenuItem>
              <MenuItem key={2} value="Ca">
                Ca
              </MenuItem>
              <MenuItem key={3} value="Cr">
                Cr
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Etat</InputLabel>
            <Select
              label="Etat"
              onChange={handelChangeValues}
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              defaultValue={chf.etat}
              name="etat"
            >
              <MenuItem key={1} value="actif">
                Actif
              </MenuItem>
              <MenuItem key={2} value="inactif">
                Inactif
              </MenuItem>
              <MenuItem key={3} value="en conge">
                en conge
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="m-auto mt-10 mb-4 flex justify-center gap-7">
          <Button
            variant="outlined"
            // color="gray"
            onClick={handelclose}
          >
            Annule
          </Button>

          <Button
            // color="green"
            variant="contained"
            // type={type === "propre" ? "submit" : "button"}
            type="submit"
            // onClick={() => {
            //   if (type != "propre") {
            //     dispatch(addcars(car));
            //     handelclose();
            //   }
            // }}
          >
            {mood == "edit" ? "Modifiée" : "Ajoute"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddChauffeur;
