import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NoteResponse } from "@/types/index.types";
import { Note } from "@/interfaces/note.interface";

// Define a service using a base URL and expected endpoints
export const NoteAPI = createApi({
  reducerPath: "notes",
  tagTypes: ["Note"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9090/v1/api" }),
  endpoints: (builder) => ({
    getNotes: builder.query<NoteResponse, void>({
      query: () => ({
        url: "/notes",
      }),
      providesTags: (result, error, arg) => (result ? [...result.data.map(({ _id }) => ({ type: "Note" as const, _id })), "Note"] : ["Note"]),
    }),
    createNote: builder.mutation<NoteResponse, Partial<Note>>({
      query: (body) => ({
        url: "/notes",
        method: "Post",
        body,
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: builder.mutation<Omit<NoteResponse, "data">, string>({
      query: (_id) => ({
        url: `/notes/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNotesQuery, useCreateNoteMutation, useDeleteNoteMutation } = NoteAPI;
