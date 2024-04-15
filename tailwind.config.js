const autoprefixer = require("autoprefixer");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        CPyellow: "#f8ef02",
        CPcyan: "#00ffd2",
        CPred: "#ff003c",
        CPblue: "#136377",
        CPgreen: "#446d44",
        CPpurple: "purple",
        CPblack: "#000",
        CPwhite: "#fff",
        CPdark: "#333",
        CPdarkblue: "#0b1628",
      },
      fontFamily: {
        cyberpunk: "Cyberpunk",
        oxanium: "Oxanium",
        blender: "BlenderProBook",
      },
    },
  },
  plugins: [],
};
