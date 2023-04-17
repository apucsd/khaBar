import React, { useContext, useState } from "react";
import { BoltIcon, Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);

  const handleLogOut = () => {
    logOut().then(() => alert("log out successful"));
  };
  return (
    <div className="my-container  flex justify-between mx-8 md:mx-12">
      <Link to="/">
        <div className="flex items-center gap-2">
          <BoltIcon className="h-8 w-8 text-blue-500" />
          <h2 className="text-xl font-semibold font-mono text-violet-500">
            Kha.Bar
          </h2>
        </div>
      </Link>
      <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <Bars3Icon className="h-8 w-8 text-blue-500" />
        ) : (
          <XCircleIcon className="h-8 w-8 text-blue-500" />
        )}
      </div>

      <div
        className={`flex md:flex-row md:bg-transparent md:p-2 duration-500 flex-col gap-4 md:static absolute z-10  ${
          isOpen
            ? "-right-64 hidden md:flex top-16 p-12  bg-slate-50 "
            : "top-16  p-12 right-2 bg-slate-50"
        }`}
      >
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/meals"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Meals
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(!isOpen)}
          to="/signin"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sign in
        </NavLink>
      </div>
      <div>
        {user ? (
          <span>
            <small>{user.displayName ? user.displayName : user.email}</small>
            <button onClick={handleLogOut} className="btn btn-secondary mx-4">
              Log Out
            </button>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
