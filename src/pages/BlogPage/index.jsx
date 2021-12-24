import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function BlogPage() {
  const { name, setName, login, setLogin } = useContext(AuthContext);
  const handleChange = (ev) => {
    setName(ev.target.value);
  };

  return (
    <div>
      {login ? (
        ""
      ) : (
        <>
          <input type="text" value={name} onChange={handleChange} />
          <button onClick={() => setLogin(true)}>Login</button>
        </>
      )}
    </div>
  );
}
