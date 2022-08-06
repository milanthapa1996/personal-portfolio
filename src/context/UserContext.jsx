import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const UserContext = createContext({});
const gitHubProfileUrl = "https://api.github.com/users/milanThapa1996";
const gitHubReposUrl = "https://api.github.com/users/milanThapa1996/repos?per_page=10";

export const UserContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getGiHubUserProfileData = async () => {
    try {
      const response = await axios.get(gitHubProfileUrl);
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

  const getGiHubUserRepoData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(gitHubReposUrl);
      setRepoData(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getGiHubUserRepoData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading: loading,
        error: error,
        profileData: profileData,
        repoData: repoData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
