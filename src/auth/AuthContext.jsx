import { createContext, useCallback, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  firstName: null,
  lastName: null,
  token: null,
  checking: true,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (data) => {
    const url = "http://localhost:3003/api/auth/signin";
    const response = await axios.post(url, data);
    if (response.data.token) {
      const { token, firstName, lastName } = response.data;
      localStorage.setItem("token", token);
      setAuth({
        isAuthenticated: true,
        firstName,
        lastName,
        token,
        checking: false,
      });
    }
  };

  const register = async (data) => {
    const url = "http://localhost:3003/api/auth/signup";
    const response = await axios.post(url, data);
  };

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({ ...auth, isAuthenticated: true, token, checking: false });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ ...initialState, checking: false });
  };

  return (
    <AuthContext.Provider
      value={{ auth, login, register, verifyToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
