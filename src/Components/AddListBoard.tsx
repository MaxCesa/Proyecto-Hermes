import React from "react";
import Button from "./Button.tsx";
import { MdAdd } from "react-icons/md";
import Icon from "./Icon.tsx";

const AddListBoard = () => {
  return (
    <>
      <Button text="Nueva publicacion" className="hidden md:flex"></Button>
      <Icon IconName={MdAdd} className="block md:hidden"></Icon>
    </>
  );
};
