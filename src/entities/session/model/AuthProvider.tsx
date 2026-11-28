import { useCallback, useEffect, useState, type ReactNode } from "react";
import { getMeRequest, type UserProfile } from "@/entities/session";
import { tokenStorage } from "@/shared/lib";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isAuth, setIsAuth] = useState<boolean>(() => Boolean(tokenStorage.getAccessToken()));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loginUser = useCallback((access_token: string, refresh_token: string, rememberMe: boolean) => {
    tokenStorage.setTokens(access_token, refresh_token, rememberMe);
    setIsAuth(true);
  }, []);

  const logout = useCallback(() => {
    tokenStorage.removeTokens();
    setUser(null);
    setIsAuth(false);
  }, []);

  // восстановление при загрузке или обновлении
  useEffect(() => {
    const checkAuth = async () => {
      const token = tokenStorage.getAccessToken();
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
    <AuthContext.Provider value={{ user, isAuth, isLoading, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}