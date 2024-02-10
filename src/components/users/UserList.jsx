import User from "./User.jsx";

function UserList({ users }) {
  // console.log(users);

  return (
    <main className="">
      <section className="container max-w-6xl  mx-auto px-4 md:px-6 lg:px-0 xl:px-0 mb-10 ">
        {/* <!-- grid container md:mx-6 lg:mx-auto overflow-x-hidden  --> */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- single user  --> */}
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default UserList;
