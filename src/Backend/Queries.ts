import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./Firebase.ts";
import { toastErr } from "../utils/toast.ts";
import catchErr from "../utils/catchErr.ts";
import { NavigateFunction } from "react-router-dom";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { userType } from "../Types.ts";
import { defaultUser } from "../Redux/userSlice.ts";

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
          //TODO: crear imagen default de usuario

          const userInfo = addUserToCollection(
            user.uid,
            email,
            username,
            "imgLinkPlaceholder"
          );

          //TODO: setear informacion de usuario en firestore y local
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
        //TODO: actualizar estado online de usuario
        const userInfo = getUserInfo(user.uid);

        //TODO: setear informacion de usuario en firestore y local
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
    bio: "La mas reciente araña en unirse a nuestra red.",
  });

  return getUserInfo(id);
};

const getUserInfo = async (id: string): Promise<userType> => {
  const userRef = doc(db, "users", id);
  const user = await getDoc(userRef);

  if (user.exists()) {
    const { img, isOnline, username, email, bio } = user.data();
    return {
      id: user.id,
      img,
      isOnline,
      username,
      email,
      bio,
    };
  } else {
    toastErr("Usuario no encontrado");
    return defaultUser;
  }
};
