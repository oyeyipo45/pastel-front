"use client";

import { Note } from "@/interfaces/note.interface";
import { useDeleteNoteMutation } from "@/redux/api";
import { UpdateNoteModal } from "./editModal";
import { useState } from "react";

export default function NoteCard(props: Partial<Note>) {
  const { title, content, _id } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const onClose = () => setOpenModal(false);

  const [deleteNote] = useDeleteNoteMutation();

  const handleNoteDelete = async (_id: string) => {
    try {
      await deleteNote(_id).unwrap();
    } catch (error) {}
  };

  const handleEdit = async (_id: string) => {
    setOpenModal(true);
  };

  return (
    <>
      {openModal && <UpdateNoteModal note={props} onClose={onClose} />}
      <div className="flex flex-col my-4 bg-white border-1 rounded-xl shadow shadow-blue-500/40 hover:shadow-indigo-500/40">
        <div className="flex justify-between p-4 gap-4 flex-col md:flex-row md:gap-10 items-start md:items-center">
          <div className="">
            <h2 className="text-neutral-950">Title : {title}</h2>
            <p className="text-neutral-950 text-wrap">Content : {content}</p>
          </div>

          <div className="flex justify-between gap-6 h-[40px]r">
            <button
              className="text-blue-500 px-4 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white cursor"
              onClick={() => handleEdit(_id as string)}
            >
              Edit
            </button>
            <button
              className="text-red-500 px-4 py-2 rounded-md border border-red-500 hover:bg-red-500 hover:text-white cursor"
              onClick={() => handleNoteDelete(_id as string)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
