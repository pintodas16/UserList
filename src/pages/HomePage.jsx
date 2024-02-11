import { useEffect } from "react";
import Loader from "../components/Loder.jsx";
import Header from "../components/header/Header.jsx";
import AddUserFormContainer from "../components/users/AddUser/AddUserFormContainer.jsx";
import UserList from "../components/users/UserList.jsx";
import { useSortSearchContext } from "../contexts/SortContext.jsx";
import { useUserContext } from "../contexts/userContext.jsx";

function HomePage() {
  const { users, loading, error, userFormModal, handleUserFormModal } =
    useUserContext();

  // console.log(users);
  // console.log(users, loading, error, userFormModal);

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
      <Header onOpenModal={handleUserFormModal} />
      {content}
      {userFormModal && <AddUserFormContainer />}
      <footer></footer>
    </>
  );
}
export default HomePage;
