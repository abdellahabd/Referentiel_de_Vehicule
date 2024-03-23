import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiDownload } from "react-icons/hi";
import { Button } from "@mui/material";
import { BsArrowLeft } from "react-icons/bs";
function Profile() {
  const user = useSelector((state) => {
    return state.User;
  });

  const pass = (user) => {
    let password = "";
    for (let i = 0; i < user.passwordLenght; i++) {
      password += "a";
    }
    return password;
  };
  console.log(user);
  return (
    <div className={`h-screen p-3`}>
      <div
        className={`border-2 border-[#ffa500] bg-[#e5e5e5] rounded-md   h-full flex justify-center items-center relative`}
      >
        <BsArrowLeft
          className="absolute cursor-pointer top-4 left-10"
          size={40}
          onClick={() => {
            history.back();
          }}
        />
        <div className=" w-11/12 h-[30rem] bg-[#f5f5f5] relative shadow-2xl">
          {" "}
          <img
            className="w-60 h-60  absolute top-[-4rem] left-10 z-10 hover:opacity-25 hover:blur-sm  duration-500 cursor-pointer"
            src="/assets/user.png"
            alt="Profile"
          />
          <div className="w-60 h-60 absolute top-[-4rem] left-10 rounded-full bg-[#e5e5e5] flex justify-center items-center cursor-pointer">
            <HiDownload className="" size={30} color="#ffa500" />
          </div>
          <div className="bg-gradient-to-r h-2 from-[#f2d715] via-[#e4ab1c] to-[#193561]"></div>
          <div className="absolute left-[30%] top-[28%]  pl w-[40rem]">
            <div className="grid grid-cols-2 w-[80%] gap-2 ">
              <label className="w-40 text-2xl">nom :</label>
              <input
                value={user.name}
                className="border-[0.5px] text-2xl w-11/12 border-gray-600 rounded-sm ml-10 text-gray-600"
                disabled={true}
                size="small"
              />{" "}
              <label className="w-40 text-2xl">Prenom :</label>
              <input
                value={user.name}
                className="border-[0.5px] text-2xl w-11/12 border-gray-600 rounded-sm ml-10 text-gray-600"
                disabled={true}
                size="small"
              />{" "}
              <label className="w-40 text-2xl">Compte :</label>
              <input
                value={user.email}
                className="border-[0.5px] text-2xl w-11/12 border-gray-600 rounded-sm ml-10 text-gray-600"
                disabled={true}
                size="smll"
              />{" "}
              <label className="w-40 text-2xl">Password :</label>
              <input
                className="border-[0.5px] text-2xl w-11/12 border-gray-600 rounded-sm ml-10 text-gray-600"
                type="password"
                value={pass(user)}
                lang={6}
                disabled={true}
                size="small"
              />{" "}
              <label className="w-40 text-2xl">Structure :</label>
              <input
                className="border-[0.5px] text-2xl w-11/12 border-gray-600 rounded-sm ml-10 text-gray-600"
                value={user.StructerCodeS}
                disabled={true}
                size="small"
              />{" "}
              <div className="absolute bottom-[-3rem] ">
                <Button
                  variant="outlined"
                  sx={{ textTransform: "none" }}
                  color="inherit"
                >
                  Changé password{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
