import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./Firebase.ts";
import { toastErr } from "../utils/toast.ts";
import catchErr from "../utils/catchErr.ts";
import { NavigateFunction } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const BE_signUp = (
  data: {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
  },
  reset: () => void,
  routeTo: NavigateFunction
) => {
  const { email, username, password, passwordConfirm } = data;
  if (email && password) {
    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          addUserToCollection(user.uid, email, username, "imgLinkPlaceholder");
          reset();
          routeTo("/dashboard");
        })
        .catch((err) => catchErr(err));
      reset();
    } else {
      toastErr("Las contraseñas no coinciden");
    }
  } else {
    toastErr("Los espacios no pueden estar en blanco");
  }
};

export const BE_signIn = (
  data: { email: string; password: string },
  reset: () => void,
  routeTo: NavigateFunction
) => {
  const { email, password } = data;
  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        reset();
        routeTo("/dashboard");
      })
      .catch((err) => {
        catchErr(err);
        reset();
      });
  } else {
    toastErr("Los espacios no pueden estar en blanco");
  }
};

const addUserToCollection = async (
  id: string,
  email: string,
  username: string,
  img: string
) => {
  await setDoc(doc(db, "users", id), {
    isOnline: true,
    img,
    username,
    email,
    creationTime: serverTimestamp(),
    lastSeen: serverTimestamp(),
    bio: "La mas reciente araña en unirse a nuestra red.",
  });
};
