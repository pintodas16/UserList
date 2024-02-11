import { useSortSearchContext } from "../../contexts/SortContext";

function UserSort() {
  const { sortTerm, handleSortTerm } = useSortSearchContext();
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
              className="px-2 py-1 md:text-lg border-2 border-sky-600 border-dotted focus:ring-sky-600 focus:outline-sky-600
                      rounded-lg"
              value={sortTerm}
              onChange={handleSortTerm}
            >
              <option value="" disabled>
                select one{" "}
              </option>
              <option value="firstName">FirstName</option>
              <option value="name">name</option>
              <option value="lastName"> LastName</option>
              <option value="email"> Email</option>
              <option value="companyname">Company name</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserSort;
