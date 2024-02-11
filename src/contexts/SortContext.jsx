import { createContext, useContext, useState } from "react";

const SortSearchContext = createContext();
const SortSearchContextProvider = ({ children }) => {
  const [sortTerm, setSortTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleSortTerm = (e) => {
    setSortTerm(e.target.value);
    console.log(e.target.value);
  };
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };
  return (
    <SortSearchContext.Provider
      value={{
        sortTerm,
        searchTerm,
        handleSortTerm,
        handleSearchTerm,
      }}
    >
      {children}
    </SortSearchContext.Provider>
  );
};

function useSortSearchContext() {
  return useContext(SortSearchContext);
}
export { SortSearchContextProvider, useSortSearchContext };
