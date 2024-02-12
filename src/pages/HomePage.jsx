import Loader from "../components/Loder.jsx";
import UserList from "../components/users/UserList.jsx";
import { useUserContext } from "../contexts/userContext.jsx";
function HomePage() {
  const { users, loding, error } = useUserContext();
  // console.log(users, loding, error);

  // dechide what to show
  let content = null;
  if (loding) {
    content = <Loader />;
  }
  if (!loding && error) {
    content = "there is an error ";
  }
  if (!loding && !error && users?.length > 0) {
    content = <UserList users={users} />;
  }

  return <>{content}</>;
}
export default HomePage;
