import { Outlet, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getuser } from "../../API/auth";

export const RequireAuth = () => {
  const user = useSelector((state) => {
    return state.User;
  });

  return <>{user.name != "" ? <Outlet /> : <Navigate to="/" />}</>;
};
