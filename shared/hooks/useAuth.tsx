import { createContext, FC, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { User } from "shared/types/user";
import { authFetcher } from "shared/api";

type AuthContext = {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (id: string | number, data: Record<string, string>) => Promise<void>;
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
    // SecureStore.deleteItemAsync(TOKEN_KEY); // очистка логина
    SecureStore.getItemAsync(TOKEN_KEY).then((res) => setToken(res));
  });

  const login = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      authFetcher
        .login(email, password)
        .then((response) => {
          const token = response.headers.authorization;
          SecureStore.setItemAsync(TOKEN_KEY, token);
          setToken(token);
          setUser(response.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const signUp = (id: string, data: Record<string, string>) => {
    return new Promise((resolve, reject) => {
      authFetcher
        .completeSignUp(id, data)
        .then((response) => {
          console.log("+++++++++++111", response.headers.authorization);

          const token = response.headers.authorization;
          SecureStore.setItemAsync(TOKEN_KEY, token);
          setToken(token);
          setUser(response.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  return { user, token, login, signUp };
};
