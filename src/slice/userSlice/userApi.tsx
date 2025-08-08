import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  endpoints: (build) => ({
    getUsers: build.query<any[], string>({
      query: (input) => `?username=${input}`,
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi;
