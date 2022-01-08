const initialState = {
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO":
      return {
        userInfo: action.payload,
      };
  }
  return state;
};

export default userReducer;
