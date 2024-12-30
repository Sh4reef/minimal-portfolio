import React, { useMemo } from "react";
import UsernameText from "./username-text";
import useChatData from "@/hooks/useChat";
import useAuth from "@/hooks/useAuth";

const ChatListItem = ({ chatId, onClick }) => {
  const { user } = useAuth();
  const { chatData } = useChatData(chatId);
  const isAdmin = user?.uid === "T3Qe3NC11lggVH5QIL6SzHTntUx2";
  const client = useMemo(() => {
    if (chatData) {
      return Object.keys(chatData["members"]).filter(
        (member) => member !== user?.uid
      )[0];
    }
  }, [chatData]);
  const lastMessage = useMemo(() => {
    if (chatData) {
      return Object.values(chatData["messages"]).sort(
        (a, b) => b["timestamp"] - a["timestamp"]
      )[0];
    }
  }, [chatData]);

  return (
    <li
      className="p-4 hover:bg-gray-100 flex items-center hover:cursor-pointer"
      onClick={onClick}
    >
      <img
        className="h-10 w-10 rounded-full object-cover"
        src="https://via.placeholder.com/150"
        alt="User 1"
      />
      <div className="ml-3">
        <p className="text-gray-800 font-medium">
          {isAdmin ? <UsernameText userId={client} /> : "Developer"}
        </p>
        <p className="text-gray-600 text-sm">{lastMessage?.content}</p>
      </div>
    </li>
  );
};

export default ChatListItem;
