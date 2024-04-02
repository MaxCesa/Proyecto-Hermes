import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-CPblack h-[100vh] flex items-center justify-center p-100">
      {/*login*/}
      <div className="w-full md:w-[450px]">
        <h1 className="text-CPyellow cyber-glitch-4 text-center cyberpunk-font text-4xl md:text-6xl mb-10">
          Hermes
        </h1>
        <div className="flex flex-col gap-3 bg-transparent cyber-glitch-2 p-6 min-h-[150px] border-CPred border-8">
          <input
            type="text"
            placeholder="Ingrese nombre"
            className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full text-CPwhite"
          />
          <input
            type="text"
            placeholder="Ingrese contraseña"
            className="flex-1 bg-transparent px-3 py-1 border-2 border-CPred rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
