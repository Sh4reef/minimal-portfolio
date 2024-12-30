import { auth, googleProvider } from "@/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user; // User info
    console.log("User:", user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};
