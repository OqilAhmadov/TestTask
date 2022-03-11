
enum ActionType {
  USER_LOGIN = "USER_LOGIN",
  USER_LOGOUT = "USER_LOGOUT",
}

type Action =
  | {
      type: ActionType.USER_LOGIN;
    }
  | {
      type: ActionType.USER_LOGOUT;
    };

let defaultState = {
  username: null,
  password: null,
};

export const UserReducer = (state: any = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN:
      return {
        ...state,
        user: (state = localStorage.getItem("userInfo")),
      };
    case ActionType.USER_LOGOUT:
      return {
        ...state,
        user: (state = {
          username: null,
          password: null,
        }),
      };
    default:
      return state;
  }
};
