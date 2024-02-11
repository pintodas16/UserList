import { useUserContext } from "../../contexts/userContext.jsx";
import UserSort from "../users/UserSort.jsx";
import Navbar from "./Navbar.jsx";

import { useParams } from "react-router-dom";

function Header({ onOpenModal }) {
  const { users, loading } = useUserContext();
  const { id } = useParams();

  return (
    // <!-- section navbar  -->
    <header className="px-8">
      {/* navbar  */}
      <Navbar onOpenModal={onOpenModal} />

      {/* <!--  sort  --> */}
      {!loading && users?.length > 0 && !id && <UserSort />}
    </header>
  );
}
export default Header;
