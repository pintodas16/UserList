import { useParams } from "react-router-dom";
import UserDetails from "../components/users/userDetails/UserDetails.jsx";
import { useUserContext } from "../contexts/userContext";
function UserDetailsPage() {
  const { users } = useUserContext();
  const { id } = useParams();
  const user = users.filter((user) => Number(user.id) === Number(id));

  return (
    <>
      {user.length > 0 ? (
        <UserDetails user={user[0]} />
      ) : (
        <div className="text-center text-2xl h-96">
          Ther is no user with this id{" "}
        </div>
      )}
    </>
  );
}

export default UserDetailsPage;
