import React, { useState } from "react";
import { BoltIcon, Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-container  flex justify-between">
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
      {isOpen ? (
        <div className=" absolute -top-32 duration-1000  right-2  gap-4 text-blue-500">
          <div className="">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/meals"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Meals
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </div>
        </div>
      ) : (
        <div className=" absolute md:hidden top-16 duration-1000  right-4  gap-4 text-blue-500">
          <div className="">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/meals"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Meals
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}

      <div className="md:flex  hidden gap-4 text-blue-500">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/meals"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Meals
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
