import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../Types";

export const defaultUser: userType = {
  id: "",
  username: "",
  img: "",
  isOnline: false,
  email: "",
};

const initialState = {
  user: [],
  currentUser: defaultUser,
  currentSelectedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      localStorage.setItem("edgerunner", JSON.stringify(user));
      state.currentUser = action.payload;
    },
    setUsers: (state, action) => {},
  },
});

export const { setUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
