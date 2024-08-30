import { configureStore } from "@reduxjs/toolkit";
import { NoteAPI } from "./api";

export const store = configureStore({
  reducer: {
    [NoteAPI.reducerPath]: NoteAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NoteAPI.middleware),
});

/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
