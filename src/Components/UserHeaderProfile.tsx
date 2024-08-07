import React from "react";
import { userType } from "../Types.ts";

type Props = {
  //TODO: Hacer usuario no opcional al averiguar como obtener usuario actual
  user?: userType;
  handleClick?: () => void;
};

function UserHeaderProfile({ user, handleClick }: Props) {
  return (
    <div
      onClick={handleClick}
      className="flex items-center space-x-4 cursor-pointer"
    >
      <div className="relative">
        <img
          //Cambia esto con el TODO de arriba
          //src={user.img}
          alt="Imagen de usuario"
          className="w-11 h-11 rounded-full ring-2 ring-CPred"
        ></img>
      </div>
      <div className="hidden md:block">
        //TODO: change this shit
        <div>PlaceholderName</div>
      </div>
    </div>
  );
}

export default UserHeaderProfile;
