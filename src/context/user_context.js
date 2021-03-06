import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();
UserContext.displayName = 'USER-CONTEXT';

export const UserProvider = ({ children }) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
    error,
  } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    // console.log('██ [Auth0] user ██', user);
    // console.log('██ [Auth0] isAuthenticated ██', isAuthenticated);
    // console.log('██ [Auth0] isLoading ██', isLoading);
    // if (isAuthenticated) {
    //   setMyUser(user);
    // } else {
    //   // setMyUser(null);
    //   setMyUser(false);
    // }
    setMyUser(user);
  }, [user]); // ON INITIAL RENDER + DEPENDENCY 'user'
  // }, [isAuthenticated]); // ON INITIAL RENDER + DEPENDENCY 'isAuthenticated'

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
