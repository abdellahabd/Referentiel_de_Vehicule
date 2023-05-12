import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@material-tailwind/react";
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
      <Card>
        <CardHeader>Ajouter Transporteur</CardHeader>
        <CardBody>
          <Input onChange={handelChangeValues} label="nom" name="nom" />
          <Input onChange={handelChangeValues} label="Adresse" name="adresse" />
          <Input
            onChange={handelChangeValues}
            type="tel"
            name="tel"
            label="numéro telephone"
          />
        </CardBody>
        <CardFooter>
          <Button type="button" onClick={handelclick}>
            Add
          </Button>
        </CardFooter>
      </Card>
      ;
    </form>
  );
}

export default addTransporteur;
