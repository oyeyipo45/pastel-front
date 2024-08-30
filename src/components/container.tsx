"use client";

import List from "@/components/listNotes";
import { useGetNotesQuery } from "@/redux/api";
import Loader from "./loader";

export default function Container() {
  const { data: notes, isLoading } = useGetNotesQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {notes && (
        <>
          <div className="text-neutral-950">Notes</div>
          <List notes={notes.data} />{" "}
        </>
      )}{" "}
    </>
  );
}
