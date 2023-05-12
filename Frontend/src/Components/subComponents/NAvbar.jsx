import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../API/auth.js";
import { removeuser } from "../../Store/index.js";
import logo from "/assets/cdnlogo.com_naftal.svg";
import { RiSearch2Line } from "react-icons/ri";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <div className="flex  items-center    justify-between content-stretch  min-w-[100px] mx-5">
        <div
          className="text-white flex justify-between gap-3    items-center  
                "
        >
          <Menu>
            <MenuHandler>
              <Button variant="text" className="text-center text-white w-fit">
                Autres
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex justify-stretch">
                <Link to="/modele" className="w-full h-full text-center">
                  Modele
                </Link>
              </MenuItem>
              <MenuItem className="flex justify-stretch">
                <Link to="/Relation" className="w-full h-full text-center">
                  Relations
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <Link to="/home">
            {" "}
            <Button variant="text" className="text-white">
              Vehicules
            </Button>
          </Link>
          <Link to="/contrats">
            <Button variant="text" className="text-center text-white w-fit">
              Contrat
            </Button>
          </Link>

          {ifadmin && (
            <Link to="/admin">
              <Button variant="text" className="text-white">
                Admin
              </Button>
            </Link>
          )}
          <Link>
            <Button
              color="red"
              variant="gradient"
              className="p-3 normal-case w-fit"
              onClick={async () => {
                await logout();
                dispatch(removeuser());
                window.history.replaceState(null, "", "/");
                navigate("/", { replace: true });
              }}
            >
              Logout
            </Button>
          </Link>
        </div>
        {/* <div>
          <RiSearch2Line color="#787878" />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
