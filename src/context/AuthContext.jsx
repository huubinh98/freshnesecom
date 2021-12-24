import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const [name, setName] = useState("");
  return (
    <AuthContext.Provider value={{ login, setLogin, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
