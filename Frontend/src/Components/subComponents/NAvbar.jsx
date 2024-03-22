import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../API/auth.js";
import { counterWarning } from "../../API/Contract.js";
import { CountNotValidDoc } from "../../API/Cars.js";
// import { counterWarningCar } from "../../API/Cars.js";
import { removeuser } from "../../Store/index.js";
import logo from "/assets/cdnlogo.com_naftal.svg";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Menu,
  MenuItem,
  Button,
  Badge,
  Drawer,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuList,
  List,
  ListItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const { User: user, Droit } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const [ifadmin, setifadmin] = useState(false);
  const [ContratWaning, setContratWaning] = useState(0);
  const [DocumanttWaning, setDocumanttWaning] = useState(0);
  ///////////////////////////////////fro menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);

  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);
  ///////////////////////////////// fro Drawer///////////////////////
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false);
  // console.log(user);

  const handelDrawer = () => {
    setIsDrawerOpen(!IsDrawerOpen);
  };

  useEffect(() => {
    counterWarning().then((nbr) => {
      setContratWaning(nbr);
    });
    CountNotValidDoc().then((nbr) => {
      // console.log(nbr);
      setDocumanttWaning(nbr);
    });
    // if (user.Accesses) {
    //   const instenct = user.Accesses.find((access) => access.name === "admin");
    //   if (instenct) setifadmin(true);
    // }
  }, []);

  return (
    <div className="bg-[#0c5490] w-full h-[9%] flex p-5  justify-between  ">
      {" "}
      <div className="flex  items-center    justify-between content-stretch  min-w-[100px] mx-5">
        <div
          className="text-white flex justify-between gap-3    items-center  
                "
        >
          <div className="mb-[0.2rem] mr-5">
            <Badge
              // sx={{ fontSize: "2px" }}
              badgeContent={ContratWaning + DocumanttWaning}
              color="error"
            >
              <MenuTwoToneIcon
                color="primary"
                className="cursor-pointer"
                onClick={handelDrawer}
              />
            </Badge>
          </div>
          <Drawer open={IsDrawerOpen} onClose={handelDrawer} className="w-3">
            <div
              className="bg-[#353535] w-[17em] text-[#ffffff] h-full relative"
              role="presentation"
              onClick={handelDrawer}
              onKeyDown={handelDrawer}
            >
              <div className="w-full flex flex-col items-center px-8 py-4 gap-2 h-fit ">
                <img
                  className="w-32 h-32 "
                  src="/assets/user.png"
                  alt="Profile"
                />
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => {
                    navigate("/profile");
                  }}
                  sx={{
                    width: "10rem",
                    textTransform: "none",
                  }}
                >
                  Profile
                </Button>
              </div>
              <Divider />
              <div className="w-full flex flex-col items-center px-8 py-4 gap-2 h-fit">
                {" "}
                <Badge
                  badgeContent={ContratWaning + DocumanttWaning}
                  color="error"
                >
                  <Accordion
                    sx={{
                      bgcolor: "orange",
                      color: "lightgray",
                      width: "14rem",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        width: "100%",
                        // justifyContent: "center",
                        // display: "flex",
                      }}
                    >
                      <span className="w-full text-center">Alerte</span>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: "0px" }}>
                      <List>
                        <ListItem>
                          <Link
                            to="/vehicule"
                            className="text-sm flex justify-between w-full"
                          >
                            Documents Expiré
                            <span className="bg-red-700 rounded-full w-5 h-5 text-center mr-1">
                              {DocumanttWaning}
                            </span>
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            to="/contrats"
                            className="text-sm flex justify-between w-full"
                          >
                            Contrat Expiré
                            <span className="bg-red-700 rounded-full w-5 h-5 text-center mr-1">
                              {ContratWaning}
                            </span>
                          </Link>
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Badge>
                {/* <Button
                    id="basic-button3"
                    aria-controls={open3 ? "basic-menu3" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open3 ? "true" : undefined}
                    variant="outlined"
                    sx={{ textTransform: "none", width: "10rem" }}
                    color="warning"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAnchorEl3(e.currentTarget);
                    }}
                  >
                    Alerte
                  </Button>
                  <Menu
                    id="basic-menu3"
                    anchorEl={anchorEl3}
                    open={open3}
                    onClose={() => {
                      setAnchorEl3(null);
                    }}
                    MenuListProps={{
                      "aria-labelledby": "basic-button3",
                    }}
                  >
                    <MenuItem
                      className="flex justify-stretch"
                      sx={{ bgcolor: "darkgray", width: "10rem" }}
                    >
                      <Link to="/modele" className="w-full h-full text-center">
                        Modele
                      </Link>
                    </MenuItem>
                    <MenuItem
                      sx={{ bgcolor: "darkgray", width: "10rem" }}
                      className="flex justify-stretch"
                    >
                      <Link to="/Relation" className="w-full h-full text-center ">
                        Relations
                      </Link>
                    </MenuItem>
                  </Menu> */}
              </div>
              <div className="bottom-0 absolute flex justify-center w-full p-6">
                {" "}
                <Button
                  color="error"
                  sx={{ textTransform: "none" }}
                  variant="outlined"
                  size="large"
                  className="p-3 normal-case w-full"
                  onClick={async () => {
                    await logout();
                    dispatch(removeuser());
                    window.history.replaceState(null, "", "/");
                    navigate("/", { replace: true });
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </Drawer>
          {/* ////////////////////////////////////////////////////////////////////////////////////// */}
          {Droit.car.some((element) => element === true) && (
            <Button
              variant="text"
              aria-controls={open2 ? "basic-menu2" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              sx={{
                textTransform: "none",
                fontSize: "1.15rem",
              }}
              className="text-center text-white w-fit"
              onClick={(e) => {
                setAnchorEl2(e.currentTarget);
              }}
            >
              Vehicules
            </Button>
          )}
          <Menu
            id="basic-menu2"
            anchorEl={anchorEl2}
            open={open2}
            onClose={() => {
              setAnchorEl2(null);
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem className="flex justify-stretch">
              <Link
                to="/vehicule"
                className="w-full h-full text-center normal-case"
              >
                Parce potentiel
              </Link>
            </MenuItem>
            <MenuItem className="flex justify-stretch">
              <Link
                to="/vehicule/reforme"
                className="w-full h-full text-center"
              >
                Réformée
              </Link>
            </MenuItem>
          </Menu>{" "}
          {Droit.Contrat.some((element) => element === true) && (
            <Link to="/contrats">
              <Button
                variant="text"
                className="text-center text-white w-fit"
                sx={{ textTransform: "none", fontSize: "1.15rem" }}
              >
                Contrat
              </Button>
            </Link>
          )}
          {Droit.user.some((element) => element === true) && (
            <Link to="/utilisateur">
              <Button
                variant="text"
                className="text-white"
                sx={{ textTransform: "none", fontSize: "1.15rem" }}
              >
                Utilisateurs
              </Button>
            </Link>
          )}
          {(Droit.Modele.some((element) => element === true) ||
            Droit.chf.some((element) => element === true) ||
            Droit.relation.some((element) => element === true)) && (
            <Button
              id="basic-button"
              sx={{
                textTransform: "none",
                fontSize: "1.15rem",
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="text"
              onClick={(e) => {
                e.stopPropagation();
                setAnchorEl(e.currentTarget);
              }}
            >
              Autres
            </Button>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              setAnchorEl(null);
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {Droit.Modele.some((element) => element === true) && (
              <MenuItem className="flex justify-stretch">
                <Link to="/modele" className="w-full h-full text-center">
                  Modele
                </Link>
              </MenuItem>
            )}
            {Droit.relation.some((element) => element === true) && (
              <MenuItem className="flex justify-stretch">
                <Link to="/Relation" className="w-full h-full text-center">
                  Relations
                </Link>
              </MenuItem>
            )}
            {Droit.chf.some((element) => element === true) && (
              <MenuItem className="flex justify-stretch">
                <Link to="/chauffeur" className="w-full h-full text-center">
                  Chauffeur
                </Link>
              </MenuItem>
            )}
          </Menu>
        </div>
      </div>
      <img
        src={logo}
        onClick={() => {
          navigate("/home");
        }}
        className="mr-5 w-20 cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
