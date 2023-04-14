import React, { useRef, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Link } from "react-router-dom";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);

const SignIn = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setSuccess("");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          return alert("Your email is not verified");
        }
        setSuccess("Log in Successful");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  const handleResetPass = () => {
    const resetEmail = emailRef.current.value;
    if (!resetEmail) {
      alert("Please enter your email here");
    }
    sendPasswordResetEmail(auth, resetEmail).then(() =>
      alert("please check your email")
    );
  };

  return (
    <div>
      <div className="md:w-1/2 mx-auto my-4 border p-4 shadow-lg">
        <h2 className="text-3xl font-semibold text-center">Sign in Form</h2>
        <br />
        <p className="text-green-400 text-center my-4">{success}</p>
        <p className="text-yellow-400 text-center my-4">{error}</p>
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            ref={emailRef}
            className="bg-slate-100 p-3 w-full rounded"
            type="email"
            required
            placeholder="Email or username"
            name="email"
          />
          <br />
          <div className="flex relative">
            <input
              className="bg-slate-100 p-3 w-full rounded my-4"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
            />
            <EyeIcon
              onClick={() => setShowPass(!showPass)}
              className="h-6 w-6 text-blue-500 cursor-pointer absolute top-7 right-4"
            />
          </div>
          <br />
          <p>
            Forget password ?{" "}
            <span onClick={handleResetPass} className="btn btn-link">
              Reset
            </span>
          </p>
          <input
            className="btn btn-success my-4 w-full"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div className="w-1/2 m-auto my-4 p-8 text-center">
        {" "}
        <h3 className="text-warning">Don't have a account ?</h3>
        <Link className="text-violet-600" to="/register">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
