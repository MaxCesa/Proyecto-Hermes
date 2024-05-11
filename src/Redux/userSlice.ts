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
  curretUser: defaultUser,
  currentSelectedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      //set loged in user
      state.curretUser = action.payload;
    },
    setUsers: (state, action) => {},
  },
});

export const { setUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
