import React, { useState, useEffect, useMemo } from "react";
import { fetchallStr } from "../../API/Structer.js";
import { fetchClients } from "../../API/Client.js";
import { addrelations } from "../../API/relation.js";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
function addrelation({ handelclose, sourc, handelsuccess }) {
  const [newrelation, setnewrelation] = useState({
    source: sourc,
    distination: null,
    Km: "",
    Pu: "",
  });
  const [load, setload] = useState(true);
  const [Distination, setDistination] = useState([]);
  const [Source, setSource] = useState([]);
  const [searchText, setSearchText] = React.useState("");
  const handelselectD = (e) => {};

  //

  ////////////////////////////////////////// option for Autocomplete
  const sourceoptions = Source.map((s) => {
    return { label: s.Designation };
  });

  const distaionsOption = [
    ...sourceoptions,
    ...Distination.map((s) => {
      return { label: s.nom, value: s.idclient };
    }),
  ];

  //

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handelChangeValues = (e) => {
    setnewrelation((preCars) => ({
      ...preCars,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    async function name() {
      const responce = await fetchallStr();
      setSource(responce);

      let dis = await fetchClients();

      setDistination(dis);
    }
    name();
  }, []);

  // if (!load) {
  //   const filteredItems = useMemo(() => {
  //     console;
  //     return Source.filter((item) =>
  //       item.Designation.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //   }, [searchText]);
  // }

  return (
    <div className="">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(newrelation);
          const responce = await addrelations(newrelation);
          if (responce) {
            handelsuccess();
            handelclose();
          }
        }}
        className="flex items-center flex-col  w-11/12 m-auto gap-1 p-5"
      >
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Ajouter Déstination
        </h2>
        {/* <Autocomplete
          // onSelect={(e) => {
          //   // console.log(e.target);
          //   setnewrelation({ ...newrelation, source: e.target.value });
          // }}
          className="w-80"
          options={sourceoptions}
          renderInput={(params) => <TextField {...params} label="Soucrs" />}
        /> */}
        <Autocomplete
          value={`${sourc}`}
          disabled={true}
          // onSelect={(e) => {
          //   // console.log(e.target);
          //   setnewrelation({ ...newrelation, source: e.target.value });
          // }}
          className="w-80"
          options={sourceoptions}
          renderInput={(params) => <TextField {...params} label="Soucrs" />}
        />
        <Autocomplete
          onSelect={(e) => {
            // console.log(e.target.value);
            setnewrelation({ ...newrelation, distination: e.target.value });
          }}
          className="w-80"
          options={distaionsOption}
          renderInput={(params) => (
            <TextField {...params} label="Déstination" />
          )}
        />
        <TextField
          required
          label="P.U"
          type="number"
          className="w-80"
          name="Pu"
          onChange={handelChangeValues}
        />
        <TextField
          required
          label="Km"
          type="text"
          className="w-80"
          name="Km"
          onChange={handelChangeValues}
        />
        <div className="flex gap-4 mt-6">
          <Button
            variant="outlined"
            onClick={handelclose}
            sx={{ width: "fit-content", textTransform: "none" }}
          >
            {" "}
            Anuuler
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "fit-content", textTransform: "none" }}
          >
            Ajouter
          </Button>
        </div>

        {/* <TextField
              label="Search"
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <List>
              {Source.map((item) => (
                <ListItem key={item.CodeS}>
                  <ListItemText primary={item.Designation} />
                </ListItem>
              ))}
            </List> */}
      </form>
    </div>
  );
}

export default addrelation;
