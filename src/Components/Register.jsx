import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {
    createUser,
    sendVerifyEmail,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(password, confirmPassword);
    setSuccess("");
    setError("");
    if (password !== confirmPassword) {
      return alert("Confirm password didn't match check again");
    }
    createUser(email, password)
      .then((res) => {
        sendVerifyEmail(res.user).then((res) =>
          alert("A verification code has sent to your mail")
        );
        console.log(res.user);
        setSuccess("Your account is created successfully");
      })
      .catch((err) =>
        setError("Already have an account or something is wrong")
      );
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
        <h2 className="text-3xl font-semibold text-center">Sign Up Form</h2>
        <br />
        <hr />
        <p className="text-green-400 text-center my-4">{success}</p>
        <p className="text-yellow-400 text-center my-4">{error}</p>
        <br />
        <form onSubmit={handleRegister}>
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
              placeholder=" password"
              name="password"
              required
            />
            <EyeIcon
              onClick={() => setShowPass(!showPass)}
              className="h-6 w-6 text-blue-500 cursor-pointer absolute top-7 right-4"
            />
          </div>
          <div className="flex relative">
            <input
              className="bg-slate-100 p-3 w-full rounded "
              type={showPass ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmPassword"
              required
            />
            <EyeIcon
              onClick={() => setShowPass(!showPass)}
              className="h-6 w-6 text-blue-500 cursor-pointer absolute top-4 right-4"
            />
          </div>

          <br />
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
        <h3 className="text-warning">Have an account ?</h3>
        <Link className="text-violet-600" to="/signin">
          Sign in here
        </Link>
      </div>
    </div>
  );
};

export default Register;
