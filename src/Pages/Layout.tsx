import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header.tsx";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="h-[100vh] flex flex-col">
      <Header />
      <div className="bg-CPdarkblue flex-1 max-h-[90%]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
