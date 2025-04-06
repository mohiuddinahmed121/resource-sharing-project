import { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
   };
   const signInWithGithub = () => {
      return signInWithPopup(auth, githubProvider);
   };

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
         setUser(currenUser);
         setLoading(false);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      signInWithGoogle,
      signInWithGithub,
   };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
