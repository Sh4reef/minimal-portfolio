import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "@/firebaseConfig";
import { get, push, ref, set, update } from "firebase/database";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const isNewUser =
        currentUser &&
        currentUser?.metadata?.creationTime ===
          currentUser?.metadata?.lastSignInTime;
      if (isNewUser) {
        const newUserRef = ref(database, `users/${currentUser.uid}`);
        get(newUserRef).then((newUser) => {
          if (newUser.exists()) return;
          // create a new user record if not exist
          set(newUserRef, { role: "user", username: currentUser.displayName });
          const newUserChatIdsRef = ref(
            database,
            `users/${currentUser.uid}/chatIds`
          );
          const chatsRef = ref(database, `chats`);
          const newChat = push(chatsRef, {
            members: {
              T3Qe3NC11lggVH5QIL6SzHTntUx2: true,
              [currentUser.uid]: true,
            },
          });
          const adminChatIdsRef = ref(
            database,
            `users/T3Qe3NC11lggVH5QIL6SzHTntUx2/chatIds`
          );
          update(adminChatIdsRef, { [newChat.key]: true });
          const newChatMessagesRef = ref(
            database,
            `chats/${newChat.key}/messages`
          );
          push(newChatMessagesRef, {
            content: "Hi",
            sender: currentUser.uid,
            timestamp: new Date().getTime(),
          });
          update(newUserChatIdsRef, { [newChat.key]: true });
        });
      }
      setUser(currentUser); // Set the user object if logged in, otherwise null
      setLoading(false); // Update loading state
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useAuth;
