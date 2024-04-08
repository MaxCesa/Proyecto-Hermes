import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header.tsx";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
