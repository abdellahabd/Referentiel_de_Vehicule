import React, { useEffect, useState } from "react";
import { postcar } from "../../API/Cars.js";

// import { useNavigate } from "react-router-dom";
import { Button, Input, Card, Checkbox } from "@material-tailwind/react";
function Addcars() {
  const [car, setcar] = useState({
    Code_Viecule: "",
    Matricule: "",
    state: "",
  });
  const handelChangeValues = (e) => {
    setcar((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await postcar(car);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="">
      <form className="w-[60%] m-auto" onSubmit={handelFormSubmit}>
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

        <Button type="submit">Ajoute</Button>
      </form>
    </Card>
  );
}

export default Addcars;
