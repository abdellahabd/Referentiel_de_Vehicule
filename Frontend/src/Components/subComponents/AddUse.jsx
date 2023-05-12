import React, { useState } from "react";
import { Postadduser } from "../../API/User.js";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Select,
  Checkbox,
  Option,
} from "@material-tailwind/react";

function AddUse({ allStr, handelDialog }) {
  const [isCheckedAllCar, setIsCheckedAllCar] = useState(false);
  const [isCheckedAddcar, setIsCheckedAddcar] = useState(false);
  const [isCheckedRemoveCar, setIsCheckedRemoveCar] = useState(false);
  const [isCheckedValidiCar, setisCheckedValidiCar] = useState(false);

  const [isCheckedAllUser, setIsCheckedAllUser] = useState(false);
  const [isCheckedAddUser, setIsCheckedAddUser] = useState(false);
  const [isCheckedRemoveUser, setIsCheckedRemoveUser] = useState(false);
  const [isCheckedValidiUser, setisCheckedValidiUser] = useState(false);

  const [isCheckedAllContrat, setIsCheckedAllContrat] = useState(false);
  const [isCheckedAddContrat, setIsCheckedAddContrat] = useState(false);
  const [isCheckedRemoveContrat, setIsCheckedRemoveContrat] = useState(false);
  const [isCheckedValidiContrat, setisCheckedValidiContrat] = useState(false);

  const [selectvalue, setselectvalue] = useState();

  const [user, setuser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handelChangeValues = (e) => {
    setuser((preUser) => ({
      ...preUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e) => {
    setselectvalue(e);
  };

  const handelFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const rolles = [
        { addcar: isCheckedAddcar },
        { removecar: isCheckedRemoveCar },
        { adduser: isCheckedAddUser },
        { removeruser: isCheckedRemoveUser },
      ];

      const response = await Postadduser(
        { userinfo: user, str: selectvalue },
        rolles
      );
      if (response == "success") {
        handelDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckAll = (e) => {
    switch (e.target.name) {
      case "car":
        setIsCheckedAllCar(!isCheckedAllCar);
        setIsCheckedAddcar(!isCheckedAllCar);
        setIsCheckedRemoveCar(!isCheckedAllCar);
        break;
      case "user":
        setIsCheckedAllUser(!isCheckedAllUser);
        setIsCheckedAddUser(!isCheckedAllUser);
        setIsCheckedRemoveUser(!isCheckedAllUser);
        break;
    }
  };

  const handleCheck = (e) => {
    switch (e.target.name) {
      case "addcar":
        setIsCheckedAddcar(!isCheckedAddcar);
        break;
      case "deletecar":
        setIsCheckedRemoveCar(!isCheckedRemoveCar);
        break;
      case "Validetecar":
        setisCheckedValidiCar(!isCheckedValidiCar);
        break;

      case "adduser":
        setIsCheckedAddUser(!isCheckedAddUser);
        break;
      case "deleteuser":
        setIsCheckedRemoveUser(!isCheckedRemoveUser);
        break;
      case "valideuser":
        setisCheckedValidiUser(!isCheckedValidiUser);
        break;
    }
  };

  return (
    <form onSubmit={handelFormSubmit} className="bg-[#fbf1f1] p-3  rounded-xl ">
      {" "}
      <Card className="bg-[#e9f9fb]  m-auto">
        <CardHeader color="blue" className="place-items-center ">
          Ajouter Utilisatuer
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            onChange={handelChangeValues}
            name="email"
            label="Compte"
            type="email"
          />
          <Input
            onChange={handelChangeValues}
            name="password"
            label="MOT DE PASSE"
          />
          <Input
            onChange={handelChangeValues}
            name="name"
            label="Nom & Prenome"
          />
          <Select
            name="str"
            label="Structer"
            value={selectvalue}
            onChange={handleChange}
          >
            {allStr.map((str, index) => (
              <Option key={index} value={str.CodeS}>
                {str.CodeS}
              </Option>
            ))}
          </Select>
          <div className="border border-gray-300 rounded-md flex gap-20 flex-nowrap ">
            <div>
              <Checkbox
                name="car"
                id="car"
                checked={isCheckedAllCar}
                onChange={handleCheckAll}
              />
              <label htmlFor="car">Vehicules</label>
              <div className="pl-5 flex flex-col  ">
                <div>
                  <Checkbox
                    id="addcar"
                    name="addcar"
                    checked={isCheckedAddcar}
                    onChange={handleCheck}
                  />
                  <label htmlFor="addcar">Ajoute Vehicul</label>
                </div>
                <div>
                  <Checkbox
                    name="deletecar"
                    id="deletecar"
                    checked={isCheckedRemoveCar}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deletecar">Suprimer Vehicul</label>
                </div>
                <div>
                  <Checkbox
                    name="Validetecar"
                    id="Validetecar"
                    checked={isCheckedValidiCar}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deletecar">Validé Vehicul</label>
                </div>
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
            <div>
              <Checkbox
                id="user"
                name="user"
                checked={isCheckedAllUser}
                onChange={handleCheckAll}
              />
              <label htmlFor="user">Utilisatuer</label>
              <div className="pl-5 flex flex-col  ">
                <div>
                  <Checkbox
                    id="adduser"
                    name="adduser"
                    checked={isCheckedAddUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="adduser">Ajoute Utilisatuer</label>
                </div>
                <div>
                  <Checkbox
                    name="deleteuser"
                    id="deleteuser"
                    checked={isCheckedRemoveUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deleteuser">Suprimer Utilisatuer</label>
                </div>
                <div>
                  <Checkbox
                    name="valideuser"
                    id="valideuser"
                    checked={isCheckedRemoveUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deleteuser">Validé Utilisatuer</label>
                </div>
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
            <div>
              <Checkbox
                id="user"
                name="user"
                checked={isCheckedAllUser}
                onChange={handleCheckAll}
              />
              <label htmlFor="user">Contrat</label>
              <div className="pl-5 flex flex-col  ">
                <div>
                  <Checkbox
                    id="adduser"
                    name="adduser"
                    checked={isCheckedAddUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="adduser">Ajoute Contrat</label>
                </div>
                <div>
                  <Checkbox
                    name="deleteuser"
                    id="deleteuser"
                    checked={isCheckedRemoveUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deleteuser">Suprimer Contrat</label>
                </div>
                <div>
                  <Checkbox
                    name="valideuser"
                    id="valideuser"
                    checked={isCheckedRemoveUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deleteuser">Validé Contrat</label>
                </div>
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
            <div>
              <Checkbox
                id="user"
                name="user"
                checked={isCheckedAllUser}
                onChange={handleCheckAll}
              />
              <label htmlFor="user">Modele</label>
              <div className="pl-5 flex flex-col  ">
                <div>
                  <Checkbox
                    id="adduser"
                    name="adduser"
                    checked={isCheckedAddUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="adduser">Ajoute Modele</label>
                </div>
                <div>
                  <Checkbox
                    name="deleteuser"
                    id="deleteuser"
                    checked={isCheckedRemoveUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deleteuser">Suprimer Modele</label>
                </div>
                <div>
                  <Checkbox
                    name="valideuser"
                    id="valideuser"
                    checked={isCheckedRemoveUser}
                    onChange={handleCheck}
                  />
                  <label htmlFor="deleteuser">Validé Modele</label>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="">
          <Button type="submit">add</Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default AddUse;
