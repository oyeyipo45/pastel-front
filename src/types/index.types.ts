import { Note } from '@/interfaces/note.interface';

export interface NoteResponse {
  data: Note[];
  message: string;
  success: boolean;
  status : number
}