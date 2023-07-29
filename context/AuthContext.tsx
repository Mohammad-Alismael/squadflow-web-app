import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  uid: string;
  email: string;
  photoUrl: string;
}

interface AuthContextValue {
  user: User;
  setUser: (user: User) => void;
}

const initialState: User = {
  uid: "",
  email: "",
  photoUrl: "",
};

const AuthContext = createContext<AuthContextValue>({
  user: initialState,
  setUser: () => {},
});

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(initialState);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
