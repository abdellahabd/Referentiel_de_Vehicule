import React, { useState, useEffect } from "react";
import { AddTransporteur } from "../index";
import { fetchTransporteurs, getbyid } from "../../API/Contract.js";
import { Get_Sourc_relations } from "../../API/relation.js";
import { fetchallStr } from "../../API/Structer.js";
import { fetchChauffeurs } from "../../API/chauffeur.js";
import { Vehicules_tier } from "../../API/Cars.js";
import { useSelector, useDispatch } from "react-redux";

import { addcars, removecar, submitContrat } from "../../Store/index";
import {
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
  CircularProgress,
} from "@mui/material";

import { MdOutlineRemoveCircle } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { MdAdd, MdExpandLess } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postContart } from "../../API/Contract.js";

function AddContract() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const [tr, settr] = useState([]);
  const [tiers, settiers] = useState([]);
  const [relations, setrelations] = useState([]);
  const [chf_tiers, setchf_tiers] = useState([]);
  const [istropen, setistropen] = useState(false);
  const [searchcar, setsearchcar] = useState("");
  const [searchrelation, setsreachrelation] = useState("");
  const [sreachCh, setsreachCh] = useState("");
  const [allStr, setallStr] = useState([]);
  const [ContratDate, setContratDate] = useState({
    Ref_Contrar: "",
    type: "",
    Date_Debut: "",
    Date_F: "",
    StructerCodeS: "",
  });
  const [trons, settrons] = useState({
    name: "",
    Adress: "",
    telephone: "",
  });
  const [isAddCars, setisAddCars] = useState(false);
  const [selectvaleuTR, setselectvaleuTR] = useState("");

  // const handelChangeValues = (e) => {
  //   setcar((preCars) => ({
  //     ...preCars,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  const handelContratfromsubmit = () => {};

  const handelclicktr = () => {
    handeltsopen();
    tr.push(trons);
  };

  const handelTransporyeurChangeValues = (e) => {
    settrons((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };

  const handelContratdatachange = (e) => {
    setContratDate((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handeltsopen = () => {
    setistropen(!istropen);
  };

  /////////////////////
  useEffect(() => {
    async function name() {
      const tr = await fetchTransporteurs();
      const car_tiers = await Vehicules_tier();
      const relation = await Get_Sourc_relations();
      const Chf = await fetchChauffeurs();
      const strs = await fetchallStr();
      const contract = await getbyid(id);
      // console.log(contract);
      setContratDate(contract);
      if (contract.transporteur) {
        settrons(contract.transporteur);
      }
      setIsLoading(false);

      setchf_tiers(Chf);
      setrelations(relation);
      settr(tr);
      settiers(
        car_tiers
          .filter(
            (tr) => tr.Contrats.length == 0 || tr.Contrats[0].Ref_Contrar == id
          )
          .map((tr) => {
            if (tr.Contrats.length != 0) {
              // console.log()
              return {
                id: tr.Code_Viecule,
                ischekd: true,
              };
            }

            return {
              id: tr.Code_Viecule,
              ischekd: false,
            };
          })
      );
      // console.log(car_tiers);
      setallStr(strs);
    }
    name();
  }, []);

  // const tirevol2 = tiers.map((tr) => {
  //   if (tr.Contrats[0].Ref_Contrar == id) {
  //     return {
  //       id: tr.Code_Viecule,
  //       ischekd: true,
  //     };
  //   }

  //   return {
  //     id: tr.Code_Viecule,
  //     ischekd: false,
  //   };
  // });
  const relationvol2 = relations.map((r) => {
    return {
      id: r.sourcid,
      ischekd: false,
    };
  });
  const ChauffuerVol2 = chf_tiers.map((chf) => {
    return { id: chf.Matricule, ischekd: false };
  });
  if (isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress size={60} />
      </div>
    );
  }
  return (
    <div
      className={
        "bg-[#f3f3fe] h-[100%] w-screen p-10 " +
        (isAddCars ? "opacity-[0.1] " : "")
      }
    >
      {/* form for add contract */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          navigate("/contract");

          console.log(tiers);
          // console.log(ContratDate);

          // console.log(relationvol2.filter((r) => r.ischekd == true));
          // console.log(ChauffuerVol2.filter((ch) => ch.ischekd == true));
          // console.log(tirevol2.filter((v) => v.ischekd == true));

          // Dispatch(submitContrat);
          // const response = await postContart(ContratDate);
        }}
        className="bg-[#ffffff]  m-auto shadow-sm  shadow-gray-500 flex flex-col items-center gap-10 min-h-[50rem] w-[70rem] relative"
      >
        <div className="p-8 w-full border-b-[1px] border-gray-300 text-center ">
          <h2 className="text-2xl    font-semibold">Modifiee Contrat </h2>
        </div>

        <div className="w-4/12">
          {" "}
          <TextField
            label="N° Contrat"
            name="Ref_Contrar"
            type="number"
            fullWidth
            defaultValue={ContratDate.Ref_Contrar}
            onChange={handelContratdatachange}
          />
        </div>
        <div className="w-4/12">
          {" "}
          <TextField
            fullWidth
            type="date"
            label="Date debut"
            name="Date_Debut"
            defaultValue={ContratDate.Date_Debut}
            onChange={handelContratdatachange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="w-4/12">
          {" "}
          <TextField
            fullWidth
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={ContratDate.Date_F}
            label="Date fin"
            name="Date_F"
            onChange={handelContratdatachange}
          />
        </div>
        <div className="w-4/12">
          {" "}
          <Autocomplete
            name="str"
            defaultValue={{
              label: `${ContratDate.StructerCodeS}`,
              id: ContratDate.Structer.abreviation,
            }}
            getOptionLabel={(param) => `${param.label} (${param.id})`}
            options={allStr.map((m) => {
              return { label: `${m.CodeS}`, id: m.abreviation };
            })}
            onSelect={(e) => {
              setContratDate({
                ...ContratDate,
                StructerCodeS: e.target.value.split("(")[0],
              });
            }}
            renderInput={(params) => <TextField {...params} label="Structer" />}
          />
        </div>

        <div className="w-4/12">
          {" "}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              defaultValue={ContratDate.type}
              fullWidth
              label="type"
              onChange={handelContratdatachange}
              labelId="demo-simple-select-label"
              // id="demo-simple-select"
              name="type"
            >
              <MenuItem key={1} value="gree a gree">
                gree a gree
              </MenuItem>
              <MenuItem key={2} value="consultation">
                consultation
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-4/12">
          {" "}
          <TextField
            fullWidth
            defaultValue={trons.name}
            onChange={handelTransporyeurChangeValues}
            label="Nom transporteur"
            name="name"
          />
        </div>
        <div className="w-4/12">
          {" "}
          <TextField
            fullWidth
            defaultValue={trons.Adress}
            onChange={handelTransporyeurChangeValues}
            label="Adresse transporteur"
            name="Adress"
          />
        </div>
        <div className="w-4/12">
          {" "}
          <TextField
            fullWidth
            defaultValue={trons.telephone}
            onChange={handelTransporyeurChangeValues}
            type="tel"
            name="telephone"
            label="Numéro telephone transporteur"
          />
        </div>
        <Accordion>
          <AccordionSummary
            className="w-[36rem] flex"
            expandIcon={<MdExpandLess />}
          >
            Ajouté Vehecules
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              name="s"
              label="searche"
              onChange={(e) => {
                setsearchcar(e.target.value);
              }}
            />
            <List>
              {tiers
                .filter((tire) => tire.id.includes(searchcar.toUpperCase()))
                .map((tire) => {
                  return (
                    <li key={tire.id}>
                      <Checkbox
                        defaultChecked={tire.ischekd}
                        inputProps={{ "aria-label": "Checkbox demo" }}
                        onChange={() => {
                          if (tire.ischekd) {
                            tire.ischekd = false;
                          } else {
                            tire.ischekd = true;
                          }
                        }}
                      />
                      {tire.id}
                    </li>
                  );
                })}
            </List>
            {/* <Button
              variant="contained"
              onClick={() => {
                const s = tirevol2.filter((tr) => tr.ischekd == true);
                console.log(s);
              }}
            >
              actualisée
            </Button> */}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            className="w-[36rem] flex"
            expandIcon={<MdExpandLess />}
          >
            Ajouté relation
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              name="s"
              label="searche"
              onChange={(e) => {
                setsreachrelation(e.target.value);
              }}
            />
            <ul>
              <li>
                {relationvol2
                  // .filter((tire) =>
                  //   tire.id.includes(searchrelation.toLowerCase())
                  // )
                  .map((relation) => {
                    return (
                      <li key={relation.id}>
                        <Checkbox
                          inputProps={{ "aria-label": "Checkbox demo" }}
                          onChange={() => {
                            if (relation.ischekd) {
                              relation.ischekd = false;
                            } else {
                              relation.ischekd = true;
                            }
                          }}
                        />
                        {relation.id}
                      </li>
                    );
                  })}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            className="w-[36rem] flex"
            expandIcon={<MdExpandLess />}
          >
            Ajouté Chauffeurs
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              name="s"
              label="searche"
              onChange={(e) => {
                setsreachCh(e.target.value);
              }}
            />
            <ul>
              <li>
                {ChauffuerVol2
                  // .filter((tire) => tire.id.includes(sreachCh))
                  .map((relation) => {
                    return (
                      <li key={relation.id}>
                        <Checkbox
                          inputProps={{ "aria-label": "Checkbox demo" }}
                          onChange={() => {
                            if (relation.ischekd) {
                              relation.ischekd = false;
                            } else {
                              relation.ischekd = true;
                            }
                          }}
                        />
                        {relation.id}
                      </li>
                    );
                  })}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        {/* list of contract'cars */}
        {/*
        <div className="w-11/12 border-[1px] border-gray-200 relative flex flex-col items-end gap-1 ">
          <table className="w-full m-auto text-left border-collapse   border-slate-500">
            <thead>
              <tr>
                <th>delete</th>
                <th>Edit</th>
                <th>Code Vehicule</th>
                <th>Matricule</th>
                <th>state</th>
              </tr>
            </thead>
            <tbody className="border-b-2">
              {Contract_cars.map((car) => (
                <tr
                  className="border-b-[1px]  border-gray-300"
                  key={car.Code_Viecule}
                >
                  <td>
                    <MdOutlineRemoveCircle
                      color="red"
                      className="cursor-pointer"
                      onClick={() => {
                        Dispatch(removecar(car.Code_Viecule));
                      }}
                    />
                  </td>
                  <td>
                    <GrEdit className="text-deep-orange-300" />
                  </td>
                  <td className="">{car.Code_Viecule}</td>
                  <td className="">{car.Matricule}</td>
                  <td className="">{car.state}</td>
                </tr>
              ))}
            </tbody>
          </table>

          popup for add car
           
          <Button
            size="sm"
            variant="outlined"
            className="text-[#16aa52]  p-1 normal-case  flex items-center gap-1"
            onClick={handleraddingcars}
          >
            Vehicule
            <MdAdd />
          </Button>
          {/* <Dialog open={isAddCars} handler={handleraddingcars}>
            <Addcars type="privés" handelclose={handleraddingcars} />
          </Dialog>
        </div> */}

        <div className="my-10  flex gap-14">
          <Link to="/contrats">
            <Button variant="outlined" color="inherit">
              Annule
            </Button>
          </Link>

          <Button variant="contained" color="success" type="submit">
            Ajoute
          </Button>
        </div>

        <Dialog open={istropen} handler={handeltsopen}>
          <AddTransporteur settrons={settrons} handelclick={handelclicktr} />
        </Dialog>
      </form>
    </div>
  );
}

export default AddContract;
