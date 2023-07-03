import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { AuthContext } from "../auth/AuthContext";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoutes";
import Home from "../components/Home";
import PublicRoute from "./PublicRoutes";

const MainApp = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={<PrivateRoute isAuthenticated={auth.isAuthenticated} />}
          >
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<h1>NOT FOUND</h1>} />
          </Route>
          <Route
            element={<PublicRoute isAuthenticated={auth.isAuthenticated} />}
          >
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainApp;
