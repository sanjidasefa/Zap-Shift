import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
  const getInfo = ()=>{

  }
  return (
    <AuthContext value={getInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;