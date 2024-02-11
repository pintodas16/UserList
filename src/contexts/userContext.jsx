import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

// create a context
const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const [createdUser, setCreatedUser] = useState(null);

  const [userFormModal, setUserFormModal] = useState(false);
  const handleUserFormModal = () => {
    setUserFormModal((prev) => !prev);
  };

  //   get all users
  const getUsers = async () => {
    try {
      const users = await axios.get("/users");
      const data = await users.data;
      // console.log(data.users);
      setUsers(data.users);
      setLoding(false);
    } catch (error) {
      setError(error.message);
    }
  };
  // addUser       https://dummyjson.com/users/add

  const addUser = async (user) => {
    const {
      firstName,
      lastName,
      email,
      street,
      suite,
      city,
      companyName,
      avatar,
    } = user;
    const newUser = {
      firstName,
      lastName,
      email,
      image: avatar,
      address: {
        address: `${street},${suite}`,
        city,
      },
      company: {
        name: companyName,
      },
    };

    try {
      const response = await axios.post("/users/add", JSON.stringify(newUser));
      setCreatedUser(response.data);
      setUsers([...users, response.data]);
      setLoding(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        userFormModal,
        handleUserFormModal,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUserContext() {
  return useContext(UserContext);
}

export { UserContextProvider, useUserContext };
