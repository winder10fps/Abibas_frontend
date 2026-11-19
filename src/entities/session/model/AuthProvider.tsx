import { useCallback, useEffect, useState, type ReactNode } from "react";
import { getMeRequest, type UserProfile } from "@/entities/session";
import { tokenStorage } from "@/shared/lib";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isAuth, setIsAuth] = useState<boolean>(() => Boolean(tokenStorage.getToken()));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const login = useCallback((token: string, userData: UserProfile) => {
    tokenStorage.setToken(token);
    setIsAuth(true);
    if (userData) {
      setUser(userData);
    }
  }, []);

  const logout = useCallback(() => {
    tokenStorage.removeToken();
    setUser(null);
    setIsAuth(false);
  }, []);

  // восстановление при загрузке или обновлении
  useEffect(() => {
    const checkAuth = async () => {
      const token = tokenStorage.getToken();
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const user = await getMeRequest();
        setUser(user);
        setIsAuth(true);
      } catch {
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, isAuth, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}