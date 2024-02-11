import { useSortSearchContext } from "../../contexts/SortContext";
import Form from "../form/Form";
function SearchBox() {
  const { searchTerm, handleSearchTerm } = useSortSearchContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form action="" onSubmit={handleSubmit}>
      <div className="hidden md:block relative">
        <span className="w-4 h-4  absolute left-2 top-2 text-center text-xl">
          <i className="fa-solid fa-magnifying-glass text-xl text-sky-600"></i>
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTerm}
          className="pl-8 py-2 px-4 text-lg font-semibold leading-3 border-2 rounded-md border-sky-600 focus:outline-none focus:border-sky-600 "
        />
      </div>
    </Form>
  );
}
export default SearchBox;
