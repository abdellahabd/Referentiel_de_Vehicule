import React, { useEffect, useState } from "react";
// import { postcar } from "../../API/Cars.js";
// import { GetGenres } from "../../API/Cars.js";
// import { GetModeles } from "../../API/Modele.js";
import { updateDocement } from "../../API/Cars.js";
import {
  Input,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Select,
  Dialog,
  Autocomplete,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Checkbox,
  List,
  ListItemButton,
} from "@mui/material";

function Edit_document({ onClose, Doc }) {
  const [Documant, setDocumant] = useState({
    numero: Doc.numero,
    date_Expiration: Doc.date_Expiration,
  });

  const handelChangeValues = (e) => {
    setDocumant((preDocumant) => ({
      ...preDocumant,
      [e.target.name]: e.target.value,
    }));
  };

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await updateDocement(Documant, Doc.nom, Doc.vehiculeId);
      if (res == "done") {
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function name() {}
    name();
  }, []);
  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <h2 className="text-center font-bold mt-4"> &quot;{Doc.nom} &quot;</h2>
        <div className="w-[30em] m-auto p-5 flex flex-col gap-3 mt-2 px-24">
          <TextField
            required
            type="text"
            label="Numero"
            name="numero"
            onChange={handelChangeValues}
          />
          <TextField
            type="date"
            label="Date D'Expiration"
            name="date_Expiration"
            onChange={handelChangeValues}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="m-auto mt-10 mb-4 flex justify-center gap-7">
          <Button
            sx={{ width: "fit-content", textTransform: "none" }}
            variant="outlined"
            // color="gray"
            onClick={onClose}
          >
            Annuler
          </Button>

          <Button
            // color="green"
            // type={type === "propre" ? "submit" : "button"}
            type="submit"
            variant="contained"
            sx={{ width: "fit-content", textTransform: "none" }}
            // onClick={() => {
            //   if (type != "propre") {
            //     dispatch(addcars(car));
            //     handelclose();
            //   }
            // }}
          >
            Ajouter
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Edit_document;
