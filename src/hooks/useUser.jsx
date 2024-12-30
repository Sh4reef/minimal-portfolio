import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "@/firebaseConfig";

const useUserById = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const userRef = ref(database, `users/${userId}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();

          if (userData) {
            setUser(userData);
          } else {
            setUser(null);
            setError("User not found.");
          }
        } else {
          setUser(null);
          setError("No users found in the database.");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};

export default useUserById;
