import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
  },
});

/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
