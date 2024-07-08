import { decodeToken } from 'react-jwt';

// const tokenMock = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoidXVpZCIsImV4cCI6IjIwMjItMDMtMTIgMDE6NTQ6MDkuOTM3In0.pNOzq8mHtywkU4yOL7u_BoFoOsT799TJCGwl6KayLz0"

const decodeJWT = (token: string) => {
  return decodeToken(token);
};

export { decodeJWT };
