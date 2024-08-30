"use client";

import List from "@/components/listNotes";
import { useGetNotesQuery } from "@/redux/api";
import Loader from "./loader";
import NoteInput from "./input";
import Image from "next/image";
import * as logo from "../assets/logo.png";

export default function Container() {
  const { data: notes, isLoading } = useGetNotesQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex justify-center items-center mb-10">
        <Image src={logo} alt="Pastel" width={300} height={70} />
      </div>
      <div className="border-[0.1px] border-zinc-300 w-full mb-4 " />
      <NoteInput />
      <div className="border-[0.1px] border-zinc-300 w-full mb-4 " />
      {notes && (
        <>
          <div className="text-neutral-950 text-xl md:text-2xl font-medium">Notes</div>
          <List notes={notes.data} />
        </>
      )}{" "}
    </>
  );
}
