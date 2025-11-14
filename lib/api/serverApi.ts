import { Note, NoteTag } from "@/types/note";
import { nextServer } from "./api";

interface FetchNotesResponse {
    notes: Note[],
    totalPages: number
};

export interface NewNote {
  title: string,
  content?: string,
  tag: NoteTag
};

export const fetchNotes = async (query: string, page: number, tag?:string): Promise<FetchNotesResponse> => {
  const response = await nextServer.get<FetchNotesResponse>('/notes', {
    params: {
      search: query,
      page,
      perPage: 10,
      tag
    }
  });
  return response.data;
};

export const fetchNoteById = async(id: string,): Promise<Note> => { 
    const response = await nextServer.get<Note>(`/notes/${id}`, );
    return response.data;
};