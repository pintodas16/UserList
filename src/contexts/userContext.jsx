import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

// create a context
const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const [createdUser, setCreatedUser] = useState({});

  const [userFormModal, setUserFormModal] = useState(false);
  const handleUserFormModal = () => {
    setUserFormModal((prev) => !prev);
  };

  // when add user form popup stop y scrolling
  useEffect(() => {
    if (userFormModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [userFormModal]);

  //   get all users
  const getUsers = async () => {
    setLoding(true);
    setError(false);
    try {
      const users = await axios.get("/users");
      const data = await users.data;
      // console.log(data.users);
      setUsers(data.users);
      setLoding(false);
    } catch (error) {
      // setError(error.message);
      setError(true);
      setLoding(false);
    }
  };
  //get single user by id
  const getUser = async (id) => {
    setLoding(true);
    setError(false);
    try {
      const users = await axios.get(`/users/${id}`);
      const data = await users.data;
      // console.log(loding);
      // console.log(data);
      setUser(data);
      setLoding(false);
    } catch (error) {
      // setError(error.message);
      setError(true);
      setLoding(false);
    }
  };

  // addUser       https://dummyjson.com/users/add

  const addUser = async (user) => {
    setLoding(true);
    setError(false);
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
      // setError(error.message);
      setError(true);
      setLoding(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loding,
        error,
        userFormModal,
        handleUserFormModal,
        addUser,
        getUser,
        user,
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
