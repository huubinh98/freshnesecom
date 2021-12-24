const { createContext, useState } = require("react");

const AuthContext = createContext()



export const AuthProvider = ({ children }) => {

  const [login, setLogin] = useState(false);

  const [name, setName] = useState("");
  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ login, setLogin, name, setName }}>
=======
    <AuthContext.Provider>
>>>>>>> master
      {children}
    </AuthContext.Provider>
  )
}
