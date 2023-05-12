import React, { useEffect, useState } from "react";
import { postcar } from "../../API/Cars.js";
import { GetGenres } from "../../API/Cars.js";
import { GetModeles } from "../../API/Modele.js";

import { Button, Input, Card, Select, Option } from "@material-tailwind/react";
function editcar({ c, handler }) {
  const [car, setcar] = useState({
    Code_Viecule: c.Code_Viecule,
    Matricule: c.Matricule,
    state: c.state,
    genre: c.genre.name,
    Modele: "",
  });

  const [Gerne, setGerne] = useState([]);
  const [Modele, setModele] = useState([]);
  const handelChangeValues = (e) => {
    setcar((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };

  const handelselectchanGerne = (e) => {
    setcar({ ...car, genre: e });
  };

  const handelselectchanModele = (e) => {
    setcar({ ...car, Modele: e });
  };

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(car);
      // const res = await postcar(car);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function name() {
      const g = await GetGenres();
      setGerne(g);
      const m = await GetModeles();
      setModele(m);
    }
    name();
  }, []);

  return (
    <div>
      <form>
        <h2 className="text-center font-bold mt-4"> Edit Modele</h2>
        <div className="w-11/12 m-auto p-5 flex flex-col gap-3 mt-2">
          <Select
            label="Gerne"
            onChange={handelselectchanGerne}
            value={c.genre.name}
          >
            {Gerne.map((f) => (
              <Option key={f.id_G} value={f.name}>
                {f.name}
              </Option>
            ))}
          </Select>
          <Select label="Modele" onChange={handelselectchanModele}>
            {Modele.map((m) => (
              <Option key={m.id_M} value={m.id_M}>
                {m.id_M}
              </Option>
            ))}
          </Select>
          <Input
            defaultValue={c.Code_Viecule}
            autoFocus={false}
            autoComplete={false}
            label="Code"
            type="text"
            name="Code_Viecule"
            onChange={handelChangeValues}
          />
          <Input
            defaultValue={c.Matricule}
            label="Matricule"
            type="text"
            name="Matricule"
            onChange={handelChangeValues}
          />
          <Input
            defaultValue={c.state}
            label="state"
            type="text"
            name="state"
            onChange={handelChangeValues}
          />
        </div>
        <div className="m-auto mt-10 mb-4 flex justify-center gap-7">
          <Button variant="outlined" color="gray" onClick={handler}>
            Annule
          </Button>
          <Button
            color="green"
            onClick={() => {
              console.log(car);
            }}
          >
            Ajoute
          </Button>
        </div>
      </form>
    </div>
  );
}

export default editcar;
