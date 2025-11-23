import React from 'react';
import { AuthContext } from './AuthContext';
import { CgPassword } from 'react-icons/cg';
import { auth } from '../../../fairbase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const createUser = (email , password) => {
   return createUserWithEmailAndPassword(auth ,email , password)
  }

  const signIn = (email , password) => {
    return signInWithEmailAndPassword(auth , email, password)
  }

  const logOut = () => {
    return signOut(auth )
  }

   const google = ()=>{
    return signInWithPopup(auth,provider)
   }
  const getInfo = {
    createUser,
    signIn ,
    logOut,  
    google,
  }
  return (
    <AuthContext value={getInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;