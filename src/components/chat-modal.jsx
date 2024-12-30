import React from "react";
import { useAtom } from "jotai";
import Modal from "./modal";
import { isChatModalOpen } from "@/atoms";
import Chat from "./chat";

const ChatModal = () => {
  const [state, setIsModalOpen] = useAtom(isChatModalOpen);
  const { open, chatId } = state;

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose} title="Chat">
      <Chat chatId={chatId} />
    </Modal>
  );
};

export default ChatModal;
