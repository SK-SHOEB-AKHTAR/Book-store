import  { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  
  const initialAuthUser = localStorage.getItem("Users");

  let parsedAuthUser;
  try {
    parsedAuthUser = initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    parsedAuthUser = null;
  }

  const [authUser, setAuthUser] = useState(parsedAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
