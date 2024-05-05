import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase.ts";
import { toastErr } from "../utils/toast.ts";
import catchErr from "../utils/catchErr.ts";

export const BE_signUp = (data: {
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  const { email, password, passwordConfirm } = data;
  if (email && password) {
    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          console.log(userCred);
        })
        .catch((err) => catchErr(err));
    } else {
      toastErr("Las contraseñas no coinciden");
    }
  } else {
    toastErr("Los espacios no pueden estar en blanco");
  }
};

export const BE_signIn = (data: { email: string; password: string }) => {};
