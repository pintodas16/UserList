import { useEffect } from "react";
import Loader from "../components/Loder.jsx";
import AddUserFormContainer from "../components/users/AddUser/AddUserFormContainer.jsx";
import UserList from "../components/users/UserList.jsx";
import { useUserContext } from "../contexts/userContext.jsx";
function HomePage() {
  const { users, loding, error } = useUserContext();
  console.log(users, loding, error);

  // dechide what to show
  let content = null;
  if (loding && !error) {
    content = <Loader />;
  }
  if (!loding && error) {
    content = "there is an error ";
  }
  if (!loding && !error && users?.length <= 0) {
    content = "there is no user";
  }
  if (!loding && !error && users?.length > 0) {
    content = <UserList users={users} />;
  }

  return <>{content}</>;
}
export default HomePage;

// {userFormModal && <AddUserFormContainer />}
