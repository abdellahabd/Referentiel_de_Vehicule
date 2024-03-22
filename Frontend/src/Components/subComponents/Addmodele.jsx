import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  MenuList,
  FormControl,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import { addModele, GetGenres, updateModele } from "../../API/Modele.js";

function Addmodele({ handeladd, m, mood, onclose }) {
  const [modele, setmodele] = useState({
    moteur_Puossance: mood == "edit" ? m.moteur_Puossance : "",
    moteur_type: mood == "edit" ? m.moteur_type : "",
    Cylindree: mood == "edit" ? m.Cylindree : "",
    BV_type: mood == "edit" ? m.BV_type : "",
    BV_marque: mood == "edit" ? m.BV_marque : "",
    genreIdG: mood == "edit" ? m.genreIdG : "",
  });

  const gerne_edit = {
    label: mood == "edit" ? `${m.genre}` : "",
    id: mood == "edit" ? m.genreIdG : "",
  };
  const [Gerne, setGerne] = useState([]);

  const handelChangeValues = (e) => {
    setmodele((premodeles) => ({
      ...premodeles,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    async function name() {
      const genres = await GetGenres();
      setGerne(genres);
    }
    name();
  }, []);
  const handelsubmit = async (e) => {
    try {
      e.preventDefault();
      let responce;
      if (mood == "edit") {
        responce = await updateModele(modele, m.id);
      } else {
        responce = await addModele(modele);
      }

      if (responce == "done") {
        onclose(true);
        handeladd();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <h2 className="text-center font-bold mt-4">
          {" "}
          {mood == "edit" ? "Modifiée Modele" : "Ajoute Modele"}
        </h2>
        <div className="w-[30em] m-auto p-5 flex flex-col gap-3 mt-2 px-24">
          <Autocomplete
            onSelect={(e) => {
              setmodele({ ...modele, genreIdG: e.target.value[0] });
            }}
            options={Gerne.map((f) => {
              return { label: f.name, id: f.id_G };
            })}
            defaultValue={mood == "edit" ? gerne_edit : null}
            getOptionLabel={(param) => `${param.id} (${param.label})`}
            renderInput={(params) => <TextField {...params} label="Gerne" />}
          />

          <TextField
            label="Moteur Puossance "
            name="moteur_Puossance"
            onChange={handelChangeValues}
            defaultValue={modele.moteur_Puossance}
          />
          {/* <TextField
            label="Moteur type"
            name="moteur_type"
            onChange={handelChangeValues}
            defaultValue={modele.moteur_type}
          /> */}
          <FormControl>
            <InputLabel id="demo-simple-select-label2">Moteur type</InputLabel>
            <Select
              label="Moteur type"
              onChange={handelChangeValues}
              labelId="demo-simple-select-label2"
              defaultValue={modele.moteur_type}
              name="moteur_type"
            >
              <MenuItem key={2} value="L">
                L
              </MenuItem>
              <MenuItem key={1} value="V">
                V
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Cylindree"
            name="Cylindree"
            onChange={handelChangeValues}
            defaultValue={modele.Cylindree}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">BV type</InputLabel>
            <Select
              label="BV type"
              onChange={handelChangeValues}
              labelId="demo-simple-select-label"
              defaultValue={modele.BV_type}
              // id="demo-simple-select"
              name="BV_type"
            >
              <MenuItem key={3} value="manuelle">
                manuelle
              </MenuItem>
              <MenuItem key={2} value="automatique">
                automatique
              </MenuItem>
              <MenuItem key={1} value="séquentielle">
                séquentielle
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="BV marque"
            name="BV_marque"
            onChange={handelChangeValues}
            defaultValue={modele.BV_marque}
          />
        </div>
        <div className="m-auto mt-10 mb-4 flex justify-center gap-7">
          <Button variant="outlined" onClick={handeladd}>
            Annule
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "fit-content", textTransform: "none" }}
          >
            {mood == "edit" ? "Modifiée" : "Ajoute"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addmodele;
