import React, { useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
const SignIn = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => console.log(err));
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => setUser(res.user))
      .then((err) => console.log(err));
  };

  const handleSignOut = () => {
    signOut(auth).then((res) => {
      alert("Sign out successfully");
      setUser(null);
    });
  };

  return (
    <div className="h-screen items-center mx-auto my-4 text-center grid md:grid-cols-2">
      <img
        className="w-full"
        src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=740&t=st=1681392049~exp=1681392649~hmac=cdc166c93e1739f3acd24f6ca5813514f0bfc31c461bf6012321c1caf83f71ac"
        alt=""
      />
      <div className="text-center">
        <div>
          {user && (
            <div className="my-4">
              <img className="mx-auto w-32" src={user.photoURL} alt="" />
              <h2 className="text-lg font-semibold">
                Name: {user.displayName}
              </h2>
              <h2 className="text-lg font-semibold">Name: {user.email}</h2>
            </div>
          )}
        </div>
        {user ? (
          <div>
            <h1>Sign out with</h1>
            <button className="btn btn-primary my-4" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        ) : (
          <div>
            <h1>Sign in With</h1>
            <button onClick={handleGoogleSignIn}>
              <img
                className="w-12"
                src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                alt=""
              />
            </button>

            <button onClick={handleGithubSignIn}>
              <img
                className="w-14"
                src="data:image/png;base64,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"
                alt=""
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
