import UserSort from "../users/UserSort.jsx";
import Navbar from "./Navbar.jsx";

function Header({ onOpenModal }) {
  return (
    // <!-- section navbar  -->
    <header className="px-4 md:px-6  pt-6 ">
      {/* navbar  */}
      <Navbar onOpenModal={onOpenModal} />

      {/* <!--  sort  --> */}
      <UserSort />
    </header>
  );
}
export default Header;
