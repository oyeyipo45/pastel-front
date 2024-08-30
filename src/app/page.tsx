"use client";

import Container from "@/components/container";
import MainLayout from "@/components/layout";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <MainLayout>
      <Provider store={store}>
        <Container />
      </Provider>
    </MainLayout>
  );
}
