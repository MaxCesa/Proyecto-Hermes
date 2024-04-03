import React from "react";
import Input from "./Input.tsx";
import "../Assets/main.css";
const Login = () => {
  return (
    <div className="w-full md:w-[450px]">
      <h1 className="text-CPyellow cyber-glitch-4 text-center cyberpunk-font text-4xl md:text-6xl mb-10">
        Hermes
      </h1>
      <div className="flex flex-col gap-3 bg-transparent cyber-glitch-2 p-6 min-h-[150px] border-CPred border-8">
        <Input
          name="alias"
          className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
        />
        <Input
          name="contraseña"
          type="password"
          className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
        />
        <button className={"cyber-button fg-red bg-black"}>
          Iniciar
          <span className="glitchtext">DEEPDIVE</span>
          <span className="tag">R25</span>
        </button>
        <h2 className="text-CPred font-oxanium">
          ¿No sos parte de la red? <a className="underline">Unite</a>
        </h2>
      </div>
    </div>
  );
};

export default Login;
