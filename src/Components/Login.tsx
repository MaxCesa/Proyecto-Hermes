import React, { useState } from "react";
import Input from "./Input.tsx";
import "../Assets/main.css";
import { BE_signIn, BE_signUp } from "../Backend/Queries.ts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const routeTo = useNavigate();
  const reset = () => {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setUsername("");
  };

  const handleSignup = () => {
    const data = { email, username, password, passwordConfirm };
    BE_signUp(data, reset, routeTo);
  };
  const handleSignin = () => {
    const data = { email, password };
    BE_signIn(data, reset, routeTo);
  };

  return (
    <div className="w-full md:w-[450px]">
      <h1 className="text-CPyellow cyber-glitch-4 text-center cyberpunk-font text-4xl md:text-6xl mb-10">
        {login ? "Hermes" : "Unete"}
      </h1>
      <div className="flex flex-col gap-3 bg-transparent cyber-glitch-2 p-6 min-h-[150px] border-CPred border-8">
        <Input
          name="direccion de correo"
          className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!login && (
          <Input
            name="nombre de usuario"
            type="text"
            className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <Input
          name="contraseña"
          type="password"
          className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!login && (
          <Input
            name="contraseña nuevamente"
            type="password"
            className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        )}
        <button
          className="cyber-button fg-red bg-black"
          onClick={login ? handleSignin : handleSignup}
        >
          {login ? "Iniciar" : "Unirse"}
          <span className="glitchtext">_citynet: [RESTRICTED]</span>
          <span className="tag">R25</span>
        </button>
        {login ? (
          <h2 className="text-CPred font-oxanium">
            ¿No sos parte de la red?{" "}
            <button className="underline" onClick={() => setLogin(false)}>
              Unite
            </button>
          </h2>
        ) : (
          <h2 className="text-CPred font-oxanium">
            ¿Ya sos parte de la red?{" "}
            <button className="underline" onClick={() => setLogin(true)}>
              Inicia sesion
            </button>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Login;
