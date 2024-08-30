import { ListNotes, Note } from "@/interfaces/note.interface";
import NoteCard from "./noteCard";

export default function List(props: ListNotes) {
  const { notes } = props;

  if (!notes) return <div>No notes</div>;

  return (
    <div>
      {notes.map((note: Note) => {
        return (
          <div key={note._id}>
            <NoteCard title={note.title} content={note.content} />
          </div>
        );
      })}
    </div>
  );
}
