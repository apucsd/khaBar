import React, { useContext, useRef, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import app from "../Firebase/Firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const { createUser, signInWithGoogle, signInWithFacebook, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { name, signIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setSuccess("");
    signIn(email, password)
      .then((res) => {
        if (!res.user.emailVerified) {
          return alert("Your email is not verified yet");
        }
        console.log(res.user);
        setSuccess("Log in successful");
      })
      .catch((err) => {
        console.log(err.message);
        setError("Password is Wrong");
      });
  };

  ////////////////////sign in with google
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        setSuccess("Sign in with google is successful");
        console.log(res.user);
      })
      .catch((er) => setError(er.message));
  };
  ///////////////////////sign in with facebook
  const handleSignInWithFacebook = () => {
    signInWithFacebook().then((res) => {
      console.log(res.user);
      setSuccess("Sign in with facebook is successful");
    });
  };
  //////////////////////Sign In With github
  const handleSignInWithGithub = () => {
    signInWithGithub().then((res) => {
      console.log(res.user);
      setSuccess("Sign in with github is successful");
    });
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
            Forget password ? <span className="btn btn-link">Reset</span>
          </p>
          <input
            className="btn btn-success my-4 w-full"
            type="submit"
            value="Submit"
          />
          <h2 className="text-xl font-semibold text-center">
            ----------Sign in with----------
          </h2>
          <div className="flex gap-3 justify-center my-4">
            <div
              onClick={handleSignInWithGoogle}
              className="flex items-center "
            >
              <img
                className="w-8 h-8 cursor-pointer"
                src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
                alt=""
              />
            </div>
            <div onClick={handleSignInWithFacebook}>
              <img
                className="h-10  cursor-pointer w-10"
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png"
                alt=""
              />
            </div>
            <div onClick={handleSignInWithGithub}>
              <img
                className="h-9 w-16 cursor-pointer"
                src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.jpg"
                alt=""
              />
            </div>
          </div>
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
