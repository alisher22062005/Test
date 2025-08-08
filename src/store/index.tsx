import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../slice/postSlice/postSlice";
import { postsApi } from "../slice/postSlice/postApi";
import userSlice from "../slice/userSlice/userSlice";
import { usersApi } from "../slice/userSlice/userApi";
import accountSlice from "../slice/isLogedIn/isLogedIn.tsx";
const store = configureStore({
  reducer: {
    post: postSlice,
    [postsApi.reducerPath]: postsApi.reducer,
    user: userSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    logIn: accountSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(usersApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
