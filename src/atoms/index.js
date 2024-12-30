import { atom, createStore } from "jotai";

export const store = createStore();

export const isChatListModalOpen = atom(false);

export const isChatModalOpen = atom({ open: false, chatId: null });
