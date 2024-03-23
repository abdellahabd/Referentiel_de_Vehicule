import React, { useEffect, useState, useCallback } from "react";
import { postcar, updatecar } from "../../API/Cars.js";

import { GetModeles } from "../../API/Modele.js";
import { fetchallStr } from "../../API/Structer.js";
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

function Addcars({ type, handelclose, veh }) {
  const [car, setcar] = useState({
    type: type == "edit" ? veh.type : "",
    Matricule: type == "edit" ? veh.Matricule : "",
    StructerCodeS: "edit" ? veh.StructerCodeS : "",
    // genre: type == "edit" ? veh.gerneId : "",
    modeleIdM: "edit" ? veh.modeleIdM : "",
    numero_chassis: "edit" ? veh.numero_chassis : "",
  });

  const modele_v = {
    label: type == "edit" ? `${veh.modele}` : "",
    id: type == "edit" ? veh.modele : "",
  };
  const str_v = {
    label: type == "edit" ? veh.structure : "",
    id: type == "edit" ? veh.strname : "",
  };
  const [strs, setstrs] = useState([]);
  // const [modele_v, setmodele_v] = useState({ label: "", id: "" });
  const [Gerne, setGerne] = useState([]);
  const [Modele, setModele] = useState([]);
  const handelChangeValues = (e) => {
    setcar((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (type == "edit") {
        console.log(car);
        updatecar(car, veh.id);
      } else {
        console.log(car);
        const res = await postcar(car);
      }
      handelclose();
    } catch (error) {
      console.log(error);
    }
  };

  if (type == "edit") {
    useEffect(() => {
      console.log(veh);
      async function name() {
        const allstrs = await fetchallStr();
        setstrs(allstrs);
        const m = await GetModeles();
        setModele(m);
      }
      name();
    }, []);
  } else {
    useEffect(() => {
      async function name() {
        const allstrs = await fetchallStr();
        setstrs(allstrs);

        const m = await GetModeles();
        setModele(m);
      }
      name();
    }, []);
  }
  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <h2 className="text-center font-bold mt-4">
          {" "}
          {type == "edit" ? `Modifier "${veh.Code}"` : "Ajoute Vehecules"}
        </h2>
        <div className="w-[30em] m-auto p-5 flex flex-col gap-3 mt-2 px-24">
          <Autocomplete
            noOptionsText={"slect"}
            onSelect={(e) => {
              setcar({ ...car, modeleIdM: e.target.value });
            }}
            className="w-50"
            defaultValue={type == "edit" ? modele_v : null}
            options={Modele.map((m) => {
              return { label: `${m.id_M}`, id: m.id_M };
            })}
            renderInput={(params) => <TextField {...params} label="Modele" />}
          />
          <Autocomplete
            disabled={car.type == "tiers" ? true : false}
            noOptionsText={"slect"}
            defaultValue={
              type != "edit" ? null : car.type == "Naftal" ? str_v : null
            }
            onSelect={(e) => {
              setcar({
                ...car,
                StructerCodeS: e.target.value.split(" ", 1)[0],
              });
            }}
            className="w-50"
            getOptionLabel={(param) => `${param.label} (${param.id})`}
            options={strs.map((m) => {
              return { label: `${m.CodeS}`, id: m.abreviation };
            })}
            renderInput={(params) => (
              <TextField {...params} label="Select Structure" />
            )}
          />
          <TextField
            label="Numéro de châssis"
            type="text"
            name="numero_chassis"
            defaultValue={car.Matricule}
            onChange={handelChangeValues}
          />
          <TextField
            label="Matricule"
            type="text"
            name="Matricule"
            defaultValue={car.Matricule}
            onChange={handelChangeValues}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">type</InputLabel>
            <Select
              label="type"
              onChange={handelChangeValues}
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              defaultValue={car.type}
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
            {type == "edit" ? "actualiser" : "Ajoute"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addcars;
