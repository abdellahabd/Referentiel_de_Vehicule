import React, { useState, useEffect } from "react";
import { getcar_contract } from "./../../API/Cars.js";
import { getbyid } from "./../../API/Contract.js";
import {
  Button,
  Input,
  Dialog,
  Checkbox,
  Card,
  Select,
  Option,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
function addavenant() {
  const { idcontract } = useParams();
  const navigate = useNavigate();
  const [contract, setcontract] = useState();
  const [Cars, setCars] = useState([]);
  const [car, setcar] = useState({
    Code_Viecule: "",
    Matricule: "",
    state: "",
  });
  const [selectvalue, setselectvalue] = useState("");

  const [repmlacment, setrepmlacment] = useState([]);

  ////////////////////////////Chekbox////////////////////////////
  const [isProlongation, setisProlongation] = useState(false);
  const [isRemplac_v, setisRemplac_v] = useState(false);
  const [isRemplac_C, setisRemplac_C] = useState(false);
  // const [isRELATION_AVENANT, setisRELATION_AVENANT] = useState(false);

  ////////////////////////////Open Dialog////////////////////////////
  const [isRemplac_v_open, setisRemplac_v_open] = useState(false);
  const [isRemplac_C_open, setisRemplac_C_open] = useState(false);

  useEffect(() => {
    async function name() {
      const contract = await getbyid(idcontract);

      console.log(contract);

      const response = await getcar_contract(idcontract);
      setCars(response);
    }
    name();
  }, []);

  const handelChangeValues = (e) => {
    setcar((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeselect = (e) => {
    console.log(e);
    setselectvalue(e);
  };

  return (
    <div className="bg-[#f3f3fe] h-full w-screen p-10 ">
      <div className="border border-gray-500 rounded-md p-4">
        <h2 className="text-lg font-bold mb-2">
          Avenants pour le Contrat : {idcontract}
        </h2>
        <div className="border border-gray-800 rounded-md p-4 my-10 mx-5 relative">
          <p className="top-[-0.75em] absolute bg-[#f3f3fe] text-gray-800">
            Types de Avenants
          </p>
          <div className="flex flex-col gap-1 py-3">
            <Checkbox
              color="green"
              label="Remplacement de vehicule"
              onChange={() => {
                setisRemplac_v(!isRemplac_v);
              }}
            />
            <Checkbox
              color="green"
              onChange={() => {
                setisRemplac_C(!isRemplac_C);
              }}
              label="Remplacement de Chauffeur"
            />
            <Checkbox
              label="Prolongation"
              color="green"
              onChange={() => {
                setisProlongation(!isProlongation);
              }}
            />
            <Checkbox label="RELATION AVENANT" />
          </div>
        </div>

        <div
          className={
            "border border-gray-500 rounded-md p-4 m-10 relative w-7/12 " +
            (isProlongation ? `border-gray-800` : ``)
          }
        >
          <p
            className={
              "top-[-0.75em] absolute bg-[#f3f3fe] text-gray-500" +
              (isProlongation ? `text-gray-800` : ``)
            }
          >
            Prolongation
          </p>
          <div className="p-[1rem] flex flex-col  gap-3  pr-96  ">
            {/* <label htmlFor="date_d"> date Debut</label>
            <input id="date_d" type="date" /> */}
            <label
              htmlFor="date_d"
              className={isProlongation ? `text-gray-800` : `text-gray-500`}
            >
              {" "}
              date Debut :
            </label>
            <Input
              id="date_d"
              type="date"
              label="Date Debut"
              name="Date_d"
              disabled={isProlongation ? false : true}
            />
            <label
              htmlFor="date_f"
              className={
                selectvalue === "Prolongation"
                  ? `text-gray-800`
                  : `text-gray-500`
              }
            >
              {" "}
              date Fin :
            </label>
            <Input
              id="date_f"
              className="first-letter:"
              type="date"
              label="Date Fin"
              name="Date_f"
              disabled={isProlongation ? false : true}
            />
          </div>
        </div>
        {/*                ///////////////////////////////////////    ////////////  */}

        <div
          className={
            isRemplac_v
              ? ` border border-gray-800 rounded-md p-4 m-10 relative`
              : `border  border-gray-500 rounded-md p-4 m-10 relative`
          }
        >
          <p
            className={
              isRemplac_v
                ? ` top-[-0.75em] absolute bg-[#f3f3fe] text-gray-800`
                : `top-[-0.75em] absolute bg-[#f3f3fe] text-gray-500 `
            }
          >
            Remplacement de vehicule
          </p>
          <div className="flex flex-col items-center m-5 ">
            <table className={isRemplac_v ? " w-6/12" : "hidden"}>
              <thead className="border-collapse border-2 border-gray-200 ">
                <tr>
                  <th className="border-2 border-gray-300 ">Vehicule</th>
                  <th className="border-2 border-gray-300">
                    Vehicule remplacer
                  </th>
                </tr>
              </thead>
              <tbody>
                {repmlacment.length > 0 &&
                  repmlacment.map((ele, index) => (
                    <tr key={index}>
                      <td className="border-2 border-gray-300 p-2 text-center">
                        {ele.car}
                      </td>
                      <td className="border-2 border-gray-300 p-2 text-center">
                        {ele.car_remplacer}
                      </td>
                    </tr>
                  ))}
                <tr>
                  <button
                    onClick={() => {
                      setisRemplac_v_open(!isRemplac_v_open);
                    }}
                  >
                    ajoute un repmlacment
                  </button>
                </tr>
              </tbody>
            </table>
            <Dialog
              open={isRemplac_v_open}
              handler={() => {
                setisRemplac_v_open(!isRemplac_v_open);
              }}
            >
              <div className="w-[40rem] ">
                <Card className="p-8">
                  <form className="w-[60%] flex flex-col m-auto  items-center gap-5">
                    <Select
                      label="Sélectionnez la voiture que vous remplacez"
                      value={selectvalue}
                      onChange={handleChangeselect}
                    >
                      {Cars.map((car, index) => (
                        <Option key={index} value={car.Code_Viecule}>
                          {car.Code_Viecule}
                        </Option>
                      ))}
                    </Select>
                    <div className="border border-gray-500 rounded-md p-4 flex flex-col gap-6 w-[100%] pt-8  relative">
                      <p className="top-[-0.75em] absolute bg-[#ffffff] text-gray-700">
                        nouvelle vehicule
                      </p>

                      <Input
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
                    <Button
                      onClick={() => {
                        setrepmlacment((pre) => [
                          ...pre,
                          { car: car.Code_Viecule, car_remplacer: selectvalue },
                        ]);
                      }}
                    >
                      Ajoute
                    </Button>
                  </form>
                </Card>
              </div>
            </Dialog>
          </div>
        </div>
        {/*                ///////////////////////////////////////    ////////////  */}
        <div className="border border-gray-500 rounded-md p-4 m-10 relative">
          <p className="top-[-0.75em] absolute bg-[#f3f3fe] text-gray-500">
            Remplacement de Chauffeur
          </p>
        </div>
        {/*                ///////////////////////////////////////    ////////////  */}

        <div className="border border-gray-500 rounded-md p-4 m-10 relative">
          <p className="top-[-0.75em] absolute bg-[#f3f3fe] text-gray-500">
            RELATION
          </p>
        </div>
      </div>
      <div className="mt-1">
        <Button
          color="gray"
          variant="outlined"
          onClick={() => {
            navigate("/contrats");
          }}
        >
          Return
        </Button>
        <Button className="ml-1" onClick={() => {}}>
          Ajouter
        </Button>
      </div>
    </div>
  );
}

export default addavenant;

// const handleChangeselect = (e) => {
//   setselectvalue(e);
// };
{
  /* <Select
          label="type Avenant"
          value={selectvalue}
          onChange={handleChangeselect}
        >
          <Option value="Prolongation">Prolongation</Option>
          <Option value="Remplacement_vehicule">
            Remplacement de vehicule
          </Option>
          <Option value="Remplacement_CHAUFFEUR">
            Remplacement de Chauffeur
          </Option>
          <Option value="RELATION_AVENANT">RELATION AVENANT</Option>
        </Select> */
}
{
  /*  ///////////////////////////////////////    ////////////  */
}
