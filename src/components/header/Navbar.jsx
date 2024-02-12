import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext.jsx";
import Button from "../Btn";
import SearchBox from "./SearchBox.jsx";

function Navbar() {
  const { id } = useParams();
  const { userFormModal, handleUserFormModal } = useUserContext();

  const handleOpenBtn = (e) => {
    e.preventDefault();
    handleUserFormModal();
  };
  return (
    <nav className="border rounded-md bg-white shadow-md container  md:max-w-6xl mx-auto mt-6 mb-8 px-4 py-4 flex justify-between items-center">
      {/* <!-- logo --> */}
      <Link
        to="/"
        className=" text-2xl font-bold text-sky-600 hover:opacity-70"
      >
        <span>U</span>
        <span>List</span>
      </Link>
      {/* <!-- secarchbar --> */}
      {!id && <SearchBox />}
      {/* <!-- add task  --> */}

      <Button handleBtn={handleOpenBtn}>Add User</Button>
    </nav>
  );
}
export default Navbar;
