import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  userName: string;
}

interface UserState {
  arrayUser: User[];
}

const initialState: UserState = {
  arrayUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUsers: () => initialState,
  },
});

export default userSlice.reducer;
export const { resetUsers } = userSlice.actions;
