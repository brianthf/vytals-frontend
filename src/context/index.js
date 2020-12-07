import React from "react";
import API from "../API";
import { clearToken, decodeToken } from "../helpers";

const initialState = {
  isAuthenticated: false,
  username: "",
  userId: "",
  roles: [],
};

const Actions = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  ERROR: "ERROR",
};

function Reducer(state, action) {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case Actions.ERROR:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

const AuthContext = React.createContext();

export function useAuthProvider() {
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  async function login(user) {
    try {
      let response = await API.login(user);
      if (response.status === 200) {
        let token = response.access_token;
        localStorage.setItem("token", token);
        let user = decodeToken(token);
        dispatch({ type: Actions.LOGIN_SUCCESS, payload: user });
      }
    } catch (err) {
      dispatch({
        type: Actions.ERROR,
        payload: { error: err.name, message: err.message },
      });
      alert(String(err));
    }
  }

  async function register(user) {
    try {
      let response = await API.login(user);
      if (response.status === 201) {
        let token = response.access_token;
        let user = decodeToken(token);
        dispatch({ type: Actions.REGISTER_SUCCESS, payload: user });
      }
    } catch (err) {
      dispatch({
        type: Actions.ERROR,
        payload: { error: err.name, message: err.message },
      });
      alert(String(err));
    }
  }

  function logout() {
    clearToken();
    dispatch({ type: Actions.LOGOUT });
  }

  return {
    state,
    login,
    logout,
    register,
  };
}

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("This function must be used within a StateProvider");
  }
  return context;
}
