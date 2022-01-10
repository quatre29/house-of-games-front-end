import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getUser } from "../utils/apiRequests";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    setUser(JSON.parse(savedUser));
    setLoadingInitial(false);
  }, []);

  const signIn = async (username) => {
    setLoading(true);
    try {
      const user = await getUser(username.toLowerCase());

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const signOut = async () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const memoedValue = useMemo(
    () => ({
      user,
      signIn,
      error,
      loading,
      signOut,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
