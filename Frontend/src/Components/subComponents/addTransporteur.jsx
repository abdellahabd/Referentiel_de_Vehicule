import React from "react";
import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
function addTransporteur({ settrons, handelclick }) {
  const handelChangeValues = (e) => {
    settrons((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     console.l(trons);
    //   }}
    >
      <from>
        <h2>Ajouter Transporteur</h2>
        <div>
          <TextField onChange={handelChangeValues} label="nom" name="nom" />
          <TextField
            onChange={handelChangeValues}
            label="Adresse"
            name="adresse"
          />
          <TextField
            onChange={handelChangeValues}
            type="tel"
            name="tel"
            label="numéro telephone"
          />
        </div>

        <Button type="button" onClick={handelclick}>
          Add
        </Button>
      </from>
      ;
    </form>
  );
}

export default addTransporteur;
