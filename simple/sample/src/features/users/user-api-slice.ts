import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface Users {
  name: string;
  username: string;
}

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "users",
        method: "POST",
        body: contact,
      }),
    }),
  }),
});
export const { useGetUsersQuery, useAddContactMutation } = usersApi;
