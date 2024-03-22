import React, { useState, useEffect, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../API/auth.js";
import { MdError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addUser, adddroit } from "../Store/index.js";
import logo from "/assets/cdnlogo.com_naftal.svg";
function login() {
  const NAv = useNavigate();
  const Dispatch = useDispatch();

  /////////////////////////////////////////////////////////////////////

  const [Valeus, setValeus] = useState({
    email: "",
    password: "",
  });

  const [emailerros, setemailerros] = useState(false);

  const [passworderros, setpassworderros] = useState(false);

  const [erromsg, seterromsg] = useState("");

  /////////////////////////////////////////////////////////////////////

  const handelValueChange = (e) => {
    setValeus((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const HandelSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await postUserLogin(Valeus);
      if (response.error) {
        if (response.error.type === "email") {
          setemailerros(true);
          setpassworderros(false);
        } else {
          setpassworderros(true);
          setemailerros(false);
        }
        seterromsg(response.error.msg);
      } else {
        NAv("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////////////////////////////////////////

  return (
    <div className="bg-[#fffcf9] flex    ">
      {/*  */}

      <div className="bg-[#fffcf9] mx-auto rounded-md w-2/5  h-screen relative  ">
        <img src={logo} className=" w-20 top-10 left-10 absolute " />
        <form
          className="pt-6 px-11 flex flex-col  items-center h-full relative"
          onSubmit={HandelSubmit}
        >
          {/*  */}
          <h1 className="font-bold  text-lg mt-56 mb-5">Login</h1>
          {/*  */}
          <div className="absolute bottom-[40%]">
            {/* name */}
            <div className="relative mb-10">
              <TextField
                error={emailerros}
                type="text"
                label="email"
                name="email"
                onChange={handelValueChange}
              />
              {emailerros && (
                <p className=" ml-1 mt-1 text-sm text-red-500 flex items-center gap-1 ">
                  <MdError />
                  {erromsg}
                </p>
              )}
            </div>
            {/* password */}
            <div className=" my-4 relative ">
              <TextField
                error={passworderros}
                type="password"
                label="Password"
                name="password"
                onChange={handelValueChange}
              />
              {passworderros && (
                <p className=" ml-1 mt-1 text-sm text-red-500 flex items-center gap-1 ">
                  <MdError />
                  {erromsg}
                </p>
              )}
            </div>
          </div>
          <div className=" flex flex-col justify-between   absolute bottom-[30%] px-20">
            <Button
              color="warning"
              sx={{ textTransform: "none" }}
              className=" mx-auto normal-case box-border"
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <div className="w-3/5 bg-Naftal-pattern bg-no-repeat bg-cover h-screen "></div>
    </div>
  );
}

export default login;
