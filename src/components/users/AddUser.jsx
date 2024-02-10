import { useRef } from "react";

function AddUser({ onClose }) {
  const modalRef = useRef();
  const handleCloseModal = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    // <!-- <h5 className="text-5xl bold">hello world </h5> -->
    <section
      ref={modalRef}
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm "
    >
      {/* <!-- container div  --> */}
      <div className="container max-w-lg mx-auto  ">
        {/* <!-- flex container  --> */}
        <div className="flex h-screen justify-center items-center">
          {/* <!-- form container  --> */}
          <div className="p-4 bg-white border relative  border-sky-600 rounded-lg ">
            <h5 className="font-semibold text-xl text-center border-b border-b-sky-500 pb-2 mb-2">
              Add User
            </h5>
            {/* modal close btn  */}
            <div
              onClick={onClose}
              className="border-2 px-2 py-1 absolute top-2 right-5 rounded-lg cursor-pointer"
            >
              <i className="fa-solid fa-x"></i>
            </div>
            <form action="">
              <div className="flex flex-col gap-1">
                {/* <!-- first name nad last name  --> */}
                <div className="flex gap-4 ">
                  {/* <!-- first name  --> */}
                  <div className="w-1/2 flex flex-col gap-1 ">
                    <label className="font-semibold text-lg" htmlFor="">
                      First name
                    </label>
                    <input
                      className="outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                      type="text"
                      placeholder="enter first name"
                    />
                  </div>
                  {/* <!-- last  name  --> */}
                  <div className="w-1/2 flex flex-col">
                    <label
                      className="font-semibold text-lg capitalize"
                      htmlFor=""
                    >
                      last name
                    </label>
                    <input
                      className="outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                      type="text"
                      placeholder="enter last name"
                    />
                  </div>
                </div>
                {/* <!-- email  --> */}
                <div className="w-full">
                  <label
                    className="block font-semibold text-lg capitalize"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    className="w-full outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                    type="email"
                    placeholder="enter your email"
                  />
                </div>
                {/* <!--Avatar  --> */}
                <div className="">
                  <label
                    className="block font-semibold text-lg capitalize"
                    htmlFor=""
                  >
                    Avatar
                  </label>
                  <input
                    className="w-full outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                    type="file"
                    placeholder="enter a file"
                  />
                </div>

                {/* <!-- street suite   --> */}
                <div className="flex gap-4 ">
                  {/* <!-- street name  --> */}
                  <div className="w-1/2 flex flex-col gap-1 ">
                    <label className="font-semibold text-lg" htmlFor="">
                      Street
                    </label>
                    <input
                      className="outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                      type="text"
                      placeholder="enter first name"
                    />
                  </div>
                  {/* <!-- suite  --> */}
                  <div className="w-1/2 flex flex-col">
                    <label
                      className="font-semibold text-lg capitalize"
                      htmlFor=""
                    >
                      suite
                    </label>
                    <input
                      className="outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                      type="text"
                      placeholder="enter last name"
                    />
                  </div>
                </div>

                {/* <!-- city  --> */}
                <div className="w-full">
                  <label
                    className="block font-semibold text-lg capitalize"
                    htmlFor=""
                  >
                    city
                  </label>
                  <input
                    className="w-full outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                    type="text"
                    placeholder="enter your email"
                  />
                </div>

                {/* <!-- compnay name  --> */}
                <div className="w-full">
                  <label
                    className="block font-semibold text-lg capitalize"
                    htmlFor=""
                  >
                    Company name
                  </label>
                  <input
                    className="w-full outline-none focus:outline-none border border-sky-600 rounded-md px-4 py-2 font-medium"
                    type="text"
                    placeholder="enter your email"
                  />
                </div>
                {/* <!-- submit button  --> */}
                <a
                  href=""
                  type="button"
                  className="mt-2 mx-auto px-8 py-2 border border-gray-500 rounded-lg"
                >
                  add user
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddUser;
