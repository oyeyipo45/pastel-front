"use client";

import { Note } from "@/interfaces/note.interface";
import { useDeleteNoteMutation } from "@/redux/api";

export default function NoteCard(props: Partial<Note>) {
  const { title, content, _id } = props;

  const [deleteNote] = useDeleteNoteMutation();

  const handleNoteDelete = async (_id: string) => {
    try {
      await deleteNote(_id).unwrap();
    } catch (error) {}
  };

  const handleEdit = async (_id: string) => {
    try {
      await deleteNote(_id).unwrap();
    } catch (error) {}
  };
  return (
    <div className="flex flex-col my-4 bg-slate-300 rounded-xl">
      <div className="flex justify-between p-4 gap-40">
        <div className="">
          <h2 className="text-neutral-950">Title : {title}</h2>
          <p className="text-neutral-950">Content : {content}</p>
        </div>

        <div className="flex justify-between gap-6">
          <button
            className="text-blue-500 px-4 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={() => handleEdit(_id as string)}
          >
            Edit
          </button>
          <button
            className="text-red-500 px-4 py-2 rounded-md border border-red-500 hover:bg-red-500 hover:text-white"
            onClick={() => handleNoteDelete(_id as string)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
