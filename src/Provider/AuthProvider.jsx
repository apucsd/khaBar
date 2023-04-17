import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

/////////////auth and the providers
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
//////////////////////////////////////////
// create context and exporting it
export const AuthContext = createContext(null);
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
////////////////////send verify email
const sendVerifyEmail = (user) => {
  return sendEmailVerification(user);
};
//////////////////////////////sign in with google
const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};
////////////////////////////sign in with github
const signInWithGithub = () => {
  return signInWithPopup(auth, githubProvider);
};
////////////////////////////SIGN IN WITH FACEBOOK
const signInWithFacebook = () => {
  return signInWithPopup(auth, facebookProvider);
};
////////////////////////////////log out
const logOut = () => {
  return signOut(auth);
};

////////////////
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authInfo = {
    createUser,
    sendVerifyEmail,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    signInWithGithub,
    user,
    logOut,
    loading,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
