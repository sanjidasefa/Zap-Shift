import axios from 'axios';
import React from 'react';

const secureInfo = axios.create({
  baseURL : 'http://localhost:3232'
})

const useUserSecure = () => {
  return secureInfo;
};

export default useUserSecure;