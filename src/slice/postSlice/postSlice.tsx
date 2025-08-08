import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  title: string;
  description: string;
}

interface PostState {
  arrayPost: Post[];
}

const initialState: PostState = {
  arrayPost: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
