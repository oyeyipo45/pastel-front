import { Note } from "@/interfaces/note.interface";

export default function NoteCard(props: Partial<Note>) {
  const { title, content } = props;
  return (
    <div className="rounded-md p-10 bg-slate-500">
      <h2 className="text-neutral-950">{title}</h2>
      <p className="text-neutral-950">{content}</p>
    </div>
  );
}
