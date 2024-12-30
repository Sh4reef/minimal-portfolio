import useAuth from "./useAuth";

const useIsAdmin = () => {
  const { user } = useAuth();
  const isAdmin = user?.uid === "T3Qe3NC11lggVH5QIL6SzHTntUx2";

  return isAdmin;
};

export default useIsAdmin;
