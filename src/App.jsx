import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Homepage from "./Homepage";
import Quizzes from "./Quizzes";
import Signup from "./Signup";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";

export default function App() {
  return (
    <div>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="firstproject" element={<FirstProject />} />
           */}
        </Routes>
      </>
    </div>
  );
}

function NavBar() {
  return (
    <div className="navbar">
      {/*<img
        className="logo"
        src={logo}
        alt="Portfolio"
        width="100"
        height="50"
      />*/}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Homepage
      </NavLink>

      <NavLink
        to="/quizzes"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Quizzes{" "}
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Sign Up
      </NavLink>

      <NavLink
        to="/signin"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Sign In
      </NavLink>
    </div>
  );
}
