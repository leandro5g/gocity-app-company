import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { api } from "../services/api";

import { useStorage } from "../hooks/storage";

import { UserDTO } from "../dtos/UserDTO";

interface SignInProps {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(data: SignInProps): Promise<string | void>;
  token: string;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC = ({ children }) => {
  const { getItem, saveStorage, removeItem, KEY_TOKEN, KEY_USER } =
    useStorage();

  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  useEffect(() => {
    loadDataStorage();
  }, []);

  const loadDataStorage = useCallback(async () => {
    const response = await getItem(KEY_TOKEN);

    if (response?.token) {
      const dataUser = await getItem(KEY_USER);

      api.defaults.headers.common.Authorization = `Bearer ${response?.token}`;

      setUser(dataUser?.user);
      setToken(response?.token);
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInProps) => {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      await saveStorage({ key: KEY_TOKEN, data: { token } });
      await saveStorage({ key: KEY_USER, data: { user } });

      setUser(user);
      setToken(token);
    } catch (error) {
      console.log(error);
      return String(error?.response?.status || 400);
    }
  }, []);

  const signOut = useCallback(async () => {
    setToken("");
    setUser({} as UserDTO);

    await removeItem(KEY_USER);
    await removeItem(KEY_TOKEN);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        token,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthContextProvider, useAuth };
