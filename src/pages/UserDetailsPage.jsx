import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loder";
import UserDetails from "../components/users/userDetails/UserDetails.jsx";
import { useUserContext } from "../contexts/userContext";
function UserDetailsPage() {
  const { user, loding, error, getUser } = useUserContext();
  const { id } = useParams();
  useEffect(() => {
    getUser(id);
  }, [id]);

  // dechide what to show
  // let content;
  if (loding) {
    return <Loader />;
  }

  return <>{user?.id && <UserDetails user={user} />} </>;
}

export default UserDetailsPage;
