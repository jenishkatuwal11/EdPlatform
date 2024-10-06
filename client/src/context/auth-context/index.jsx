import { createContext } from "react";

// Create the context
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  // You can pass some state or values into the context if necessary
  // const [auth, setAuth] = useState(null);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
