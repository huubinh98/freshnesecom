const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  login: !!token,
  loginStatus: false,
};

const authenReducer = (state = initialState, action) => {
<<<<<<< HEAD
    const { type, payload } = action;
    switch (type) {
        case "LOGIN":
            // handle data
            localStorage.setItem("token", JSON.stringify(payload));
            //update state
            return {
                login: !!token,
                loginStatus: true
            };
        case "REGIS":
            return {
                token: action.payload,
            };
        case "LOGOUT":
            localStorage.removeItem("token");
            return {
                login: !!token,
                loginStatus: false,
            };
        default:
            return state;
    }
=======
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      // handle data
      localStorage.setItem("token", JSON.stringify(payload));
      //update state
      return {
        login: !!token,
        loginStatus: true,
        // user: payload,
      };

    case "REGIS":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        login: false,
        user: null,
      };
    default:
      return state;
  }
>>>>>>> master
};

export default authenReducer;
