import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "@/firebaseConfig";

const useChatData = (chatId) => {
  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    if (chatId) {
      const chatRef = ref(database, `chats/${chatId}`);

      // Listen for changes to the chat data in Firebase Realtime Database
      const unsubscribe = onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        setChatData(data); // Update chatData with fetched data
      });

      // Cleanup function (optional, in case the component unmounts)
      return () => unsubscribe();
    }
  }, [chatId]); // Dependency array, triggers effect when chatId changes

  return { chatData };
};

export default useChatData;
