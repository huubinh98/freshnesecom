const { createContext, useState } = require("react");

const AuthContext = createContext()



export const AuthProvider = ({ children }) => {

  const [login, setLogin] = useState(false);

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}
