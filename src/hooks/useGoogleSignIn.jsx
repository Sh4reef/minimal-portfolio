import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebaseConfig";

const useGoogleSignIn = () => {
  const [error, setError] = useState(null);

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (err) {
      setError(err);
      console.log("Google Sign-In Error:", err);
    }
  };

  return { signIn, error };
};

export default useGoogleSignIn;
