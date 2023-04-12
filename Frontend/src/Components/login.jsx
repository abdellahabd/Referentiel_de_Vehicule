import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axoi from "axios";

function login() {
  const [Valeus, setValeus] = useState({
    email: "",
    password: "",
  });
  //

  const NAv = useNavigate();
  return (
    <div className="bg-[#1e1e1e] flex justify-center  flex-col  h-screen">
      {/*  */}
      <div className="bg-[#ffffff] mx-auto rounded-md p-4  h-[444px] ">
        <form
          className="pt-6 px-11 flex flex-col justify-between items-center h-full"
          onSubmit={async (e) => {
            e.preventDefault();
            NAv("/");
            // const respons = await axoi.get("http://localhost:2500/");
          }}
        >
          {/*  */}
          <h1 className="font-bold  text-lg mb-5">Login</h1>
          {/*  */}
          <div>
            {/* name */}
            <div className="relative mb-10 mt-6">
              <Input
                type="text"
                label="name"
                name="name"
                onChange={(e) => {
                  setValeus((prev) => {
                    const newemail = { email: e.target.value };
                    return { ...prev, ...newemail };
                  });
                  console.log(Valeus);
                }}
              />
            </div>
            {/* password */}
            <div className=" my-4 relative ">
              <Input
                type="password"
                label="Password"
                name="password"
                onChange={(e) => {
                  setValeus((prev) => {
                    return { ...prev, [e.target.name]: [e.target.value] };
                  });
                }}
              />
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
