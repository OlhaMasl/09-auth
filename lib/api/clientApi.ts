import { Note, NoteTag } from "@/types/note";
import { nextServer } from "./api";
import { User } from "@/types/user";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
};

export interface NewNote {
  title: string;
  content?: string;
  tag: NoteTag;
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

export const createNote = async(newNote: NewNote): Promise<Note> => { 
    const response = await nextServer.post<Note>('/notes', newNote,);
    return response.data;
};

export const deleteNote = async(noteId: string,): Promise<Note> => { 
    const response = await nextServer.delete<Note>(`/notes/${noteId}`,);
    return response.data;
};

export const fetchNoteById = async(id: string,): Promise<Note> => { 
    const response = await nextServer.get<Note>(`/notes/${id}`, );
    return response.data;
};

export type Request = {
  email: string;
  password: string;
};

export const register = async (data: Request) => {
  const res = await nextServer.post<User>('/auth/register', data);
  return res.data;
};


export const login = async (data: Request) => {
  const res = await nextServer.post<User>('/auth/login', data);
  return res.data;
};

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>('/users/me');
  return data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post('/auth/logout')
};

export type UpdateUserRequest = {
  email?: string;
  username?: string;
};

export const updateMe = async (payload: UpdateUserRequest) => {
  const res = await nextServer.patch<User>('/users/me', payload);
  return res.data;
};