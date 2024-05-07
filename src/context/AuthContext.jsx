import { createContext, useEffect, useState } from "react";
import * as userAPI from "../apis/userApi";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // Login => user = {}
  // Logout => user = null
  const login = async () => {
    // Note: api("/login")
    try {
      const res = await userAPI.getUserById(1);
      setUser(res.data);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  //   useEffect(() => {
  //     login();
  //   }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
