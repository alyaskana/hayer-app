import { createContext, FC, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { User } from "shared/types/user";
import { authFetcher } from "shared/api";

type AuthContext = {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
};

const authContext = createContext<AuthContext>(null);

export const AuthProvider: FC = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const TOKEN_KEY = "token";

const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    SecureStore.getItemAsync(TOKEN_KEY).then((res) => setToken(res));
  });

  const login = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      authFetcher
        .login(email, password)
        .then((response) => {
          const token = response.headers.authorization;
          setToken(token);
          setUser(response.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  return { user, token, login };
};
