function User({ user }) {
  console.log(user);
  const name = `${user.firstName} ${user.lastName}`;
  const address = `${user.address.address},${user.address.city}`;
  return (
    <div className="bg-white p-6 border border-gray-200 rounded-xl hover:shadow-lg">
      {/* <!-- avatar,name and email container  --> */}
      <div className="flex gap-4 flex-row justify-between ">
        {/* <!-- user avatar  --> */}
        <img
          src={user.image}
          className="basis1/3 h-20 w-20 rounded-full border border-sky-600 p-2 "
          alt=""
        />
        {/* <!-- name and email  --> */}
        <div className="basis-2/3  self-center ">
          <p className="text-xl capitalize font-semibold">{name}</p>
          <div className="flex items-center  gap-1">
            <span>
              <i className="fa-regular fa-envelope"></i>
            </span>
            <span className="text-xl">{user.email}</span>
          </div>
        </div>
      </div>

      {/* <!-- address and company name  --> */}

      <div className="flex flex-col gap-2 mt-4">
        {/* <!-- address  --> */}
        <div className=" flex gap-2 items-center text-lg font-medium">
          <i className="fa-solid fa-location-dot"></i>
          <span className="max-w-full">{address}</span>
        </div>
        {/* <!-- company name  --> */}
        <div className="flex gap-2 items-center text-lg font-medium">
          <i className="fa-solid fa-briefcase"></i>
          <span> {user.company.name} </span>
        </div>
      </div>
    </div>
  );
}
export default User;
