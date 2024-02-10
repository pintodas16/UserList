import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import AddUser from "../components/users/AddUser.jsx";
import UserList from "../components/users/UserList.jsx";
import axios from "../utils/axiosInstance.js";

function HomePage() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const handleUserModal = () => {
    setUserModal((prev) => !prev);
  };
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await axios.get("/users");
        const data = await users.data;
        // console.log(data.users);
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    if (userModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [userModal]);

  // dechide what to show
  let content = null;
  if (loading) {
    content = "loading";
  }
  if (!loading && error) {
    content = error;
  }
  if (!loading && !error && users?.length <= 0) {
    content = "there is no user";
  }
  if (!loading && !error && users?.length > 0) {
    content = <UserList users={users} />;
  }
  let modal = true;
  return (
    <>
      <Header onOpenModal={handleUserModal} />
      {content}
      {userModal && <AddUser onClose={handleUserModal} />}
      <footer></footer>
    </>
  );
}
export default HomePage;
