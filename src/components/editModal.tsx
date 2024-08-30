"use client";

import { Note } from "@/interfaces/note.interface";
import React, { useState } from "react";

interface UpdateNoteModalProps {
  note: Partial<Note>;
  onClose: () => void;
}

export function UpdateNoteModal(props: UpdateNoteModalProps) {
  const { note, onClose } = props;
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);
  const handleUpdate = () => {
    console.log("dvkdjnvkdnvkdnvd");
  };

  console.log("vkdnkndknkjbvjbjehvsjkvgeuvgiuek");
  console.log(note, "vsdjbhdjvsevgekugvkuej");

  return (
    <div className="fixed bg-slate-300 flex justify-center items-center inset-0 z-50">
      <div className="relative p-[20px] w-[400px] bg-white rounded-lg">
        <button className="text-neutral-950 h-8 w-8 absolute top-2 right-2 border-2 rounded-full flex justify-center items-center cursor-pointer" onClick={onClose}>
          &times;
        </button>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex justify-center items-center w-full">
            {" "}
            <h1 className="text-neutral-950">Update Note</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-neutral-950 p-2 rounded-md">
              Title:
            </label>
            <input
              className="text-neutral-950 p-2 rounded-md"
              type="text"
              id="title"
              placeholder="Enter title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Content" className="text-neutral-950">
              Content:
            </label>
            <textarea className="text-neutral-950" id="Content" value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} />
          </div>
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
