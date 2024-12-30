// Message.js
import useAuth from "@/hooks/useAuth";
import React from "react";

const ChatMessage = ({ text, sender }) => {
  const { user } = useAuth();
  const isRecievedMessage = user?.uid !== sender;

  return (
    <div
      className={`flex mb-3 ${
        isRecievedMessage ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`${
          isRecievedMessage
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-900"
        } p-3 rounded-lg max-w-xs`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
