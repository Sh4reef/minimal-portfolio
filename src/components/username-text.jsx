import useUserById from "@/hooks/useUser";

const UsernameText = ({ userId }) => {
  const { user, loading, error } = useUserById(userId);

  return loading ? "..." : user?.username;
};

export default UsernameText;
