import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const UserContext = createContext({});
const gitHubUrl = "https://api.github.com/users/milanThapa1996";

export const UserContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getGiHubUserProfileData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(gitHubUrl);
      setProfileData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getGiHubUserProfileData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading: loading,
        error: error,
        profileData: profileData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
