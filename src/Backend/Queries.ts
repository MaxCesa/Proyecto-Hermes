import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./Firebase.ts";
import { toastErr } from "../utils/toast.ts";
import catchErr from "../utils/catchErr.ts";
import { NavigateFunction } from "react-router-dom";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { userType } from "../Types.ts";
import { defaultUser } from "../Redux/userSlice.ts";
import { AppDispatch } from "../Redux/store.ts";
import { setUser } from "../Redux/userSlice.ts";
import AvatarGenerator from "../utils/avatarGenerator.ts";

export const BE_signUp = (
  data: {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
  },
  reset: () => void,
  routeTo: NavigateFunction,
  dispatch: AppDispatch
) => {
  const { email, username, password, passwordConfirm } = data;
  if (email && password) {
    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          const imgLink = AvatarGenerator(username);

          const userInfo = await addUserToCollection(
            user.uid,
            email,
            username,
            imgLink
          );

          dispatch(setUser(userInfo));
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
  routeTo: NavigateFunction,
  dispatch: AppDispatch
) => {
  const { email, password } = data;
  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateUserInfo({ id: user.uid, isOnline: true });

        const userInfo = await getUserInfo(user.uid);

        dispatch(setUser(userInfo));
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

const updateUserInfo = async ({
  id,
  username,
  img,
  isOnline,
  isOffline,
}: {
  id?: string;
  username?: string;
  img?: string;
  isOnline?: boolean;
  isOffline?: boolean;
}) => {
  if (!id) {
    id = getStorageUser().id;
  }

  if (id) {
    await updateDoc(doc(db, "users", id), {
      ...(username && { username }),
      ...(isOnline && { isOnline }),
      ...(isOffline && { isOnline: false }),
      ...(img && { img }),
    });
  }
};

const getStorageUser = () => {
  const user = localStorage.getItem("edgerunner");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};
