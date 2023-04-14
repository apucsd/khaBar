import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccess("");
    setError("");

    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Please add at least one special character");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Your registration is successful");
        verifyEmail(result.user);
      })
      .catch((err) => setError(err.message));

    const verifyEmail = (user) => {
      sendEmailVerification(user).then(() => {
        alert("A verification mail has sent your email");
        // ...
      });
    };
    e.target.reset();
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
          <input
            className="btn btn-success my-4 w-full"
            type="submit"
            value="Submit"
          />
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
