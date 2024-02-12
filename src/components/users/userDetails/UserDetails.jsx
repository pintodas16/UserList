function UserDetails({ user }) {
  // console.log(user);
  return (
    <div>
      <main className="px-8">
        <section className="container  md:max-w-6xl mx-auto mt-6 mb-8  ">
          {/* <!-- flex-container  --> */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* <!-- user info  --> */}
            <div className="basis-1/3 px-5 py-3 border border-gray-300 bg-gray-50 shadow-2xl rounded-lg">
              {/* <!-- image  --> */}
              <img
                className="mx-auto h-32 w-40"
                src={user?.image}
                alt="user-avatar"
              />
              {/* <!-- FirstName  --> */}
              <div className="">
                <p className="text-lg font-semibold mb-1">FirstName</p>
                <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                  {user?.firstName}
                </p>
              </div>
              {/* <!-- LastName  --> */}
              <div className="mb-1">
                <p className="text-lg font-semibold mb-1">LastName</p>
                <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                  {user?.lastName}
                </p>
              </div>
              {/* <!-- email  --> */}
              <div className="mb-1">
                <p className="text-lg font-semibold mb-1">Email</p>
                <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                  {user?.email}
                </p>
              </div>
              {/* <!-- University  --> */}
              <div className="mb-1">
                <p className="text-lg font-semibold mb-1">University</p>
                <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                  {user?.university}
                </p>
              </div>
              {/* <!-- cryption coin --> */}
              <div className="">
                <p className="text-lg font-semibold mb-1">cryptio coin</p>
                <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                  {user?.crypto?.coin}
                </p>
              </div>
              {/* <!-- cryption coin networdk --> */}
              <div className="">
                <p className="text-lg font-semibold mb-1">
                  cryptio coin network
                </p>
                <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                  {user?.crypto?.network}
                </p>
              </div>
            </div>
            {/* <!-- company  --> */}
            <div className="basis-2/3 bg-gray-50 px-5 py-3 border border-gray-300 shadow-2xl rounded-lg">
              {/* <!-- flex container  --> */}
              <div className="flex flex-col md:flex-row md:gap-6 ">
                {/* <!-- address  --> */}
                <div className="basis-1/2 mt-4 md:mt-0">
                  <h5 className="text-center text-xl font-semibold border-b-2 pb-2 border-b-gray-300 md:mb-2">
                    User address details{" "}
                  </h5>
                  {/* <!-- Address  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">address</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.address?.address}
                    </p>
                  </div>
                  {/* <!-- Address city  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">city</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.address?.city}
                    </p>
                  </div>
                  {/* <!-- Address postal code --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">postal code</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.address?.postalCode}
                    </p>
                  </div>
                  {/* <!-- Address state --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">state</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.address?.state}
                    </p>
                  </div>
                  {/* <!-- domain state --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">domain</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.domain}
                    </p>
                  </div>
                  {/* <!-- phone number  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">phone number</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.phone}
                    </p>
                  </div>
                </div>
                {/* <!-- company  --> */}
                <div className="basis-1/2 mt-4 md:mt-0">
                  <h5 className="text-center text-xl font-semibold border-b-2 pb-2 border-b-gray-300 md:mb-2">
                    User company details{" "}
                  </h5>
                  {/* <!-- company  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">company name</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.company?.name}
                    </p>
                  </div>
                  {/* <!-- company department  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">department</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.company?.department}
                    </p>
                  </div>
                  {/* <!-- job position  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">position</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.company?.title}
                    </p>
                  </div>
                  {/* <!-- company Address  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">address</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.company?.address?.address}
                    </p>
                  </div>
                  {/* <!-- company city  --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">company city</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.company?.address?.city}
                    </p>
                  </div>
                  {/* <!-- comapny state --> */}
                  <div className="">
                    <p className="text-lg font-semibold mb-1">state</p>
                    <p className="px-2 text-lg font-medium  py-2 border-2 rounded-lg border-gray-300">
                      {user?.company?.address?.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDetails;
