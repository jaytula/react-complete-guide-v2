import { createContext } from "react";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  onLogout: () => void;
}>({
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
