import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NoteResponse } from "@/types/index.types";

// Define a service using a base URL and expected endpoints
export const NoteAPI = createApi({
  reducerPath: "notes",
  tagTypes: ["Note"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9090/v1/api" }),
  endpoints: (builder) => ({
    getNotes: builder.query<NoteResponse, void>({
      query: () => ({
        url: "/notes"
      }),
      providesTags: (result, error, arg) => (result ? [...result.data.map(({ _id }) => ({ type: "Note" as const, _id })), "Note"] : ["Note"]),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNotesQuery } = NoteAPI;
