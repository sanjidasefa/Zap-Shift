import React, { use } from 'react';
import { AuthContext } from '../component/Auth/AuthContext/AuthContext';

const useAuth = () => {
  const getInfo = use(AuthContext)
  return getInfo;
};

export default useAuth;