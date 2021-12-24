const { createContext, useState } = require("react");

const AuthContext = createContext()



export const AuthProvider = ({ children }) => {

  const [login, setLogin] = useState(false);

  const submitLogin = () => {
    setLogin(true);
  }
  const submitLogout = () => {
    setLogin(false);
  }


  return (
    <AuthContext.Provider value={{ login, submitLogin, submitLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
