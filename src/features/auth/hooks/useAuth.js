import { useAuthStore } from "../store/auth.store";

export const useAuth = () => {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const setAuth = useAuthStore((state) => state.setAuth);
  const logout = useAuthStore((state) => state.logout);

  return {
    token,
    user,
    setAuth,
    logout,
  };
};
