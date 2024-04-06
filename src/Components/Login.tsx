import React, { useState } from "react";
import Input from "./Input.tsx";
import "../Assets/main.css";
const Login = () => {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [referenceKey, setReferenceKey] = useState("");

  const handleSignup = () => {
    const data = { username, password, passwordConfirm, referenceKey };
  };
  const handleSignin = () => {
    const data = { username, password };
  };

  return (
    <div className="w-full md:w-[450px]">
      <h1 className="text-CPyellow cyber-glitch-4 text-center cyberpunk-font text-4xl md:text-6xl mb-10">
        {login ? "Hermes" : "Unete"}
      </h1>
      <div className="flex flex-col gap-3 bg-transparent cyber-glitch-2 p-6 min-h-[150px] border-CPred border-8">
        <Input
          name="alias"
          className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
            className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        )}
        {!login && (
          <Input
            name="clave de referencia"
            className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite font-oxanium"
            value={referenceKey}
            onChange={(e) => setReferenceKey(e.target.value)}
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
        <h2 className="text-CPred font-oxanium">
          ¿No sos parte de la red?{" "}
          <button className="underline" onClick={() => setLogin(false)}>
            Unite
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Login;
