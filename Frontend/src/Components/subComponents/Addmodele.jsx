import React, { useState } from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { addModele } from "../../API/Modele.js";
function Addmodele({ handeladd }) {
  const [modele, setmodele] = useState({
    moteur_Puossance: "",
    moteur_type: "",
    Cylindree: "",
    BV_type: "",
    BV_marque: "",
  });

  const handelChangeValues = (e) => {
    setmodele((premodeles) => ({
      ...premodeles,
      [e.target.name]: e.target.value,
    }));
  };
  const handelChangeValuesselect = (e) => {
    setmodele((premodeles) => ({
      ...premodeles,
      BV_type: e,
    }));
  };
  const handelsubmit = async (e) => {
    e.preventDefault();
    handeladd();
    await addModele(modele);
  };
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <h2 className="text-center font-bold mt-4"> Ajoute Modele</h2>
        <div className="w-11/12 m-auto p-5 flex flex-col gap-3 mt-2">
          <Input
            label="Moteur Puossance "
            name="moteur_Puossance"
            onChange={handelChangeValues}
          />
          <Input
            label="Moteur type"
            name="moteur_type"
            onChange={handelChangeValues}
          />
          <Input
            label="Cylindree"
            name="Cylindree"
            onChange={handelChangeValues}
          />
          <Select
            label="BV type"
            name="BV_type"
            onChange={handelChangeValuesselect}
          >
            <Option value="L">L</Option>
            <Option value="V">V</Option>
          </Select>
          <Input
            label="BV marque"
            name="BV_marque"
            onChange={handelChangeValues}
          />
        </div>
        <div className="m-auto mt-10 mb-4 flex justify-center gap-7">
          <Button variant="outlined" color="gray" onClick={handeladd}>
            Annule
          </Button>
          <Button color="green" type="submit">
            Ajoute
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addmodele;
