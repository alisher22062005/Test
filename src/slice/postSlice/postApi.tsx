import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query<any[], void>({
      query: () => "posts",
    }),
  }),
});

// Export the hook to use in your component
export const { useGetPostsQuery } = postsApi;
