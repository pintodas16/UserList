import { Link } from "react-router-dom";

function User({ user }) {
  // console.log(user);
  const name = `${user.firstName} ${user.lastName}` || "";
  const address = `${user?.address?.address},${user?.address?.city}` || "";
  return (
    <div className=" bg-white  px-6 py-6 border border-gray-200 rounded-xl hover:shadow-lg  flex justify-center flex-col items-center">
      {/* <!-- avatar,name and email */}
      <div className="flex justify-center ">
        {/* <!-- user avatar  --> */}
        <img
          src={user?.image}
          className=" h-40 px-8 w-56 bg-cover bg-center rounded-lg "
          alt=""
        />
        {/* <!-- name and email  --> */}
      </div>

      {/* <!-- address and company name  --> */}

      <div className="flex flex-col gap-2 mt-4">
        {/* <!-- name  --> */}
        <div className="">
          <Link
            to={`/user/${user.id}`}
            className="text-xl capitalize font-semibold"
          >
            {name}
          </Link>
        </div>
        {/* email  */}
        <div className="flex items-center gap-2 text-lg font-medium">
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>
          <span className="">{user?.email}</span>
        </div>
        {/* <!-- address  --> */}
        <div className=" flex gap-2 items-center text-lg font-medium">
          <i className="fa-solid fa-location-dot"></i>
          <p className=" max-w-64 text-balance overflow-hidden">{address}</p>
        </div>
        {/* <!-- company name  --> */}
        <div className="flex gap-2 items-center text-lg font-medium">
          <i className="fa-solid fa-briefcase"></i>
          <span> {user?.company?.name} </span>
        </div>
      </div>
    </div>
  );
}
export default User;
