import React, { useEffect, useState } from "react";
import ChatListItem from "./chat-list-item";
import useAuth from "@/hooks/useAuth";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig";
import { useSetAtom } from "jotai";
import { isChatModalOpen } from "@/atoms";

const ChatList = () => {
  const { user, loading } = useAuth();
  const [chatIds, setChatIds] = useState([]);
  const setChatModal = useSetAtom(isChatModalOpen);

  useEffect(() => {
    if (user) {
      const userChatsRef = ref(database, `users/${user.uid}/chatIds`);
      get(userChatsRef).then((chatIds) => {
        setChatIds(Object.keys(chatIds.val()));
      });
    }
  }, [user]);

  useEffect(() => {
    if (chatIds?.length === 0) {
    }
  }, [chatIds]);

  return (
    <ul className="divide-y divide-gray-200 min-w-96">
      {chatIds?.map((chatId) => (
        <ChatListItem
          key={chatId}
          chatId={chatId}
          onClick={() => setChatModal({ open: true, chatId })}
        />
      ))}
    </ul>
  );
};

export default ChatList;
