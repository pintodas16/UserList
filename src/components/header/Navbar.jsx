import Button from "../Btn";

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
        <form action="">
          <div className="hidden md:block relative">
            <span className="w-4 h-4 absolute left-2 top-2 text-center text-xl">
              <i className="fa-solid fa-magnifying-glass text-xl text-sky-600"></i>
            </span>
            <input
              type="text"
              className="pl-8 py-2 px-4 text-lg font-semibold leading-3 border-2 rounded-md border-sky-600 focus:outline-none focus:border-sky-600 "
            />
          </div>
        </form>
      </div>
      {/* <!-- add task  --> */}

      <Button handleBtn={handleOpenBtn}>Add User</Button>
    </nav>
  );
}
export default Navbar;
