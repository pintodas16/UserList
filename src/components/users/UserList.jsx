import { useSortSearchContext } from "../../contexts/SortContext.jsx";
import User from "./User.jsx";
function UserList({ users }) {
  const { sortTerm, searchTerm } = useSortSearchContext();
  console.log(sortTerm, searchTerm);

  // implement search functionality based on username
  let newUsers;
  newUsers = users.filter((user) => {
    const name = `${user.firstName} ${user.lastName}`;
    return name.toLowerCase().includes(searchTerm);
  });
  console.log(newUsers);
  // handle the users sorting based on email,firstName,companyName
  if (sortTerm === "firstName") {
    newUsers = newUsers.sort((a, b) => {
      let userOne = a.firstName.toLowerCase();
      let userTwo = b.firstName.toLowerCase();
      return userOne.localeCompare(userTwo);
    });
  } else if (sortTerm === "lastName") {
    newUsers = newUsers.sort((a, b) => {
      let userOne = a.lastName.toLowerCase();
      let userTwo = b.lastName.toLowerCase();
      return userOne.localeCompare(userTwo);
    });
  } else if (sortTerm === "email") {
    newUsers = newUsers.sort((a, b) => {
      let userOne = a.email.toLowerCase();
      let userTwo = b.email.toLowerCase();
      return userOne.localeCompare(userTwo);
    });
  } else if (sortTerm === "companyname") {
    newUsers = newUsers.sort((a, b) => {
      let userOne = a.company.name.toLowerCase();
      let userTwo = b.company.name.toLowerCase();
      return userOne.localeCompare(userTwo);
    });
  } else if (sortTerm === "name") {
    newUsers = newUsers.sort((a, b) => {
      let userOneName = `${a.firstName.toLowerCase()} ${a.lastName.toLowerCase()}`;
      let userTwoName = `${b.firstName.toLowerCase()} ${b.lastName.toLowerCase()}`;
      // console.log(userOneName, userTwoName);
      return userOneName.localeCompare(userTwoName);
    });
  }

  return (
    <main className="px-8">
      <section className="container  md:max-w-6xl mx-auto mt-6 mb-8  ">
        {/* <!-- grid container md:mx-6 lg:mx-auto overflow-x-hidden  --> */}
        <div className="grid gap-4   md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {/* <!-- single user  --> */}
          {newUsers.length <= 0 ? (
            <div className="col-span-3 text-2xl text-center h-96">
              Ther is no user with this name{" "}
            </div>
          ) : (
            newUsers.map((user) => <User key={user.id} user={user} />)
          )}
        </div>
      </section>
    </main>
  );
}

export default UserList;
