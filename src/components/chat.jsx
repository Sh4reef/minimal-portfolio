import React, { useEffect, useMemo, useRef, useState } from "react";
import ChatMessage from "./chat-message"; // Import the Message component
import useChatData from "@/hooks/useChat";
import useAuth from "@/hooks/useAuth";
import useIsAdmin from "@/hooks/useIsAdmin";
import UsernameText from "./username-text";
import axios from "axios";

const Chat = ({ chatId }) => {
  const bottomEndRef = useRef();
  const { chatData } = useChatData(chatId);
  const { user } = useAuth();
  const isAdmin = useIsAdmin();

  const clientMember = useMemo(() => {
    if (chatData) {
      return Object.keys(chatData["members"]).filter(
        (member) => member !== user?.uid
      )[0];
    }
  }, [chatData]);

  const messages = useMemo(() => {
    if (chatData) {
      return Object.values(chatData["messages"]);
    }

    return [];
  }, [chatData]);

  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim() === "") return;
    try {
      const res = axios.post(
        `/api/sendMessage?chatId=${chatId}`,
        {
          content: input,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  useEffect(() => {
    if (chatData) {
      bottomEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatData]);

  return (
    <div className="flex flex-col w-full max-w-lg h-[calc(100vh-320px)] bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">
          Chat with{" "}
          {isAdmin ? <UsernameText userId={clientMember} /> : "Developer"}
        </h1>
        <button className="text-sm bg-blue-700 px-3 py-1 rounded hover:bg-blue-800">
          End Chat
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, idx) => (
          <ChatMessage
            key={idx}
            text={message.content}
            sender={message.sender}
          />
        ))}
        <div ref={bottomEndRef} />
      </div>

      {/* Input Section */}
      <div className="flex items-center bg-gray-200 p-4">
        <input
          type="text"
          className="flex-1 bg-white p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
