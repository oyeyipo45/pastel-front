"use client";

import { useCreateNoteMutation } from "@/redux/api";
import { useState } from "react";

const NoteInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError("");
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const [createNote] = useCreateNoteMutation();

  const createPostHandler = async () => {
    if (!title || !content) {
      setError("Please fill all fields");
    } else {
      await createNote({ title, content }).unwrap();
      setError("");
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="">
      <p className="text-neutral-950">Create Note</p>
      <div className="flex justify-between my-4 gap-4 flex-col md:flex-row">
        <input className="text-neutral-950 p-2 rounded-md" name="title" value={title} type="text" placeholder="Add Title" onChange={handleChange} />
        <input
          className="text-neutral-950 p-2 rounded-md"
          name="content"
          value={content}
          type="text"
          placeholder="Add Content"
          onChange={handleChange}
        />
        <button id="push" type="submit" onClick={createPostHandler} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add Post
        </button>
      </div>
      <p className="text-red-500 h-[30px]">{error}</p>
    </div>
  );
};

export default NoteInput;
