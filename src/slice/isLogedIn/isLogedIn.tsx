import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

const account = createSlice({
  name: "account",
  initialState,
  reducers: {
    In(state) {
      state.isLoggedIn = true;
    },
    Out(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { In, Out } = account.actions;
export default account.reducer;
