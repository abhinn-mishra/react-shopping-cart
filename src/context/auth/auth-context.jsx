import { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  name: null,
  lastName: null,
  email: null,
  phoneNumber: null,
  addresses: [],
  isVerified: true,
  authIsReady: true,
});

export default AuthContext;
