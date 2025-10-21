import axios from "axios";
import type Contact from "@/models/contact";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getContacts = async (): Promise<Contact[]> => {
  const res = await api.get<Contact[]>("/contacts");
  return res.data;
};

export const createContact = async (contact: Omit<Contact, "id" | "createdOn" | "modifiedOn">): Promise<Contact> => {
  const res = await api.post<Contact>("/contacts", contact);
  return res.data;
};

export const updateContact = async (id: number, contact: Partial<Contact>): Promise<Contact> => {
  const res = await api.put<{ message: string; contact: Contact }>(`/contacts/${id}`, contact);
  return res.data.contact;
};

export default {
  getContacts,
  createContact,
  updateContact,
};
