export interface Note {
  title: string;
  content: string;
  _id: string;
  createdAt: string;
  isDeleted: boolean;
}

export interface ListNotes {
  notes: Note[];
}
