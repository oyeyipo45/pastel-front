import { useCreateNoteMutation } from "@/redux/api";
import { useState } from "react";

const NoteInput = () => {
  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "title") {
      SetTitle(value);
    } else if (name === "content") {
      SetContent(value);
    }
  };

  const [createNote] = useCreateNoteMutation();

  const createPostHandler = async () => {
    if (!title || !content) {
      alert("Please enter a fill all fields");
    } else {
      await createNote({ title, content }).unwrap();
      SetTitle("");
      SetContent("");
    }
  };

  return (
    <div className="postInput">
      <input className="text-neutral-950" name="title" value={title} type="text" placeholder="Add Title" onChange={handleChange} />
      <input className="text-neutral-950" name="content" value={content} type="text" placeholder="Add Content" onChange={handleChange} />
      <button id="push" type="submit" onClick={createPostHandler}>
        Add Post
      </button>
    </div>
  );
};

export default NoteInput;
