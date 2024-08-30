"use client";

import { Note } from "@/interfaces/note.interface";
import { useUpdateNoteMutation } from "@/redux/api";
import React, { useState } from "react";

interface UpdateNoteModalProps {
  note: Partial<Note>;
  onClose: () => void;
}

export function UpdateNoteModal(props: UpdateNoteModalProps) {
  const { note, onClose } = props;
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);
  const [error, setError] = useState("");

  const [updateNote] = useUpdateNoteMutation();

  const handleUpdate = async () => {
    try {
      if (!updatedTitle || !updatedContent) {
        setError("Please fill all fields");
      } else {
        await updateNote({ _id: note._id, title: updatedTitle, content: updatedContent }).unwrap();
        setError("");
        setUpdatedTitle("");
        setUpdatedContent("");
        onClose();
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="fixed bg-slate-300 flex justify-center items-center inset-0 z-50">
      <div className="relative p-[20px] w-[400px] bg-red-300 rounded-lg">
        <button
          className="text-neutral-950 h-8 w-8 absolute top-2 right-2 border-2 rounded-full flex justify-center items-center cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex justify-center items-center w-full">
            {" "}
            <h1 className="text-neutral-950">Update Note</h1>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="title" className="text-neutral-950 p-2">
              Title:
            </label>
            <input
              className="text-neutral-950 p-2 rounded-md w-full"
              type="text"
              id="title"
              placeholder="Enter title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="Content" className="text-neutral-950">
              Content:
            </label>
            <textarea
              className="text-neutral-950 p-2 rounded-md w-full"
              id="Content"
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
            />
          </div>
          <p className="text-red-500 h-[30px]">{error}</p>
          <button
            className="text-blue-500 px-4 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white cursor"
            onClick={handleUpdate}
          >
            Update note
          </button>
        </div>
      </div>
    </div>
  );
}
