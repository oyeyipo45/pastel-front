"use client";

import { ListNotes, Note } from "@/interfaces/note.interface";
import NoteCard from "./noteCard";

export default function List(props: ListNotes) {
  const { notes } = props;

  if (notes.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-neutral-950">No Notes available</h1>
      </div>
    );

  return (
    <div>
      {notes.map((note: Note) => {
        return (
          <div key={note._id}>
            <NoteCard title={note.title} content={note.content} _id={note._id} />
          </div>
        );
      })}
    </div>
  );
}
