import { useRef } from "react";
import { useUserContext } from "../../../contexts/userContext";
import AddUserForm from "./AddUserForm";
function AddUserFormContainer() {
  const { handleUserFormModal } = useUserContext();

  // handle close modal when user click outside of the form
  const modalRef = useRef();
  const handleCloseModal = (e) => {
    if (e.target === modalRef.current) {
      handleUserFormModal();
    }
  };

  return (
    <section
      ref={modalRef}
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm  "
    >
      {/* <!-- container div  --> */}
      <div className="container max-w-sm md:max-w-lg mx-auto   ">
        {/* <!-- flex container h-screen  --> */}
        <div className="flex h-screen  justify-center items-center">
          {/* <!-- form container  --> */}
          <div className="p-4 bg-white border relative  border-sky-600 rounded-lg ">
            <h5 className="font-semibold text-xl text-center border-b border-b-sky-500 pb-2 mb-2">
              Add User
            </h5>
            {/* modal close btn  */}
            <div
              onClick={handleUserFormModal}
              className="border-2 px-2 py-1 absolute top-2 right-5 rounded-lg cursor-pointer"
            >
              <i className="fa-solid fa-x"></i>
            </div>
            <AddUserForm />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddUserFormContainer;
