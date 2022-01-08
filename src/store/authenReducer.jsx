const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  login: !!token,
  loginStatus: false,
};

const authenReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(`action`, action);
  switch (type) {
    case "LOGIN":
      // handle data
      localStorage.setItem("token", JSON.stringify(payload));
      //update state
      console.log(`token`, !!token);
      return {
        login: !!token,
        loginStatus: true,
      };

    case "REGIS":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("login");
      return {
        login: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authenReducer;
