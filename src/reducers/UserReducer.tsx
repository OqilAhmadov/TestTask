

let defaultState = {
  username: null, 
  password: null,
}

export const UserReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        user: state = localStorage.getItem("userInfo") ,
      };
      case "USER_LOGOUT":
        return {
          ...state,
          user: state = {
            username: null,
            password: null,
          } ,
        }
    default:
      return state;
  }
}

