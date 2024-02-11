import Button from "../Btn";
import SearchBox from "./SearchBox.jsx";
function Navbar({ onOpenModal }) {
  const handleOpenBtn = (e) => {
    e.preventDefault();
    onOpenModal();
  };
  return (
    <nav className="border rounded-md bg-white shadow-md container  md:max-w-6xl mx-auto mt-6 mb-8 px-4 py-4 flex justify-between items-center">
      {/* <!-- logo --> */}
      <h1 className=" text-2xl font-bold text-sky-600 hover:opacity-70">
        <span>U</span>
        <span>List</span>
      </h1>
      {/* <!-- secarchbar --> */}
      <div className=" ">
        <SearchBox />
      </div>
      {/* <!-- add task  --> */}

      <Button handleBtn={handleOpenBtn}>Add User</Button>
    </nav>
  );
}
export default Navbar;
