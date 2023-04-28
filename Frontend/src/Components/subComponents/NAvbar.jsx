import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {H}from "@material-tailwind/react"
import { logo } from "../../assets/index";
import { RiSearch2Line } from "react-icons/ri";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

function Navbar() {
  const [ifadmin, setifadmin] = useState(false);
  const user = useSelector((state) => {
    return state.User;
  });

  // console.log(user);

  useEffect(() => {
    if (user.Accesses) {
      const instenct = user.Accesses.find((access) => access.name === "admin");
      if (instenct) setifadmin(true);
    }
  }, []);

  return (
    <div className="bg-[#0c5490] w-full h-[9%] flex p-5  justify-between  ">
      {" "}
      <img src={logo} className="ml-5 w-20" />
      <div className="flex  items-center  sm:w-96 w-60  justify-between content-stretch  min-w-[100px] mr-10">
        <div
          className="text-white flex justify-between pl-6 sm:w-[75%]  w-44  items-center  
                "
        >
          <Link to="/home">
            {" "}
            <Button variant="text" className="text-white">
              Vehicules
            </Button>
          </Link>

          <Menu>
            <MenuHandler>
              <div>
                <Button variant="text" className="text-center text-white w-fit">
                  Contrat
                </Button>
              </div>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Link to="/contrats/addcontract">ADD</Link>
              </MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>

          {ifadmin && (
            <Link to="/admin">
              <Button variant="text" className="text-white">
                Admin
              </Button>
            </Link>
          )}
        </div>
        <div>
          <RiSearch2Line color="#787878" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
