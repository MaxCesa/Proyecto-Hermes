import exp from "constants";
import { toastErr } from "./toast.ts";

export const catchErr = (err: { code?: string }) => {
  const { code } = err;
  switch (code) {
    case "auth/user-not-found":
      toastErr("Usuario no encontrado.");
      break;
    case "auth/email-already-exists":
      toastErr("Email ya registrado.");
      break;
    case "auth/invalid-email":
      toastErr("Email invalido.");
      break;
    case "auth/invalid-password":
      toastErr("Contraseña invalida.");
      break;
    case "auth/too-many-requests":
      toastErr("Demasiadas peticiones. Intenta denuevo despues.");
      break;
  }
};
export default catchErr;
