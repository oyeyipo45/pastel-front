import { ListNotes, Note } from "@/interfaces/note.interface";

export default function List(props: ListNotes) {
  const { notes } = props;
  
  
    
    if (!notes) return <div>No notes</div>
    
  return (
    <div>
      {notes.map((note: Note) => {
        return (
          <div key={note._id}>
            <div className="flex flex-col my-4 bg-slate-300 rounded-xl">
              <div className="flex justify-between p-4 gap-40">
                <div className="">
                  <h2 className="text-neutral-950">Title : {note.title}</h2>
                  <p className="text-neutral-950">Content : {note.content}</p>
                </div>

                <div className="flex justify-between gap-6">
                  <button className="text-blue-500">Edit</button>
                  <button className="text-red-500">Delete</button>
                </div>
              </div>
            </div>
            {/* <NoteCard title={note.title} content={note.content} /> */}
          </div>
        );
      })}
    </div>
  );
}
