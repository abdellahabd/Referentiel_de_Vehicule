import React, { useState, useEffect, useContext } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../API/auth.js";
import { MdError } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Store/index.js";

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
      Dispatch(addUser(response.user));
      NAv("/home");
    }
  };

  /////////////////////////////////////////////////////////////////////

  return (
    <div className="bg-[#1e1e1e] flex justify-center  flex-col  h-screen">
      {/*  */}
      <div className="bg-[#ffffff] mx-auto rounded-md p-4  h-[444px] ">
        <form
          className="pt-6 px-11 flex flex-col justify-between items-center h-full"
          onSubmit={HandelSubmit}
        >
          {/*  */}
          <h1 className="font-bold  text-lg mb-5">Login</h1>
          {/*  */}
          <div>
            {/* name */}
            <div className="relative mb-10 mt-6">
              <Input
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
              <Input
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
          <div className="mt-4 flex flex-col justify-between">
            <Button className="mt-5 mx-auto " type="submit">
              Login
            </Button>
            {/* <p className="mt-6 text-gray-600">
              don't have an acount?{" "}
              <Link className="text-gray-900 underline" to="singup">
                Register
              </Link>
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
