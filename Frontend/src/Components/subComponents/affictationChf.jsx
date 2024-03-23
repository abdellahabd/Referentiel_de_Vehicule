import React, { useEffect, useState } from "react";
// import { postcar } from "../../API/Cars.js";
// import { GetGenres } from "../../API/Cars.js";
// import { GetModeles } from "../../API/Modele.js";
import { fetchallStr } from "../../API/Structer";
import { affictationChauffeurr } from "../../API/chauffeur";
import {
  Button,
  TextField,
  Select,
  Autocomplete,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

function AffictationChf({ veh, handelclose, onclose }) {
  const [strs, setstrs] = useState([]);
  const [str, setstr] = useState("");

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(str);
      const responce = await affictationChauffeurr(veh.id, str);
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
      console.log(veh);
      setstrs(allstrs);
    }
    name();
  }, []);

  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <h2 className="text-center font-bold mt-4">
          {" "}
          affectation de Chauffeur &quot;{veh.id}&quot;
        </h2>
        <div className="w-[30em] m-auto p-5 flex flex-col gap-3 mt-2 px-24">
          {/* <Autocomplete
          onSelect={(e) => {
            setcar({ ...car, genre: e.target.value[0] });
          }}
          options={Gerne.map((f) => {
            return { label: f.name, id: f.id_G };
          })}
          value={type == "edit" ? gerne_v : null}
          getOptionLabel={(param) => `${param.id} (${param.label})`}
          renderInput={(params) => <TextField {...params} label="Gerne" />}
        /> */}
          <Autocomplete
            noOptionsText={"slect"}
            // onSelect={(e) => {
            //   setstr(e.target.value[0]);
            // }}
            disabled={true}
            className="w-50"
            defaultValue={{
              label: veh.Structer,
              id: veh.strname,
            }}
            getOptionLabel={(param) => `${param.label} (${param.id})`}
            options={strs.map((m) => {
              return { label: `${m.CodeS}`, id: m.abreviation };
            })}
            renderInput={(params) => (
              <TextField {...params} label="Actuelle Structure" />
            )}
          />
          <Autocomplete
            noOptionsText={"slect"}
            onSelect={(e) => {
              setstr(e.target.value[0]);
            }}
            className="w-50"
            getOptionLabel={(param) => `${param.label} (${param.id})`}
            options={strs
              .filter((str) => str.CodeS != veh.Structer)
              .map((m) => {
                return { label: `${m.CodeS}`, id: m.abreviation };
              })}
            renderInput={(params) => (
              <TextField {...params} label="nouvelle Structure" />
            )}
          />
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
            // type={type === "propre" ? "submit" : "button"}
            type="submit"
            variant="contained"
            // onClick={() => {
            //   if (type != "propre") {
            //     dispatch(addcars(car));
            //     handelclose();
            //   }
            // }}
          >
            Affecté
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AffictationChf;
