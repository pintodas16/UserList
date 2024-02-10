import User from "./User.jsx";

function UserList({ users }) {
  // console.log(users); container  md:max-w-6xl mx-auto mt-6 mb-8
  // container max-w-6xl  mx-auto px-4 md:px-6 lg:px-0 xl:px-0 mb-10

  return (
    <main className="px-8">
      <section className="container  md:max-w-6xl mx-auto mt-6 mb-8  ">
        {/* <!-- grid container md:mx-6 lg:mx-auto overflow-x-hidden  --> */}
        <div className="grid gap-4   md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
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
