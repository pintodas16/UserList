function UserSort() {
  return (
    <section className="">
      {/* <!-- container  container  md:max-w-6xl mx-auto mt-6 mb-8 px-4 py-4 --> */}
      <div className="container  md:max-w-6xl mx-auto mt-6 mb-8 px-4 py-4 border border-gray-300 bg-white border-dotted rounded-lg">
        {/* <!-- flex continaer  --> */}
        <div className="flex items-center gap-4 justify-end">
          {/* <!-- for sorting  --> */}
          <div className="flex flex-wrap md:gap-2 items-center  ">
            <h5 className="text-lg md:text-xl bold capitalize ">sort by :</h5>
            <select
              name=""
              id=""
              className="px-2 py-1 md:text-lg border-2 border-gray-200 border-dotted focus:ring-blue-400 focus:outline-blue-400
                      rounded-lg"
            >
              <option value="date-ascending"> Date(ascending)</option>
              <option value="date-descending"> Date(descending)</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserSort;
