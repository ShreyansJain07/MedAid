import React from "react";
import { useState, createContext, useMemo } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "../components/Admin Logged In Contents/AdminHome";
import Contact from "../components/Logged In Contents/Contact";
import Donate from "../components/Logged In Contents/Donate";
import Home from "../components/Logged In Contents/Home";
import NGO from "../components/Logged In Contents/NGO";
import Volunteer from "../components/Logged In Contents/Volunteer";
import LandingPage from "../components/Login Form and Sign Up/LandingPage";
import LoginForm from "../components/Login Form and Sign Up/LoginForm";
import SignUpPage from "../components/Login Form and Sign Up/SignUpPage";

// Context
const usernameContext = createContext({
  username: [],
  setUsername: () => {},
});
const passwordContext = createContext({
  password: [],
  setPassword: () => {},
});
const AdminUsernameContext = createContext({
  AdminUsername: [],
  setAdminUsername: () => {},
});
const AdminPasswordContext = createContext({
  AdminPassword: [],
  setAdminPassword: () => {},
});

const Navigation = () => {
  // useContext
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [AdminUsername, setAdminUsername] = useState();
  const [AdminPassword, setAdminPassword] = useState();
  const usernameVal = useMemo(() => ({ username, setUsername }), [username]);
  const passwordVal = useMemo(() => ({ password, setPassword }), [password]);
  const AdminUsernameVal = useMemo(
    () => ({ AdminUsername, setAdminUsername }),
    [AdminUsername]
  );
  const AdminPasswordVal = useMemo(
    () => ({ AdminPassword, setAdminPassword }),
    [AdminPassword]
  );

  return (
    <div>
      <usernameContext.Provider value={usernameVal}>
        <passwordContext.Provider value={passwordVal}>
          <AdminUsernameContext.Provider value={AdminUsernameVal}>
            <AdminPasswordContext.Provider value={AdminPasswordVal}>
              {/* <div> */}

              <div>
                <Routes>
                  <Route exact path="/" element={<LandingPage />} />
                  <Route exact path="/login" element={<LoginForm />} />
                  <Route exact path="/signup" element={<SignUpPage />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/donate" element={<Donate />} />
                  <Route exact path="/volunteer" element={<Volunteer />} />
                  <Route exact path="/ngo" element={<NGO />} />
                  <Route exact path="/adminhome" element={<AdminHome />} />
                </Routes>
              </div>
              {/* </div> */}
            </AdminPasswordContext.Provider>
          </AdminUsernameContext.Provider>
        </passwordContext.Provider>
      </usernameContext.Provider>
    </div>
  );
};

export default Navigation;
export {
  usernameContext,
  passwordContext,
  AdminUsernameContext,
  AdminPasswordContext,
};
