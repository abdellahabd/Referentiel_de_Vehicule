import React, { useEffect, useState } from "react";
import { postcar } from "../../API/Cars.js";
import { GetGenres } from "../../API/Cars.js";
import { GetModeles } from "../../API/Modele.js";
import { addcars } from "../../Store/index.js";
import { Button, Input, Card, Select, Option } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";

function Addcars({ type, handelclose }) {
  const dispatch = useDispatch();
  const [car, setcar] = useState({
    Code_Viecule: "",
    Matricule: "",
    state: "",
    genre: "",
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
      <form onSubmit={handelFormSubmit}>
        <h2 className="text-center font-bold mt-4"> Ajoute Vehecules</h2>
        <div className="w-11/12 m-auto p-5 flex flex-col gap-3 mt-2">
          <Select label="Gerne" onChange={handelselectchanGerne}>
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
            autoFocus={false}
            autoComplete={false}
            label="Code"
            type="text"
            name="Code_Viecule"
            onChange={handelChangeValues}
          />
          <Input
            label="Matricule"
            type="text"
            name="Matricule"
            onChange={handelChangeValues}
          />
          <Input
            label="state"
            type="text"
            name="state"
            onChange={handelChangeValues}
          />
        </div>
        <div className="m-auto mt-10 mb-4 flex justify-center gap-7">
          <Button variant="outlined" color="gray" onClick={handelclose}>
            Annule
          </Button>

          <Button
            color="green"
            type={type === "propre" ? "submit" : "button"}
            onClick={() => {
              if (type != "propre") {
                dispatch(addcars(car));
                handelclose();
              }
            }}
          >
            Ajoute
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addcars;
