const { createContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const [name, setName] = useState("");
  return (
    <AuthContext.Provider value={{ login, setLogin, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};
