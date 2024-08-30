"use client";

import List from "@/components/listNotes";
import { useGetNotesQuery } from "@/redux/api";
import Loader from "./loader";
import NoteInput from "./input";

export default function Container() {
  const { data: notes, isLoading } = useGetNotesQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <NoteInput />
      {notes && (
        <>
          <div className="text-neutral-950">Notes</div>
          <List notes={notes.data} />{" "}
        </>
      )}{" "}
    </>
  );
}
