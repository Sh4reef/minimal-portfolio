import React from "react";
import { useAtom } from "jotai";
import { isChatListModalOpen } from "@/atoms";
import ChatList from "./chat-list";
import Modal from "./modal";

const ChatListModal = () => {
  const [open, setIsModalOpen] = useAtom(isChatListModalOpen);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose} title="Chat List">
      <ChatList />
    </Modal>
  );
};

export default ChatListModal;
