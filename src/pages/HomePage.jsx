import { useEffect } from "react";
import Loader from "../components/Loder.jsx";
import AddUserFormContainer from "../components/users/AddUser/AddUserFormContainer.jsx";
import UserList from "../components/users/UserList.jsx";
import { useUserContext } from "../contexts/userContext.jsx";
function HomePage() {
  const { users, loading, error, userFormModal } = useUserContext();

  // when add user form popup stop y scrolling
  useEffect(() => {
    if (userFormModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [userFormModal]);

  // dechide what to show
  let content = null;
  if (loading) {
    content = <Loader />;
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

  return (
    <>
      {content}
      {userFormModal && <AddUserFormContainer />}
    </>
  );
}
export default HomePage;

// {userFormModal && <AddUserFormContainer />}
