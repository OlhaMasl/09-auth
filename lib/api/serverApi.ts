import { Note, NoteTag } from "@/types/note";
import { nextServer } from "./api";
import { User } from "@/types/user";
import { cookies } from 'next/headers';

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServer.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
};

interface FetchNotesResponse {
    notes: Note[],
    totalPages: number
};

export interface NewNote {
  title: string,
  content?: string,
  tag: NoteTag
};

export const fetchNotes = async (query: string, page: number, tag?: string): Promise<FetchNotesResponse> => {
  const cookieStore = await cookies();
  const response = await nextServer.get<FetchNotesResponse>('/notes', {
    headers: {
      Cookie: cookieStore.toString(),
    },
    params: {
      search: query,
      page,
      perPage: 10,
      tag
    }
  });
  return response.data;
};

export const fetchNoteById = async (id: string,): Promise<Note> => { 
  const cookieStore = await cookies();
    const response = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
    return response.data;
};

export const getMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};